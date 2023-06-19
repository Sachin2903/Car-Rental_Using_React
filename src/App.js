
import './App.css';
import { HowItWorks } from './components/templates/howItWorks/howItWork';
import { Navbar } from './components/pages/navbar/navbar';
import { HeroPage } from './components/templates/heroPage/heroPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage/>
      <HowItWorks/>

    </div>
  );
}

export default App;
