const API_KEY = "6b8f63ffd138b441492168ca37b561a0";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url).then((res) => res.json());
};

export default getWeatherData;