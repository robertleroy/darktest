<script>

  import { mapGetters } from 'vuex';
  
  import Chart from '../components/chart'; 
  export default {
    name: 'home',
    components: {
      'Chart': Chart,
    },

    data() {
      return {
        title: 'home',
      };
    },

    computed: {
      ...mapGetters([
        'showSearchDialog','currentLocation','locationString', 
        'current','today', 'hourly', 'daily', 'summary','isPrecipHour'
      ]),   

 
    },

    methods: { },

    mounted() { 
      // console.log(this.$state.weather.minutely);
    }
  };
</script>

<!-- ➜➔ -->
<template>
  <section id='home' v-if='current'>

      <div class="currentTime">
        <span> {{ current.time* 1000 | date('dddd') }}, </span>
        <span> {{ current.time* 1000 | date('mmmm dS') }} </span>
        <span> {{ current.time* 1000 | date('h:MM tt') }} </span>
      </div> <!-- currentTime -->
 
      <div class="nowcast">
        <div class="h1">
          <div :class="'wi wi-forecast-io-' + current.icon"></div>
          <div class="nowTemp">{{current.temperature | number | suffix('°')}}</div>
        </div>

        <div class="nowSummary">{{current.summary}}</div>
      </div> <!-- nowcast -->



    <section class="daySummary">

      <transition name='fade' mode='out-in'>
        <div class="precipChart" :key="current.time"
              v-if="isPrecipHour">
          <chart/>

          <div class="title">
            {{summary.minutely}}
          </div>       
        </div>

        <div class="summaryArray" :key="current.time"
              v-if="!isPrecipHour">
          <div>{{summary.minutely}}</div>
          <div>{{summary.hourly}}</div>
          <div>{{summary.daily}}</div>
        </div>
      </transition>
    
    </section><!-- daySummary -->



      <div class="conditions">
        <div class="dl">
          <div class="dt">High</div>
          <div class="dd">
            <span class="rangeTemp">{{ today.temperatureHigh | number | suffix('°') }}</span>
          </div>
          
          <div class="dt">Low</div>
          <div class="dd">
            <span class="rangeTemp">{{ today.temperatureLow | number | suffix('°') }}</span>
          </div>
        </div>

        <div class="dl">
          <!-- <div class="dt" v-if="today.precipType">
            {{today.precipType | titlecase}}
          </div>
          <div class="dt" v-else>Precip</div>

          <div class="dd">
            {{today.precipProbability*100 | number | suffix('%')}}
          </div> -->

          <div class="dt">Wind</div>
          <div class="dd wind">
            <span>
              {{current.windSpeed | number}}
              <small>mph</small> 
            </span> 
            <div 
              :style="{ transform: 'rotate('+ (current.windBearing + 90 ) + 'deg)'}"
              class="bearing" >➜</div>
          </div>

          <div class="dt">Gust</div>
          <div class="dd wind">
            <span>
              {{current.windGust | number}}
              <small>mph</small> 
            </span> 
          </div>
        </div>

        <div class="dl">
          <div class="dt">Clouds</div>
          <div class="dd">{{current.cloudCover*10 | number | suffix('%')}}</div>

          <div class="dt">Humidity</div>
          <div class="dd">{{current.humidity*100 | number | suffix('%')}}</div>
        </div>
        
        <div class="dl">
          <div class="dt">Visibility</div>
          <div class="dd">
            {{current.visibility | number}}
            <small>mi</small>
          </div>
          
          <div class="dt">UV Index</div>
          <div class="dd">{{current.uvIndex}}</div>
        </div>

        <div class="dl sunTimes">
          <div class="dt">Sunrise</div>
          <div class="dd">{{today.sunriseTime*1000 | date('h:MM tt')}}</div>
          
          <div class="dt">Sunset</div>
          <div class="dd">{{today.sunsetTime*1000 | date('h:MM tt')}}</div>
        </div>
      </div> 
      <!-- conditions -->

  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

  #home {    
    
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;    
  }

  .currentTime {
    font-size: var(--h8);
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: 0 0.5rem;

    padding: 0.5rem 1rem;
  }

  .nowcast {
    flex: 1;

    display: grid;
    justify-content: center;
    align-content: center;
    grid-gap: 1rem;
    padding: 1rem;

    .h1 {
      display: grid;
      justify-content: center;
      grid-auto-flow: column;
      grid-gap: 1rem;      

      .wi {
        font-size: 3rem;
      }
    }

    .nowSummary {
      font-size: var(--h3);
      text-align: center;
    }    
  } // nowcast //


.daySummary {  
  // flex: auto;
  align-self: center;
    
  width: 100%;
  max-width: 500px;
  padding: 1rem ; 

  .precipChart {

    .title {
      text-align: center;
      font-size: var(--h7);
      font-weight: 300;
      margin-top: -0.5rem;
    }
  }

  .summaryArray {  
    max-width: 500px; 
    font-size: var(--h5);
    font-weight: 300;
    text-align: center;   
  }
}

.conditions {  
  
  flex: 1.5;
  
  max-width: 500px;
  padding: 0 1rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;

  .dl {
    flex: 0 1 140px;
    display: inline-grid;

    grid-template-columns: auto auto;
    justify-content: start;
    align-content: flex-start;
    grid-gap: 0 0.5rem;
    margin: 0.5rem 1rem;
    // font-size: var(--h7);
    line-height: 1.3;

  .dt {

    font-size: var(--h7);
    font-weight: 700;
    &::after {
      content: ' : ';
    }
  }

} // dl //

} // conditions //


.wind {
  display: grid;
  grid-auto-flow: column;
  justify-self: start;
  align-items: baseline;
  gap: 0 0.1rem;

  .bearing {
    font-size: 90%;
    margin-bottom: 0.2rem;
  }
}

</style>
