
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container app">
    <Info/>
    <About/>
    <Interest/>
    <Footer/>
    </div>
  );
}

export default App;
