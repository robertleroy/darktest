<script>
  export default {
    name: 'alerts',
    data() {
      return {
        title: 'alerts',
      };
    },
    computed: { 
      alerts() {
        return this.$store.getters.alerts;
      }
    } 
  };
</script>

<template>
  <section id='alerts'>

    <div class="alerts">

      <accordion v-for="(alert,i) of alerts" 
        :key="i" :opened="alerts.length > 1 ? false : true">
        <template #header>
          <div class="row">
            <div class="title">{{alert.title}}</div>
            <a :href="alert.uri" target="_blank"><div class="icon btn">link</div></a>
          </div>
          
          <div class="alertTime dl">
            <div class="dt">Alert</div>
            <div class="dd">
              <span>{{ alert.time*1000 | date('ddd d, h:MM tt') }}</span>
            </div>
            <div class="dt">Expires</div>
            <div class="dd">
              
              <span>{{ alert.expires*1000 | date('ddd d, h:MM tt') }}</span>
            </div>
          </div>
        </template> 
        <!-- #header --> 
        

        <template #panel>
          <div class="description" >
            <div v-html="alert.description"/>
          </div>
          
          <h6 class="h7">Regions:</h6>
          <ul class="regions">
            <li v-for="(r,i) of alert.regions"
                :key="i">{{r}}</li>
          </ul>

        </template> 
        <!-- #panel -->        
      </accordion>
    </div> <!-- #alerts -->
  </section>
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

  .accordion {
    padding: 1rem 0;
    font-family: $serif;
  }

  .alerts {
    max-width: 40rem;
    margin: auto;
    padding: 0 2rem;

    a {
      color: inherit;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .title {
    font-size: var(--h5);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .alertTime.dl {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    grid-gap: 0 1rem;
    font-size: var(--h7);
    line-height: 1.2;
    .dt {
      font-weight: 700;
      // font-size: var(--h7);
      &::after {
        content: ':';
      }
    }
    .dd {
      display: grid;
      grid-auto-flow: column;
      // grid-template-columns: 2.5rem 3rem 5rem;
      grid-gap: 0 0.75rem;
    }    
  }

  ul {   
    list-style-type: circle;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
    grid-gap: 0 1rem;

    li {
      line-height: 1.2;
    }    
  }

  .description {
    margin: 1rem 0 2rem;

    font-family: $serif;
    font-size: var(--h5);
    line-height: 1.4;
  }

  .regions li {
    padding-bottom: 0.5rem;
  }

</style>