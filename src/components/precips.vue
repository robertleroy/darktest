<script>
  import Chart from 'chart.js';
  export default {
    name: 'precips',
    data() {
      return {
        title: 'precips',
        myChart: null,
        myTimer: null,
        ticking: false,
        precipChart: null,
      };
    },
    computed: { 
      minutes() {
        return this.$store.getters.minutely;
      },

      precipValues() {
        return this.minutes.map(el => el.precipIntensity)
          .filter((el,i) => i%2===0);
      },

      timeLabels() {
        return this.minutes.map(el => el.time*1000)
          .filter((el,i) => i%2===0);
      },
      precipHigh() {
        return Math.max.apply(Math, this.minutes.map(el => el.precipIntensity))
      },

    }, // computed //

    methods: { 
      drawChart() {
        var myChart = this.$refs.myChart.getContext('2d');

        Chart.defaults.global.defaultFontSize = 12;
        Chart.defaults.global.defaultFontColor = '#777';

        this.precipChart = new Chart( myChart, {
          type: 'line',
          data: {
            labels: this.timeLabels,
            datasets: [{
              label: `${this.$store.getters.minutely.icon}`,
              data: this.precipValues,
              backgroundColor: '#BBDEFBBB',
              borderWidth: 0,
              pointRadius: 0,
            }],
          },
          options: {
            animation: {
              easing: 'linear'
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  displayFormats: {
                    minute: 'h:mm'
                  }
                }
              }],	
              yAxes: [{
                ticks: {
                  maxTicksLimit: 7,
                  min: 0,
                  max: (this.precipHigh*1.2).toFixed(1),
                  beginAtZero: true,
                  callback: function(value) {
                    return Math.ceil(value*10)/10 === 0.1 || Math.ceil(value*10)/10 === 0.2 ? 'med' : 
                          Math.ceil(value*10)/10 === 0.3 || Math.ceil(value*10)/10 === 0.4 ? 'heavy' : 
                          value >= this.precipHigh ? "" : value;
                  },
                },
              }],
            },
            title: {
              display: false,
              fontSize: 18,
            },
            legend: {
              display: false,
              position: 'right',   
              labels: {
                fontColor: '#777',
              }
            },
            layout: {
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            },
            tooltips: {
              enabled: false,
            }
          }
        })
      }, // drawChart //

      toggleTimer() {
        this.ticking = !this.ticking;
        if (this.ticking) {
          this.myTimer = setInterval(this.updateValues, 500); 
        } else {
          clearInterval(this.myTimer);
        }         
        this.drawChart();
      },

      updateValues() {
        const newVals = 
          this.precipValues.map(el => this.randomize(el))

        this.precipChart.data.datasets[0].data = newVals;
        this.precipChart.update();
        // console.log(newVals[0]);
      },

      randomize(x) {
        const abs = Math.random()*2-1;
        const multiplier = x > 0.5 ? 0.2 : 0.3;
        return (x*multiplier) * abs + x;
      },
      
    }, // methods //

    mounted() {
      // this.drawChart();
      this.toggleTimer();   

      // console.log(this.icon);
    },

    beforeDestroy() {
      if (this.myChart) {
        this.myChart.destroy();
      }
      clearInterval(this.myTimer);
      this.myTimer = null;
    },
  };
</script>

<template>
  <section id='precips'>
    <canvas id="myChart" ref="myChart"></canvas>
  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

</style>