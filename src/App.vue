<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    name: 'app',
    data() {
      return {
        title: 'darksky',
      };
    },

    computed: {
      ...mapGetters([
        'currentLocation', 
        'locationString', 
        'current',
        'alerts',
        'showSearchDialog', 
        'doneLoading'
        // 'minutely'
      ]),

      loading() {
        if  (!this.currentLocation) {
          return true;
        }
        return false;
      },

      // offline() {
      //   return !navigator.onLine;
      // }
    },

    methods: {
      ...mapMutations([
        'toggleSearchDialog'
      ]),

      fetchIp () {
        this.$store.dispatch('fetchIp');
      }
    },

    created: function() {
      // if (!this.currentLocation) {
      //   console.log('fetching Ip');
        this.$store.dispatch('fetchIp');
      // } else {        
      //   console.log('cached:', this.locationString);
      // }    
    },

    mounted: function() {      
      // if (!this.currentLocation) {
      //   console.log('fetching Ip');
      //   this.fetchIp();
      // } else {        
      //   console.log('cached:', this.locationString);
      // }    
      
    },
  };
</script>

<template>
  <section id='app' v-cloak>

    <transition name='slideDown' mode='out-in'>
      <SearchDlg :key="showSearchDialog"
                  v-if="showSearchDialog"/>
    </transition>
    
    <header>
      <transition name='fade' mode='out-in'>
        <div class="group"
          v-if='currentLocation'
          @click="toggleSearchDialog">
          <div class="icon btn search">search</div>
          <div class="location h4 btn">
            {{locationString}}
          </div>
          <span>{{doneLoading}}</span>
        </div>

        <div class="loader" v-else :key='loading'>
          <div>loading ...</div>
        </div>     
      </transition> 
    </header>

    <!-- <div class="offline" v-if="offline">
      <div>Sorry, You're offline.</div>
      <img src="./assets/offline.png" alt="">
    </div> -->

    <main>
      <transition v-if='doneLoading' name='fade' mode='out-in'>
        <router-view/>
      </transition>
    </main>
    
    

    <footer>
      <router-link to='/home' class="">Home</router-link> 
      <span>|</span>
      <router-link to='/week' class="">Week</router-link>
      <span>|</span>
      <router-link to='/map' class="">Map</router-link>
      <span>|</span>
      <router-link to='/today' class="">Today</router-link>
      <!-- <span>|</span>
      <router-link to='/about'>About</router-link> -->
      <span  v-if="alerts">|</span>
      <router-link v-if="alerts" to='/alerts' class=" tomato">Alerts</router-link>
      
    </footer>

  </section>
</template>

<style lang='scss'>
  @import './scss/baseline';
  @import url('https://erikflowers.github.io/weather-icons/css/weather-icons.css');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  
  .wi {
    font-size: 2rem;
    display: grid;
    place-items: center center;
  }
  
  #app {
    position: relative;

    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    font-family: lato;
  }

  .offline {
    opacity:0.7;
    margin: 1rem auto auto;
    
    img {
      max-width: 640px;
    }

    div {
      font-family: $serif;
      font-weight: 700;
      text-align: right;
      font-size: var(--h4);
      padding: 1rem 0;
    }
  }

  header {
    z-index: 5;
    padding: 1rem 0;
    min-height: 4rem;
    text-align: center;
    background: $backgroundColor;
    @include shadow(1);

    .group {
      max-width: 768px;
      margin: auto;

      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      align-items: center;
      grid-gap: 0 1rem;

      .location {
        text-decoration: underline;
        text-decoration-color: rgba(0,0,0,0.3);
        line-height: 1;
      }
    }
  }

  main {
    display: relative;
    overflow-y: auto;
  }

  footer {
    position: sticky;
    bottom: 0;

    background: $backgroundColor;
    z-index: 100;

    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    grid-gap: 0 1rem;
    padding: 0.5rem 0;
    @include shadow(3);

    span {
      color: var(--vue-blue);
    }
  }

  .tomato {
    color: var(--deepOrange-500);
  }

  .loader {
    position: absolute;
    // top: 30%;
    left: 40%;
    font-family: "Inconsolata", "Monaco", "Menlo", "Consolas", "Courier New", Courier, monospace;
    opacity: 0.6;
  }

  .loader div {
    display: inline-block;
    animation: spinner 2s linear infinite
  }

  @keyframes spinner {
    from {
      transform: rotateY(0deg)
    }
    to {
      transform: rotateY(360deg)
    }
  }

  .slideDown-enter-active, .slideDown-leave-active {
    position: absolute;
    transition: all 0.3s;
  }

  .slideDown-enter,
  .slideDown-leave-to {
    transform: translateY(-100vw);
  }

</style>
