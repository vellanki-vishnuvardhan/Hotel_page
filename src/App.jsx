import Header from "./componets/Header/Header";
import Hero from "./componets/Hero/Hero";
import Compaines from "./componets/compaines/compaines";
import Resendies from "./componets/resendines/Resendies";
import './App.css';
import Value from "./componets/value/Value";
import Conact from "./componets/contant/Conact";
import Getstarted from "./componets/getstarted/Getstarted";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header />
      <Hero />

      
      </div>
      
     <Compaines />
     <Resendies />
     <Value/>
     <Conact />
     <Getstarted />
     <Footer/>

     
    </div>
  );
}

export default App;
