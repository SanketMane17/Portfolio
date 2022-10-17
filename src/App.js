import './App.scss';

import { About, Header, Footer, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
