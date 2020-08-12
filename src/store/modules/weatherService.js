// import Weather from './weather.json';


const state = {
  // weather: Weather,
  weather: {},
  doneLoading: false,
  
  // fullUrl: 'https://api.darksky.net/forecast/f16e16cbccd9cc7e4561e66941d93a97/35.5154,-97.5276?extend=hourly', 
  // ?exclude=minutely,flags', //
  // extend=hourly, //
  

};

const getters = {
  weather(state) {
    return state.weather;
  },
  current(state) {
    return state.weather.currently;
  },
  minutely(state) {
    return state.weather.minutely.data;
  },
  hourly(state) {
    return state.weather.hourly.data;
  },
  today(state) {
    return state.weather.daily.data[0];
  },
  daily(state) {
      return state.weather.daily.data;
  },
  alerts(state) {
    if (state.weather.alerts) {
      return state.weather.alerts.map( d => ({
        ...d, description: d.description.replace(/(WHAT\.\.\.)/,'<br>WHAT: &nbsp;').replace(/(WHEN\.\.\.)/,'<br>WHEN: &nbsp;').replace(/(WHERE\.\.\.)/,'<br>WHERE: &nbsp;').replace(/\.{3}\s\*/g, '<br/><br/>' ).replace(/\*/g, '<br/>' ).replace(/\.{3}\s|\*/g, '<br/>' ).replace(/(HAZARD\.\.\.)/,'<br><br>HAZARD: &nbsp;').replace(/(SOURCE\.\.\.)/,'<br>SOURCE: &nbsp;').replace(/(IMPACT\.\.\.)/,'<br>IMPACT: &nbsp;').replace(/(IMPACTS\.\.\.)/,'<br>IMPACTS: &nbsp;').replace(/(HAIL\.\.\.)/,'<br>HAIL: &nbsp;').replace(/(WIND\.\.\.)/,'<br>WIND: &nbsp;').replace(/(Locations impacted)/,'<br><br>Locations impacted: &nbsp;').replace(/(Forecast\.\.\.)/,'<br><br>Forecast: &nbsp;').replace(/(Flood History\.\.\.)/,'<br><br>Flood History: &nbsp;').replace(/(ADDITIONAL DETAILS\.\.\.)/,'<br><br>ADDITIONAL DETAILS: &nbsp;').replace(/(PRECAUTIONARY\.\.\.)/,'<br><br>PRECAUTIONARY').replace(/(NEXT UPDATE)/,'<br><br>NEXT UPDATE').replace(/(SITUATION OVERVIEW)/,'<br><br>SITUATION OVERVIEW').replace(/(POTENTIAL IMPACTS)/,'<br><br>POTENTIAL IMPACTS').replace(/(THREAT TO LIFE)/,'<br><br>THREAT TO LIFE').replace(/(PLAN:)/,'<br><br>PLAN:').replace(/(PREPARE:)/,'<br><br>PREPARE:').replace(/(ACT:)/,'<br><br>ACT:').replace(/\.{3}|\*/g, '&nbsp;&nbsp;' )
      }))
    } 
  },

  summary(state, getters) {
    return {
      current: getters.weather.currently.summary,
      hourly: getters.weather.hourly.summary,
      today: getters.weather.daily.data[0].summary,
      daily: getters.weather.daily.summary,
      minutely: getters.weather.minutely.summary
    };
  },

  days(state, getters) {
    var x =  24 - new Date(getters.hourly[0].time*1000).getHours();

    return [
      getters.hourly.slice(0,x),
      getters.hourly.slice(x,x+24),
      getters.hourly.slice(x+24,x+48),
      getters.hourly.slice(x+48,x+72),
      getters.hourly.slice(x+72,x+96),
      getters.hourly.slice(x+96,x+120),
      getters.hourly.slice(x+120,x+144),
      getters.hourly.slice(x+144),
    ];
  },

  weekRange(state) {
    const week = state.weather.daily.data; 
    const highs = week.map(el => el.temperatureHigh)
    const lows = week.map(el => el.temperatureLow)

    return [Math.min.apply(null, lows),Math.max.apply(null, highs)];
  },

  values(state) {
    return state.weather.minutely.data.map( el => {
      return { time: el.time*1000, value: el.precipIntensity }
    }).filter((el,i) => {
      return i%3 === 0;
    })
  },

  doneLoading(state) {
    return state.doneLoading;
  },

  isPrecipHour(state) {
    var bool;
    var str;  
    if (!state.doneLoading) {
      return "rain";
    } else {

      if (str === 'rain' || str === 'sleet' || str === 'hail' || str === 'snow') {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    }
  }

  

};

const mutations = {
  commitWeather(state, payload) {    
    state.weather = payload;
  },

  setDoneLoading(state, payload) {
    state.doneLoading = payload;
  }
};

const actions = {
  fetchWeather({commit}, gps) {    
    const url="https://talaya-api.glitch.me/api/weather/";    
    // const url="https://yjhwj.sse.codesandbox.io/weather/";
    
    fetch(url, {
      method: 'post',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(gps)
    })
    .then(res => res.json())
    .then(data => {
      commit('commitWeather', data);
    })
    .then(() => commit('setDoneLoading', true))
    .catch(error => {
      console.log('Weather failed', error);
    });
    
  }


  // fetchWeather() {
  //   console.log('fetchWeather');
  // }


};
// https://talaya-api.glitch.me/api

export default {
  state,
  getters,
  actions,
  mutations
};
