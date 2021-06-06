import About from "../components/About";
import AllRights from "../components/AllRights";
import ButtonSeeMore from "../components/ButtonSeeMore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Location} from "../components/Location";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/Team";


export default function Home() {
  return (
    <>
        <Header />
        <About />
        <Team />
        <ButtonSeeMore />
        <SocialMedia />
        <Location />
        <Footer />
        <AllRights />
    </>
  );
}