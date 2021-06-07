import Header from "../../components/Header";
import About from "../../components/About";
import SocialMedia from "../../components/SocialMedia";
import {Location} from "../../components/Location";
import  Footer from "../../components/Footer";
import AllRights from "../../components/AllRights";

import React, {useState} from "react";
import Images from "./Images";
import "./styles.module.scss";

import { Carousel } from "react-responsive-carousel";
import { Children, CSSProperties } from "react";
import { Box, SimpleGrid, Image, Flex, Stack, Grid} from "@chakra-ui/react";


import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.module.scss';

export default function GalleryYrlan() {

const [selectedImg, setSelectedImg] = useState(Images[0]);

    return (
      <> 
           <Header />
           {/* <About /> */}



            <div className="GalleryYrlan">
                <div className="container" align="center">
                    <img src={selectedImg} alt="Old Scholl" className="selected"/>
                    <div className="imgContainer">
                        {Images.map((img, index) => (
                            <img
                            width="10%"
                            style={{border: selectedImg === img ? "4px solid var(--green-soldier)" : ""}}
                            key={index}
                            src={img}
                            alt=""
                            onClick={() => setSelectedImg(img)}
                            />
                        ))}

                    </div>

                </div>
            </div>



{/* objectFit="cover"  */}

           {/* <SocialMedia /> */}
           {/* <Location /> */}
           <Footer />     
           <AllRights />
           
      </>
    );
  }