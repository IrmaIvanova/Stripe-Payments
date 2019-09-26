import React from 'react';
import styled from 'styled-components';
import Title from './Title.js';
import Paragraf from './ParagrafHeader.js';
import Button from './Button.js';
import Phone from '../../img/phone.svg';
import Tablet from '../../img/tablet.svg';

const HeaderContainer = styled.div`
    width: 1903px;
    height: 654px;
    margin-bottom: 170px;
    padding: 200px 0 70px 0;
    position: absolute;
    top: 0px;
`
const InContainer = styled.div`
    width: 1040px;
    height: 384px;
    margin: 0 432px;
    padding: 0 20px;
`
const Image = styled.div`
        position: absolute;
        box-shadow: -17px 24px 73px -5px rgba(50,50,93,.6);
        transform: translate(-71%,-52%) rotate3d(-15.5,15.866,9,4deg) rotateZ(-2deg);
        right: 400px;
        top: 430px;
        width: 262px;
        height: 466px;
        z-index: 5;
    img{
        position: absolute;
        right: -6px;
        top: 0px;
        width: 274px;
        height: 466px;
        z-index: 5;
        border-radius: 8px;

    }
`
const Image2 = styled.div`
    width: 711px;
    height: 533px;
    right: -380px;
    top: 600px;
    position: absolute;
    transform: translate(-50%,-50%) rotate3d(.342,-.94,0,22deg) rotateZ(7deg);
    box-shadow: 37.2px 62.5px 125px -25px rgba(50,50,93,.5), 22.3px 37.5px 75px -37.5px rgba(0,0,0,.6);
    
    img{
        position: absolute;
        box-shadow: 37.2px 62.5px 125px -25px rgba(50,50,93,.5), 22.3px 37.5px 75px -37.5px rgba(0,0,0,.6);

        right: 0px;
        top: 0px;

    }
`


class Content extends React.Component {
  render(){
    return (
        <HeaderContainer>
            <InContainer>
                <Title title="A complete payments platform engineered for growth"/>
                <Paragraf text="Whether you’re looking to bill customers on a recurring basis, set up a marketplace, or simply accept payments, do it all with a fully integrated, global platform that can support online and in-person payments."/>
                <Button btn="START NOW" btn2="CONTACT SALES"/>
            </InContainer>
            <Image><img src={Phone} alt="phone"/></Image>
            <Image2><img src={Tablet} alt="tablet"/></Image2>

        </HeaderContainer>
    );
  }
}
export default Content;