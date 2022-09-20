import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './App.css';
import ButtonsNav from './components/ButtonsNav';
import DayInfo from './components/DayInfo';
import Forcast from './components/Forcast';
import SearchBar from './components/SearchBar';
import WeatherTemp from './components/WeatherTemp';
import getFormattedData from './Service/WeatherData';


function App() {

  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  
  console.log(weather);


  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md py-5 mt-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-300 ">
      <ButtonsNav />
      <SearchBar />

      {weather &&
        <div>
          <DayInfo weather={weather}/>
          <WeatherTemp weather={weather}/>
          <Forcast title={"Hourly forecast"} />
          <Forcast title={"Daily forecast"} />
        </div>
      }


    </div >
  );
}

export default App;
