import './App.css'
import Experience from './components/Experience';
import About from './components/About';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Main from './components/Main';
import Name from './components/Name';
import Ambassador from './components/Ambassador';
import Gallery from './components/Gallery';
function App() {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover h-screen bg-no-repeat bg-center'>
          <Navbar />
          <Test />
        </div>
        <Ambassador />
        <About />
        <Experience />
      </div>
  );
  
  return (
    <div>
      <Gallery />
    </div>
  );

}

export default App;
