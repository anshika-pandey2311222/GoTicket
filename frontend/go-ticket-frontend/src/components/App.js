import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Layout from './Layout';
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Booking from "./Booking";
import TrackBus from "./TrackBus";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import ChatbotLauncher from './ChatbotLauncher';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Features />
              <Booking />
              <TrackBus />
              <ChatbotLauncher/>
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;