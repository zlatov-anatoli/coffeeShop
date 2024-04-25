import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Features from "./features/Features";
import Menu from "./menu/Menu";
import Choose from "./choose/Choose";
import Stats from "./stats/Stats";
import {Gallery} from "./gallery/Gallery";
import Offer from "./offer/Offer";
import Team from "./team/Team";
import {Reservation} from "./reservation/Reservation";
import Testimon from "./testimonials/Testimon";
import Footer from "./footer/Footer";
import {Snackbars} from "./snackBar/Snackbar";

export const MainPage = ({open, setOpen, message, setMessage}) => {

  return (
    <div>
      <div className="background">
        <Header/>
        <div className="container">
          <Home/>
        </div>
      </div>
      <About/>
      <Features/>
      <Menu/>
      <Choose/>
      <Stats/>
      <Gallery/>
      <Offer/>
      <Team/>
      <Reservation setOpen={setOpen} setMessage={setMessage}/>
      <Testimon/>
      <Footer/>
      <Snackbars open={open} setOpen={setOpen} message={message}/>
    </div>
  )
}
