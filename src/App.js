import './App.css';
import PokeDisplay from './components/pokemon/PokeDisplay';
import SearchBar from './components/search/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POKEDEX</h1>
        <SearchBar />
      </header>
      <main>
        <PokeDisplay />
      </main>
      <footer>
        <a href="https://lewispilgrim.github.io">2023 @ Lewis Pilgrim</a>
      </footer>
    </div>
  );
}

export default App;
