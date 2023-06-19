import './App.css';
import { HowItWorks } from './components/templates/howItWorks/howItWork';
import { Navbar } from './components/pages/navbar/navbar';
import { HeroPage } from './components/templates/heroPage/heroPage';
import { Faq } from './components/templates/FaQ/faq';
import { Provider } from 'react-redux';
import { store } from './Redux/store/carRentalStore';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage/>
      <HowItWorks/>
      <Provider store={store}>
      <Faq/>
      </Provider>
      

    </div>
  );
}

export default App;
