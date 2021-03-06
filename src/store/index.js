import Vue from 'vue'
import Vuex from 'vuex'

import locationService from './modules/locationService';
import weatherService from './modules/weatherService';

Vue.use(Vuex)

const storagePlugin = store => {
  const store_key = "savedLocations";
  const Version = "0.1.0";
 
  store.subscribe((mutation, state) => {
    
    let obj = {
      version: state.version,
      savedLocations: state.savedLocations,
      recentLocations: state.recentLocations
    };
    
    localStorage.setItem(
      store_key, JSON.stringify(obj)
    );

  })

  let storage_obj = JSON.parse( 
    localStorage.getItem(store_key)
  );
  
  if ( storage_obj ) {   
    if ( storage_obj.version === Version ) { 
      Object.assign(store.state, storage_obj);      
      // store.replaceState(storage_obj);
    } else {      
      store.commit("updateVersion", Version);  
    }
  }  
}


export default new Vuex.Store({
  plugins: [storagePlugin],

  modules: {
    locationService,
    weatherService,
  },

  state: {    
    version:  "",
    showSearchDialog: false,
    currentLocation: {},
    savedLocations: [],
    recentLocations: [],
  },

  getters: {
    showSearchDialog(state) {
      return state.showSearchDialog;
    },

    currentLocation(state) {
      return state.currentLocation;
    },

    locationString(state) {
      const loc = state.currentLocation;
      let str = '';

      loc.city ? str += loc.city + ', ' : '';
      loc.countryCode !== 'US' ? str += loc.country :
      loc.region ? str += loc.region : str += loc.country;         
        
      return str;
    },

    savedLocations(state) {
      return state.savedLocations;
    },
  
    recentLocations(state) {
      return state.recentLocations;
    },
  },

  mutations: {    
    updateVersion(state, payload) {
      state.version = payload;
    },

    toggleSearchDialog(state) {
      state.showSearchDialog = !state.showSearchDialog;
    },

    setCurrentLocation(state, payload) {
      state.currentLocation = payload;
    },

    setSavedLocations(state, payload) {
      state.savedLocations = payload;
    },
  
    setRecentLocations(state, payload) {
      state.recentLocations = payload.slice(0,4);
    },

    addLocation(state, obj) {    
      const x_saved = state.savedLocations.findIndex(el => {
        return el.gps === obj.gps;
      })
      const x_recent = state.recentLocations.findIndex(el => {
        return el.gps === obj.gps;
      })    
      
      if (x_saved > -1 || x_recent === 0) {return;}
      
      if (x_recent > 0) {
        state.recentLocations.splice(x_recent,1);
      }
      state.recentLocations.unshift(obj); 
  
      state.recentLocations = state.recentLocations.slice(0,4);
    },

  },

  actions: {
    dispatchCurrentLocation({ dispatch, commit }, payload) {
      commit('setCurrentLocation', payload);
      dispatch('fetchWeather', payload.gps);
    }
  }

})
