<script>

  import { mapGetters } from 'vuex';
  import Hours from '../components/hours';
  import RangeBar from '../components/rangeBar';

  export default {
    name: 'week',
    components: {
      'Hours': Hours,
      'RangeBar': RangeBar
    },
    data() {
      return {
        title: 'week',
      };
    },

    computed: { 
      ...mapGetters([
        'days', 'daily', 'weekRange', 'summary',
      ]),    
    },

    methods: {       
      precipType(type) {
        let res = "";
        type === "rain" ? res = `💧` :
        type === "rain" ? res = `❄️` :
        type === "sleet" ? res = `🧊` : res = ' '    
        return res 
      }
    },

    mounted() { }
  };
</script>

<template>
  <section id='week'>
    <div class="weekSummary">
      <div>{{summary.daily}}</div>
    </div>

  <accordion v-for="(day,i) of days" :key="i">
    <template #header>      
      <div class="pnlHead">
        
        <div class="title">
          <div class="weekday">
            <div class="dayIcon">
              <i :class="'wi wi-forecast-io-' + daily[i].icon"></i>
            </div>

            <div class="day">
              <div v-if="i===0">Today</div>
              <div v-else> 
                <!-- <div> -->
                {{ i === 0 ? 'Today' : daily[i].time*1000 | date('ddd')}}
              <!-- </div>     -->
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
      </div>
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

  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';
  
  .weekSummary {
    width: 90%;
    max-width: 640px;
    margin: 2rem auto 1rem;
    text-align: center;
    font-size: var(--h5);
    font-weight: 300;
    line-height: 1.2;
  }

  .accordion {
    width: 90%;
    max-width: 640px;
    margin: auto;

    .pnlHead {
      display: grid;
      grid-template-columns: 8rem 1fr;
      align-items: center;
      grid-gap: 0 2rem;
      
      height: 4rem;
    }
    
    .weekday {
      display: grid;
      grid-template-columns: 4rem 4rem;
      grid-gap: 0 1rem;
    }
    
    .precip {
      color: var(--muted-7);
      font-size: var(--h8);
      line-height: 1.3;

      div {
        text-align: right;
        padding-right: 0.5rem;
      }

      span:first-child {
        font-size: 70%;
        margin-right: 0.2rem;
        vertical-align: 2px;

        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
    }    
  }
  
  .pnlBody .summary {
    padding: 0 0 0.75rem 0;
    font-weight: 300;
  }

  .transparent {
    color: transparent
  }

</style>