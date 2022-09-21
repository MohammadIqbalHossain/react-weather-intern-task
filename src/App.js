import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ButtonsNav from './components/ButtonsNav';
import DayInfo from './components/DayInfo';
import Forcast from './components/Forcast';
import SearchBar from './components/SearchBar';
import WeatherTemp from './components/WeatherTemp';
import formatForecastWeather from './Service/WeatherData';
import 'react-toastify/dist/ReactToastify.css';


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



  return (
    <div className={`mx-auto max-w-screen-md py-5 mt-5 px-32 bg-gradient-to-br from-green-100 to to-blue-700 shadow-xl shadow-gray-300 `}>
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

     <ToastContainer />
    </div >
 
  );
}

export default App;
