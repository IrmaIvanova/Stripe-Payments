import React from 'react';
import styled from 'styled-components';
import InlineBox from './InlineBox.js';
import '../../Nav/GlobalNav.js';
import SubTitles from '../SubTitle.js';
import Browser from '../../../img/browser.svg';
import Card1 from './card1.png';
import "./InlineBox.css"






const Container = styled.div`
    width: 442px;
    height: 300px;
    padding: 45px 40px;
    margin-right: 30px;
    position: relative;
    background: #87BBFD;

    border-radius: 8px;
    transform: rotateX(7deg) rotateY(-37deg);
    box-shadow: -76px 69px 94px -27px #000000c9;
    

    img{
        width: 523px;
        position: absolute;
        top: 0;
        right: 0;
    }
`
const InContainer = styled.div`
    width: 403px;
    height: 196px;
    padding: 20px;
    position: absolute;
    bottom: 0px;
    background: #fff;
    position: relative;
    img{
        width: 403px;
        height: 200px;
        position: absolute;
        top: 20px;
        right: 20px;
    }
`

const TitleBox = styled.div`
    text-align: center;
    position: relative;
   }
   h3{
       color: #fff;
       margin-top: 0;
       text-transform: uppercase;
   }
`
const HeaderBox=styled.div`
   width: 500px;

`

class ImageCheckout extends React.Component {
  render(){
    return (
      
        <Container>
        
            <HeaderBox>
            <img src={Browser} alt="back"/>
            <TitleBox ><span className="ShoppingBag"></span><SubTitles title="checkout"/></TitleBox>
            <InlineBox/>
            </HeaderBox>
            <InContainer>
                <img src={Card1} alt="card1"/>
            </InContainer>
        </Container>
        
    );
  }
}
export default ImageCheckout;