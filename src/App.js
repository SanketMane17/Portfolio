import './App.scss';

import { About, Header, Footer, Skills, Work } from "./container";
import { Navbar } from "./components";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
