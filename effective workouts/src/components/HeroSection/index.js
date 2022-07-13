import React from 'react';
import { useState } from 'react';
import Video from'../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Workouts Made Easy</HeroH1>
          <HeroP>Home Workouts from the tip of your finger.
           Its made Easy, Fast and Super Effective
           </HeroP>
           <HeroBtnWrapper>
            <Button to='services'  smooth={true}
                        duration={1500} onMouseEnter={onHover} onMouseLeave={onHover}>
              Get Moving {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
           </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection