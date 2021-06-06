import About from "../components/About";
import ButtonSeeMore from "../components/ButtonSeeMore";
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
    </>
  );
}