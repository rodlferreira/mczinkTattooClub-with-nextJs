import React from 'react';
import { GetStaticProps } from "next";


import About from "../components/About";
import AllRights from "../components/AllRights";
import ButtonSeeMore from "../components/ButtonSeeMore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Location} from "../components/Location";
import SocialMedia from "../components/SocialMedia";
import Team from "../components/Team";
import client from '../graphql/client';
import GET_MCZINK_BACKOFFICE from '../graphql/queries/getMczinkBackoffice';


const Home = ()=> (
  // return (
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
  

  )

export const getStaticProps: GetStaticProps = async () => {
    const { mczinkBackoffice } = await client.request(GET_MCZINK_BACKOFFICE)

    console.log(mczinkBackoffice)

    return {
      props: {
        ...mczinkBackoffice
      }
    }
  }

 export default Home
