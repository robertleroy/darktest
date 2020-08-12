<!--  
<temp-range 
  :high="day.temperatureHigh" 
  :low="day.temperatureLow"/> 
-->

<script>
  export default {
    name: 'barRange',
    props: {
      high: Number,
      low: Number,
      domain: Array
    },
    data: function() {
      return {
      }
    },
    computed: {
      hi() {
        return this.scale(this.high);
      },
      lo() {
        return this.scale(this.low);
      },
    },
    methods: {
      scale(n) {
        return (n - this.domain[0]) / (this.domain[1] - this.domain[0])*100;
      }
    },
    mounted() { }
  };
</script>


<template>
  <section class='barRange'>
    <div class="range">
      <div class="shell" 
      :style="{ left: lo + '%', width: hi - lo + '%' }">
           
        <div class="bar">
          <div class="low">{{low | number}}</div>
          <div class="high">{{high | number}}</div>
        </div>

      </div>
    </div>    
  </section>
</template>


<style lang='scss'>
  @import '../scss/imports';

  .range {
    height: 100%;
    position: relative;
    padding: 0 2rem;
    display: grid;
    justify-content: stretch;
    align-items: top;

    @include media(500px) {
      padding: 0 3rem;
    }
  }

  .shell {
    display: grid;
    align-items: center;
    position: relative;
  }

  .bar {
    position: relative;
    // background: #d9d9d9;
    background: var(--blueGray-100);
    border: 1px solid #808080;
    height: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 -2px 4px inset rgba(0,0,0,0.1);
    

    @include media (500px) {
      border-radius: 1rem;      
      height: 1.5rem;
    }
  }

  .low, .high {
    position: absolute;
    font-size: 16px;
    top: -0.6rem;
    &:after {
      content: "°";
    }
    @include media (500px) {
      font-size: inherit;
      top: -0.3rem;
    }
  }
  .low { left: -2.7rem; }
  .high { right: -3rem; }

  @include media(500px) {
    .low { left: -2.7rem; }
    .high { right: -3rem; }
  }
</style>