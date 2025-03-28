import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurHistory from "./components/OurHistory";
import Services from "./components/Services";
import Activities from "./components/Activities";
import Faqs from "./components/Faqs";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <OurHistory></OurHistory>
        <Services></Services>
        <Activities></Activities>
        <Faqs></Faqs>
        <SocialMedia></SocialMedia>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
