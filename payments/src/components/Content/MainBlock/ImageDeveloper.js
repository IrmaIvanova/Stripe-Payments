import React from 'react';
import styled from 'styled-components';
import InlineBox from './InlineBox.js';
import '../../Nav/GlobalNav.js';
import SubTitles from '../SubTitle.js';

import "./InlineBox.css"






const Container = styled.div`
    width: 442px;
    height: 300px;
    padding: 0 0 45px;
    margin: 0 100px;
    position: relative;
    background: #32325d;
    border-radius: 8px;
    -webkit-transform: rotateX(-8deg) rotateY(-18deg);
    -ms-transform: rotateX(-8deg) rotateY(-18deg);
    transform: rotate3d(-26,242,1,26deg) rotateX(-6deg) rotateY(-21deg);
    box-shadow: 45px 63px 94px -27px #000000c9;
    
`
const InContainer = styled.div`
    width: 403px;
    height: 196px;
    padding: 20px;
    position: absolute;
    bottom: 0px;
    position: relative;

`

const HeaderBox=styled.div`
    height: 50px;   
    width: 440px;
   background: #232341;
   border: 1px solid #32325d;
   border-bottom-color: #525f7f;
   border-top-right-radius: 8px;
   border-top-left-radius: 8px;
`

class ImageDeveloper extends React.Component {
  render(){
    return (
      
        <Container>
        
            <HeaderBox>

            </HeaderBox>
            <InContainer>

            </InContainer>
        </Container>
        
    );
  }
}
export default ImageDeveloper;