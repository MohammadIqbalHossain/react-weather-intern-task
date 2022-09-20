import './App.css';
import ButtonsNav from './components/ButtonsNav';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="mx-auto max-w-screen-md py-5 mt-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-300 ">
       <ButtonsNav />
       <SearchBar />
    </div>
  );
}

export default App;
