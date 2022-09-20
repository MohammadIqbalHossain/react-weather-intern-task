const API_KEY = "6b8f63ffd138b441492168ca37b561a0";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    console.log(url);
    return fetch(url).then((res) => res.json());

};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

const formatForcastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1.6).map()
}

const getFormattedData = async (searchParams) => {
      const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
      const {lat,lon} = formatCurrentWeather;
      const formattedForcastWeather = await getWeatherData('oncall', {
        lat, lon, exclude: 'current, minutely,alerts', units: searchParams.units
      }).then(formatForcastWeather)
      return formattedCurrentWeather

   
}

export default getFormattedData;