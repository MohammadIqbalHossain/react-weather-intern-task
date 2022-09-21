import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ButtonsNav from './components/ButtonsNav';
import DayInfo from './components/DayInfo';
import Forcast from './components/Forcast';
import SearchBar from './components/SearchBar';
import WeatherTemp from './components/WeatherTemp';
import formatForecastWeather from './Service/WeatherData';


function App() {

  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  console.log(weather);


  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await formatForecastWeather({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-md py-5 mt-5 px-32 bg-gradient-to-br ${formatBackground} shadow-xl shadow-gray-300`}>
      <ButtonsNav setQuery={setQuery} />
      <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather &&
        <div>
          <DayInfo weather={weather} />
          <WeatherTemp weather={weather} />
          <Forcast title={"Hourly forecast"} items={weather.hourly} />
          <Forcast title={"Daily forecast"} items={weather.daily} />
        </div>
      }


      <ToastContainer autoClose={1000} theme={'colored'} />
    </div >

  );
}

export default App;
