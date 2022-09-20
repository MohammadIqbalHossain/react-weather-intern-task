import { DateTime } from "luxon";

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
    
    console.log(data);
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })

    hourly = hourly.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })

    return {timezone, daily, hourly}
}

const getFormattedData = async (searchParams) => {
      const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
      const {lat,lon} = formatCurrentWeather;
      const formattedForcastWeather = await getWeatherData('oncall', {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
      }).then(formatForcastWeather)
      return {...formattedCurrentWeather, ...formattedForcastWeather}
}

const formatToLocalTime = (secs,zone, format = "cccc, dd lll, yyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlfromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedData;

export {formatToLocalTime, iconUrlfromCode};