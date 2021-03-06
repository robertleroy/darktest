<script>
  import * as d3 from "d3";

  export default {
    name: 'Chart',
    data() {
      return {
        title: 'Chart',
        height: 150,
        width: 350,
        margin: {top: 12, right: 12, bottom: 24, left: 12},
      };
    },

    computed: {
      values() {
        return this.$store.getters.values;
      },

     }, /* computed */

    methods: { 
      drawChart() {
      
        let self = this;
        const height = self.height, width = self.width,
              margin = self.margin, 
              values = self.values;
              
        const yMax = d3.max(values,d => d.value*1.2),
              dynamicY = yMax < 0.1 ? [0,0.1] : 
                        yMax < 0.3 ? [0,0.3] : 
                        yMax < 0.6 ? [0,0.6] : 
                        yMax < 1 ? [0,1] : [0,yMax];
        
        const yAxisLabels = yMax < 0.1 ? ["0.03","0.05","drizzle"] : 
                            yMax < 0.3 ? ["light","0.2","medium"] : 
                            yMax < 0.6 ? ["light","medium","heavy"] : 
                            ["light","medium","heavy",""] ;
      
      
        const x = d3.scaleTime() /* timeline x */
          .domain(d3.extent(values, d => d.time))
          .range([margin.left, width - margin.right])
        
        const y = d3.scaleLinear() /* dynamic y */
          .domain(dynamicY)
          .range([height - margin.bottom, margin.top]);
        
        const xAxis = g => g 
          .attr("transform", `translate(0,${height - margin.bottom + 6})`)
          .call(d3.axisBottom(x)
                .ticks(4).tickSize(0))
          .call(g => g.select(".domain").remove());
        
        const yScale = d3.scaleBand() /* y labels */
          .domain(yAxisLabels)
          .range([height - margin.bottom, margin.top]);
        
        const yAxis = g => g  /* y labels */
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisRight(yScale)
                .tickSize(width - margin.left - margin.right))
          .call(g => g.select(".domain").remove())
          .attr("stroke-dasharray", "2,2")
          .attr("stroke-opacity", 0.5)
          .call(g => g.selectAll(".tick text")
              .attr("x", 8)
              .attr("dy", 12))
              // .attr("dy", -5))
        
        var area = d3.area()
          .curve(d3.curveNatural)
          .x(d => x(d.time))
          .y0(y(0))
          .y1(d => y(d.value));
        
        const svg = d3.select('#chart').append("svg")
        .attr("viewBox", [0, 0, width, height]);
        // .attr('width',width)
        // .attr('height',height);

        svg.append("path")
        .datum(self.updatedValues())
        .attr("fill", "steelblue")
        .attr("d", area)
              
          .transition()
          .duration(2000)       
          .attr('d', (area))
    
          .on("start", function repeat() {
              d3.active(this)        
                .transition()
                .duration(2000)        
                .attr('d', (area(self.updatedValues()) ))
                .on("start", repeat);  
          });
        
        
        svg.append('g')
          .call(xAxis); 

        svg.append('g')
          .call(yAxis);

      }, // drawChart //

      updatedValues() { 
        return this.values.map(el => {
          return {...el, value: this.randomize(el.value)}
        })
      },
        
      randomize(x) {
        const abs = Math.random()*2-1;
        const multiplier = x > 0.5 ? 0.2 : 0.3;
        return (x*multiplier) * abs + x;
      }, 

    }, /* methods */

    mounted() { 
      this.drawChart();
    }
  };
</script>

<template>
  <div id="chart"></div>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';


</style>