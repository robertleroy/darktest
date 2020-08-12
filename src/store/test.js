import Vue from 'vue'
import Vuex from 'vuex'

import weatherService from './modules/weatherService';

Vue.use(Vuex)

const storagePlugin = store => {
  const store_key = "storedLocations";
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
    weatherService,
  },

  state: {    
    version:  "",
    showSearchDialog: false,
    currentLocation: null,

    // favsService //
    savedLocations: [],
    recentLocations: [],
    // end favsService //
    
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

    // favsService //
    savedLocations(state) {
      return state.savedLocations;
    },

    recentLocations(state) {
      return state.recentLocations;
    }, // end favsService //

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

    // favsService //
    setSavedLocations(state, payload) {
      state.savedLocations = payload;
    },
  
    setRecentLocations(state, payload) {
      console.log
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
    }, // end favsService //
  },

  actions: {
    dispatchCurrentLocation({ dispatch, commit }, payload) {
      commit('setCurrentLocation', payload);
      dispatch('fetchWeather', payload.gps);
    },

    fetchIp({dispatch}) {
            
      // const url = "https://ipapi.co/json/";
      const proxy = "https://talaya-fetch.glitch.me/";
      const url = "http://ip-api.com/json/108.91.35.192?fields=49375";

      fetch(proxy + url) 
      .then(res => res.json())
      .then(data => {
        
        dispatch('dispatchCurrentLocation', sortIp(data));
      })  
      .catch(error => {
        console.log('fetchIp failed', error)
      });
    },

    fetchTomtom({ dispatch, commit }, payload) {    
      console.log('fetchTomtom',payload); 

      const url = 'https://talaya-api.glitch.me/api/tomtom/';
          
      fetch(url, {
        method: 'post',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({searchTerm: payload})
      })
      .then(res => res.json())
      .then(data => {      
        console.log('fetchTomtom',data); 
        const obj = sortTomtom(data.results[0]);
        dispatch('dispatchCurrentLocation', obj);
        return obj;
      })
      .then( obj => {
        commit('addLocation', obj);
        this.commit('toggleSearchDialog');
      })
      .catch(error => {
        console.log('Tomtom failed', error);
      });
    },
  },

}); 
// store //


// utility //
function sortIp(data) {
  return {
    city: data.city,
    region: data.region,
    regionName: data.regionName,
    country: data.country,
    countryCode: data.countryCode,
    gps: [data.lat, data.lon]
  }
}

function sortTomtom(data) {
  let obj = {};
  
  obj.city = data.address.municipalitySubdivision ?
              data.address.municipalitySubdivision :
              data.address.municipality ? data.address.municipality : '';

  obj.region = data.address.countrySubdivision ? 
              data.address.countrySubdivision : '';
  obj.regionName = data.address.countrySubdivisionName ? 
              data.address.countrySubdivisionName : '';

  obj.country = data.address.country;
  obj.countryCode = data.address.countryCode;
  obj.gps = [data.position.lat, data.position.lon];
  return obj;
}
// end utility //