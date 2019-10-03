import React from 'react';
import styled from 'styled-components';
import Paragraf from '../MainBlock/ParagrafMain';
import Link from '../../Link.js';
import '../../Nav/GlobalNav.js';
import SubTitles from '../SubTitle.js';
import '../../Nav/GlobalNav.css';
import About2 from './About2';

const Container = styled.div`
    width: 1903px;
    height: 400px;
    position: relative;
    top: 0px;

`
const InContainer = styled.div`
    width: 1040px;
    height: 400px;
    margin: 0 432px;
    padding: 0 20px;
    display: flex;
`

const Box = styled.div`
 position: relative;
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


class About1 extends React.Component {
  render(){
    return (
        <Container className="conerGray">
            <InContainer>
                <Box className="box">
                    <SubTitles title="COMPREHENSIVE SECURITY"/>
                    <Paragraf className="introText" text="Data security is of utmost importance to Stripe. We invest heavily in securing our infrastructure in close partnership with world-class security experts."/>
                    <Item className="arrow7"><Link text="Explore all Features"/></Item>
                </Box>
                <About2/>
            </InContainer>

        </Container>
    );
  }
}
export default About1;