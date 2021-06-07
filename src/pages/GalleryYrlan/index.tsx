import Header from "../../components/Header";
import About from "../../components/About";
import SocialMedia from "../../components/SocialMedia";
import {Location} from "../../components/Location";
import  Footer from "../../components/Footer";
import AllRights from "../../components/AllRights";

import React from "react";

import { Carousel } from "react-responsive-carousel";
import { Children, CSSProperties } from "react";
import { Box, SimpleGrid, Image, Flex, Stack, Grid} from "@chakra-ui/react";


import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.module.scss';

export default function GalleryYrlan() {




    const indicatorStyles: CSSProperties = {
        background: "#F1FFFC",
        width: 16,
        height: 16,
        borderRadius: 8,
        display: "inline-block",
        margin: "0 8px",
      };
      const arrowStyles: CSSProperties = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer",
      };





    return (
      <> 
           {/* <Header />
           <About /> */}




           <Flex direction="column" h={["250px","430"]} mt="80px" bg="pink">
            <SimpleGrid h={145} align="center">
          <Stack spacing="14" bg="blue">
            <Carousel
              width="50%"
              dynamicHeight
              infiniteLoop
              autoPlay
              interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <Image src="./images/arrowLeft.svg" alt="Arrow Left" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <Image src="./images/arrowRight.svg" alt="Arrow Right" color="var(--dark)"/>
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "var(--dark)" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >

{/* objetctFit="cover"  */}

              <Box>
                <Image src="/images/yrlan01.jpg" boxSize={["250px", "430px"]} />
              </Box>
              <Box>
                <Image src="/images/yrlan02.jpg" boxSize={["250px", "430px"]} />
              </Box>
              <Box>
                <Image src="/images/yrlan03.jpg" boxSize={["250px", "430px"]} />
              </Box>
            </Carousel>
          </Stack>
        </SimpleGrid>
      </Flex>





           {/* <SocialMedia />
           <Location />
           <Footer />     
           <AllRights /> */}
           
      </>
    );
  }