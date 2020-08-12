<script>
  export default {
    name: 'about',
    data() {
      return {
        title: 'about',
      };
    },
    computed: { 
      availHeight() {
        return screen.availHeight;
      },
      availWidth() {
        return screen.availWidth;
      },
      appCodeName() {
        return navigator.appCodeName;
      },      
      appVersion() {
        return navigator.appVersion;
      },     
      onLine() {
        return navigator.onLine;
      },      
      userAgent() {
        return navigator.userAgent;
      },
      product() {
        return navigator.product;
      },
      platform() {
        return navigator.platform;
      }
    },
    methods: { },
    mounted() { }
  };
</script>

<template>
  <section id='about'>
    <div class="userAgent">
      <div class="label">userAgent:</div>
      <div>{{userAgent}}</div>
      <div>availWidth: {{availWidth}}</div>
      <div>availHeight: {{availHeight}}</div>
      <div>onLine: {{onLine}}</div>
    </div>

    <div class='copy'>      
      <div><small>&copy; 2020</small> robleroy</div>
      <div>Not for commercial use.</div>
      <div>Data from Darksky and/or Climacell</div>
    </div>
  </section>  
</template>

<style scoped lang='scss'>
  @import '../scss/imports';

  #about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: 2rem;

    max-width: 640px;
    margin: 0 auto; 
  }

  .userAgent{
    line-height: 1.4;
    max-width: 500px;

    .label {      
      font-weight: 700;
    }
  }

  .copy {
    text-align: right;
    align-self: flex-end;
  }

</style>