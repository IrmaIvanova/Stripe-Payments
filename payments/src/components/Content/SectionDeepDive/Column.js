import React from 'react';
import styled from 'styled-components';
import Paragraf from '../MainBlock/ParagrafMain';
import Link from '../../Link';
import SubTitles from '../SubTitle';
import '../../Nav/GlobalNav.css';
import 
import Back4 from "./back4.js";
const Container = styled.div`
    width: 500px;
    height: 400px;
    position: relative;
    top: 0px;

`


const Box = styled.div`
width: 420px;
height: 418px;
 position: relative;
 margin: 40px 0 150px 80px;
 p{
    padding-bottom: 20px;
 }
`

const Item = styled.div`
    width: 500px;

    a{
        color: #6772e5;
        font-size: 19px;
    }
`


class About4 extends React.Component {
  render(){
    return (
        <Container className="conerGrayRight">

                <Box className="box">
                    <SubTitles title="RIGOROUS COMPLIANCE"/>
                    <Paragraf className="introText" text="Stripe is certified to the highest industry standards and has obtained regulatory licenses around the world."/>
                    <Item className="arrow8"><Link text="More about compliance"/></Item>
                </Box>


        </Container>
    );
  }
}
export default About4;