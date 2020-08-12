<script>

  import { mapGetters } from 'vuex';
  import Hours from '../components/hours';
  import RangeBar from '../components/rangeBar';
  import Chart from '../components/chart';

  export default {
    name: 'today',
    components: {
      'Hours': Hours,
      'RangeBar': RangeBar,
      'Chart': Chart,
    },
    data() {
      return {
        title: 'today',
        show: true,
      };
    },

    computed: {
      ...mapGetters([
        'current', 'days', 'daily', 'hourly', 'weekRange', 'summary', 'doneLoading', 'isDoneLoading', 'isPrecipHour'
      ]),   


      
    },

    methods: { 
             
      precipType(type) {
        let res = "";
        type === "rain" ? res = `💧` :
        type === "rain" ? res = `❄️` :
        type === "sleet" ? res = `🧊` : res = ' '    
        return res 
      },
    },

    mounted() { 
    }
  };
</script>

<template>
  <section id='today'>
    <div class="grid_main">      
      <div class="today"> 

        <div class="forecastTime">
          <span> 
            {{ current.time* 1000 | date('dddd') }}, </span>
          <span> 
            {{ current.time* 1000 | date('mmmm dS') }} </span>
          <span> 
            {{ current.time* 1000 | date('h:MM tt') }} </span>
        </div> <!-- forecastTime -->


        <div class="nowcast">
          <div class="snapshot">  
            <div :class="'wi wi-forecast-io-' + current.icon"/>

            <div class="nowTemp">{{current.temperature | number | suffix('°')}}</div>            
          </div> <!-- snapshot -->

          <div class="nowSummary">{{current.summary}}</div>

        </div> <!-- nowcast -->


        <transition name='fade' mode='out-in'>
          <div class="precipChart" :key="current.time"
                v-if="isPrecipHour">   

            <chart/>

            <div class="title">
              {{summary.minutely}}
            </div>        
          </div>
        </transition>   



        <div class="todayMeta">

          <div class="dl">
            <div class="dt">High</div>
            <div class="dayHigh dd">{{daily[0].temperatureHigh | number | suffix('°')}}</div>
            <div class="dt">Low</div>
            <div class="dayLow dd">{{daily[0].temperatureLow | number | suffix('°')}}</div>
          </div>
          

          <div class="dl">
            <div class="dt">Sunrise</div>
            <div class="sunrise dd">{{daily[0].sunriseTime*1000 | date('h:MM tt')}}</div>
            <div class="dt">Sunset</div>
            <div class="sunset dd">{{daily[0].sunsetTime*1000 | date('h:MM tt')}}</div>

          </div>
        </div>



      
      <!-- <hr> -->

      </div> <!-- today -->

      <div class="todayHours" v-if="show">
        
        <div class="summary">{{daily[0].summary}}</div>
        <hours :hours="hourly.slice(0,24)"/>
      </div>

      <hr>

      <div class="week">
        <div class="weekSummary">
          <div>{{summary.daily}}</div>
        </div>

        <!-- :opened="i===0 ? true : false" -->
        <accordion v-for="(day,i) of days" 
          :key="i">
          <template #header>     

            <div class="pnlHeader">

              <!-- border -->
              <div class="dayIcon ">
                <i :class="'wi wi-forecast-io-' + daily[i].icon"></i>
              </div> 
              

              <div class="weekday ">

                <div v-if="i===0">Today</div>
                <div v-else>
                  {{daily[i].time*1000 | date('ddd')}}                   
                </div>

                <div class="precip" >
                  <!-- <div v-if='daily[i].precipProbability > 0.09'> -->
                    
                  <div>
                    <span>{{ precipType(daily[i].precipType) }}</span>
                    
                    <span v-if='daily[i].precipProbability < 0.01'>
                      0%
                    </span>
                    <span v-else>{{ daily[i].precipProbability*100 | number | suffix('%')}}</span>
                  </div>
                </div>  

              </div> <!-- weekday -->
  


              <range-bar :domain="weekRange" 
                        :high="daily[i].temperatureHigh" :low="daily[i].temperatureLow"></range-bar> 

            </div>




            <!-- <div class="pnlHead">
              
              <div class="title">
                <div class="weekday">
                  <div class="dayIcon">
                    <i :class="'wi wi-forecast-io-' + daily[i].icon"></i>
                  </div>

                  <div class="day">
                    <div v-if="i===0">Today</div>
                    <div v-else> 
                      
                      {{ i === 0 ? 'Today' : daily[i].time*1000 | date('ddd')}}
                      
                    </div>
                  </div>            
                </div>

                <div class="precip" >
                  <div v-if='daily[i].precipProbability > 0.09'>
                    <span>{{ precipType(daily[i].precipType) }}</span>
                    <span>{{ daily[i].precipProbability*100 | number | suffix('%')}}</span>
                  </div>
                </div>  
              </div>

              <range-bar :domain="weekRange" 
                        :high="daily[i].temperatureHigh" :low="daily[i].temperatureLow"></range-bar> 
            </div>-->
          </template> 
          <!-- #header -->
          
          <template #panel>
            <div class="pnlBody">
              <div class="summary">{{daily[i].summary}}</div>
              <hours :hours="day"/>
            </div>      
          </template> 
          <!-- #panel -->
        </accordion>
      </div> <!-- week -->

    </div> <!-- grid-main -->
   
  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

  .grid_main {
    display: grid;

    // @include media(768px) {
    //   grid-template-columns: 1fr 1fr;
    // }

  }

  .forecastTime {
    font-size: var(--h8);
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: 0 0.5rem;

    padding: 0.5rem 1rem;
  }

  .today {
    
    // height: calc(100vh - 7rem);
  }

  .nowcast {
    
    margin: 2rem 1rem;

    .snapshot {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      margin-bottom: 2rem;

      .wi {
        font-size: 3rem;
      }

      .nowTemp {
        font-size: var(--h1);
      }      
    }

    .nowSummary {
      font-size: var(--h4);
      text-align: center;
    }

    // .weekSummary {
    //   text-align: center;
    //   // width: 100%;
    //   // max-width: 500px;
    //   // padding: 0 1rem ; 
    //   // margin: 2rem auto;
    // }
    
  }


  .precipChart {
    // align-self: center;
    
    width: 100%;
    max-width: 500px;
    padding: 1rem ; 
    margin: -1rem auto 2rem;

    .title {
      text-align: center;
      font-size: var(--h7);
      font-weight: 300;
      margin-top: -0.5rem;
      margin-bottom: -0.5rem;
    }
  }

  .todayMeta {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    gap: 1rem 4rem;
    


    width: 100%;
    max-width: 500px;
    padding: 1rem ; 
    margin: 1rem auto 2rem;


    .dl {
      // flex: 1;

      display: grid;
      // grid-auto-flow: column;
      grid-template-columns: max-content max-content;
      grid-gap: 0 1rem;
    }

    .dt {
      &:after {
        content: ': ';
      }

    }

    .dd {

    }
  }

  .todayHours {    
    width: 90%;
    max-width: 640px;
    margin: 1rem auto;

    .summary {
      padding: 0 0 1rem 0; 
      text-align: center;
      font-size: var(--h5);
    }
  }

  .week {
    
    // text-align: center;
    
    width: 90%;
    max-width: 640px;
    margin: 1rem auto 0;

    // max-width: 500px;
    // padding: 1rem ; 
    // margin: 2rem auto 0;
  }

  .weekSummary {
    font-size: var(--h5);
    text-align: center;
    // width: 100%;
    // max-width: 500px;
    padding: 0 0 1rem 0; 
    // margin: 2rem auto 0;
  }

  .accordion {
    // width: 90%;
    // max-width: 640px;
    // margin: auto;

    .pnlHeader {
      display: grid;
      grid-template-columns: 5rem 5rem 1fr;
      align-items: center;
      // grid-gap: 0 0.5rem;

      .weekday {
        
        .precip {
          color: var(--muted-7);
          font-size: var(--h8);
          line-height: 1.3;

          div {
            padding-right: 0.5rem;
          }

          span:first-child {
            font-size: 70%;
            margin-right: 0.2rem;
            vertical-align: 2px;

            -webkit-filter: grayscale(70%);
            filter: grayscale(70%);
          }
        }
      }

      .dayIcon .wi {
        font-size: 2.1rem;
        // margin-right: 2rem;
      }

      .barRange {
        // margin-left: 2rem;
      }


    } // pnlHeader

    // .pnlHead {
    //   display: grid;
    //   grid-template-columns: 8rem 1fr;
    //   align-items: center;
    //   grid-gap: 0 2rem;
      
    //   height: 4rem;

    //   .weekday {
    //     display: grid;
    //     grid-template-columns: 4rem 4rem;
    //     grid-gap: 0 1rem;
    //   }
      
    //   .precip {
    //     color: var(--muted-7);
    //     font-size: var(--h8);
    //     line-height: 1.3;

    //     div {
    //       text-align: right;
    //       padding-right: 0.5rem;
    //     }

    //     span:first-child {
    //       font-size: 70%;
    //       margin-right: 0.2rem;
    //       vertical-align: 2px;

    //       -webkit-filter: grayscale(100%);
    //       filter: grayscale(100%);
    //     }
    //   } // precip


    // } // pnlHead

    .pnlBody .summary {
      padding: 0 0 0.75rem 0;
      font-weight: 300;
    }

  } // accordion

  .transparent {
    color: transparent
  }

</style>