const actions = {
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

  // fetchIp({dispatch}) {
  //   const okc = {"city":"Oklahoma City","region":"OK","regionName":"Oklahoma","country":"United States","countryCode":"US","gps":[35.483,-97.5363]};

  //   dispatch('dispatchCurrentLocation', sortIp(okc));
  // },

  fetchTomtom({ dispatch, commit }, payload) { 
    
    const url = 'https://talaya-api.glitch.me/api/tomtom/';
    // const url = 'https://yjhwj.sse.codesandbox.io/tomtom/';
        
    fetch(url, {
      method: 'post',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({searchTerm: payload})
    })
    .then(res => res.json())
    .then(data => {      
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
  }
};


export default {
  actions
}

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
