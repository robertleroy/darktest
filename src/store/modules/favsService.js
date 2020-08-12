
const state = {
  
  // savedLocations: [
    // { 
    //   city: "Oklahoma City", 
    //   region: "OK", 
    //   regionName: "Oklahoma", 
    //   country: "United States", 
    //   countryCode: "US", 
    //   gps: [35.5189, -97.5354]
    // },
    // { 
    //   city: "Somerset", 
    //   region: "NJ", 
    //   regionName: "New Jersey", 
    //   country: "United States", 
    //   countryCode: "US", 
    //   gps: [40.506427, -74.467882]
    // },
    // { 
    //   city: "Rancho Mirage", 
    //   region: "CA", 
    //   regionName: "California", 
    //   country: "United States", 
    //   countryCode: "US", 
    //   gps: [33.757275, -116.414058]
    // }
  // ],
  // recentLocations: [
    // { 
    //   city: "Avon", 
    //   region: "CO", 
    //   regionName: "Colorado", 
    //   country: "United States", 
    //   countryCode: "US", 
    //   gps: [39.6514, -106.5311]
    // }, 
    // { 
    //   city: "Thompson", 
    //   region: "UT", 
    //   regionName: "Utah", 
    //   country: "United States", 
    //   countryCode: "US", 
    //   gps: [38.97, -109.3207]
    // }
  // ],
};

const getters = {
  // savedLocations(state) {
  //   return state.savedLocations;
  // },

  // recentLocations(state) {
  //   return state.recentLocations;
  // }

};

const mutations = {  
  // setSavedLocations(state, payload) {
  //   this.state.savedLocations = payload;
  // },

  // setRecentLocations(state, payload) {
  //   console.log
  //   this.state.recentLocations = payload.slice(0,4);
  // },
  
  // addLocation(state, obj) {    
  //   const x_saved = state.savedLocations.findIndex(el => {
  //     return el.gps === obj.gps;
  //   })
  //   const x_recent = state.recentLocations.findIndex(el => {
  //     return el.gps === obj.gps;
  //   })    
    
  //   if (x_saved > -1 || x_recent === 0) {return;}
    
  //   if (x_recent > 0) {
  //     state.recentLocations.splice(x_recent,1);
  //   }
  //   state.recentLocations.unshift(obj); 

  //   state.recentLocations = state.recentLocations.slice(0,4);
  // }
};

export default {
  state, getters, mutations
};