import './App.css';
import ButtonsNav from './components/ButtonsNav';
import DayInfo from './components/DayInfo';
import Forcast from './components/Forcast';
import SearchBar from './components/SearchBar';
import WeatherTemp from './components/WeatherTemp';

function App() {
  return (
    <div className="mx-auto max-w-screen-md py-5 mt-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-300 ">
       <ButtonsNav />
       <SearchBar />

       <DayInfo />
       <WeatherTemp />
       <Forcast title={"Hourly forecast"}/>
       <Forcast title={"Daily forecast"}/>
    </div>
  );
}

export default App;
