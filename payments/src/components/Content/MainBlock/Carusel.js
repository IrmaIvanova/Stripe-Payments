import React from "react";
import styled from 'styled-components';
import Carousel from "@brainhubeu/react-carousel";
import './Carusel.css';
import "@brainhubeu/react-carousel/lib/style.css";
import one from '../../../img/lyft.jpg';
import two from '../../../img/slack.jpg';
import tree from '../../../img/glossier.jpg';
import four from '../../../img/charity_water.jpg';
import five from '../../../img/missguided.jpg';
import Paragraf from './ParagrafMain';
import Link from '../../Link';

import Back3 from './back3';
import PartnersLogoBlock from './PartnersLogoBlock.js';


const Item = styled.div`
a{
    color: #6772e5;
    font-size: 17px;
}
`
const Poster=styled.div`
  width: 1160px;
  height: 300px;
  position: relative;
  display: flex;

`

const TextBox=styled.div`
  width: 660px;
  height: auto;
  background: #fff;
  padding: 60px;


  p{
    font-size: 17px;
    padding-right: 60px;
  }

`

const CaruselItem=styled.div`
margin: 10px 454px;
width: 1160px;
height: 300px;
position: relative;
top: 900px;

`
const Image=styled.div`
border-bottom-left-radius: 4%;
img{
  position: relative;
  width: 500px;
  height: auto;
  margin-top: 20px;
  padding-left: 0px;
  border-top-left-radius: 4%;

}
`
const Ground=styled.div`

`
class Carusel extends React.Component {
  render(){
    return(
      <div>
          <CaruselItem>
                <Carousel 
                slidesPerPage={1}
                slidesPerScroll={1}
                animationSpeed={1500}
                offset= {10}
                itemWidth={1160}
                clickToChange
                infinite
                autoPlay={3000}
                arrows >


                    <Poster>
                        <Image className='poster '><Ground className='after'><img  src={one} alt="academy"/></Ground></Image>
                        <TextBox>
                          <Paragraf text="With over 700,000 drivers providing nearly one million rides per day, Lyft uses Stripe to power payments at scale. Lyft also partnered with Stripe to build Express Pay, a first-of-its-kind feature that allows drivers to cash out whenever they want, instantly."/>
                          <Item className="arrow6"><Link text="Stripe status"/></Item>
                        </TextBox>
                    </Poster>
                    <Poster>
                    <Image className='poster'><Ground className='after'><img  src={two} alt="academy"/></Ground></Image>
                        <TextBox>
                          <Paragraf text="With over 700,000 drivers providing nearly one million rides per day, Lyft uses Stripe to power payments at scale. Lyft also partnered with Stripe to build Express Pay, a first-of-its-kind feature that allows drivers to cash out whenever they want, instantly."/>
                          <Item className="arrow6"><Link text="Stripe status"/></Item>
                        </TextBox>
                    </Poster>
                    <Poster>
                    <Image className='poster'><Ground className='after'><img  src={tree} alt="academy"/></Ground></Image>
                        <TextBox>
                          <Paragraf text="With over 700,000 drivers providing nearly one million rides per day, Lyft uses Stripe to power payments at scale. Lyft also partnered with Stripe to build Express Pay, a first-of-its-kind feature that allows drivers to cash out whenever they want, instantly."/>
                          <Item className="arrow6"><Link text="Stripe status"/></Item>
                        </TextBox>
                    </Poster>
                    <Poster>
                    <Image className='poster'><Ground className='after'><img  src={four} alt="academy"/></Ground></Image>
                        <TextBox>
                          <Paragraf text="With over 700,000 drivers providing nearly one million rides per day, Lyft uses Stripe to power payments at scale. Lyft also partnered with Stripe to build Express Pay, a first-of-its-kind feature that allows drivers to cash out whenever they want, instantly."/>
                          <Item className="arrow6"><Link text="Stripe status"/></Item>
                        </TextBox>
                    </Poster>
                    <Poster>
                    <Image className='poster'><Ground className='after'><img  src={five} alt="academy"/></Ground></Image>
                        <TextBox>
                          <Paragraf text="With over 700,000 drivers providing nearly one million rides per day, Lyft uses Stripe to power payments at scale. Lyft also partnered with Stripe to build Express Pay, a first-of-its-kind feature that allows drivers to cash out whenever they want, instantly."/>
                          <Item className="arrow6"><Link text="Stripe status"/></Item>
                        </TextBox>
                      </Poster>
                </Carousel>
                
        </CaruselItem>
        <PartnersLogoBlock/>
        <Back3></Back3>

        </div>
    )
    }
}

export default Carusel;


