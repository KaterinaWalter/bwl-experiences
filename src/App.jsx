import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;
