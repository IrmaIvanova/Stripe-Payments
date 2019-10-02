import React from 'react';
import styled from 'styled-components';
import Paragraf from './ParagrafMain.js';
import Link from '../../Link.js';
import '../../Nav/GlobalNav.js';
import SubTitles from '../SubTitle.js';
import Grafic from '../../../img/grafic.svg';
import ImageCheckout from './ImageCheckout';
import Back1 from './back1.js';

const Container = styled.div`
    width: 1903px;
    height: 400px;
    position: relative;
    top: 400px;

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
    border-bottom: 2px solid #e6ebf1; 
 }
`

const Item = styled.div`
    width: 500px;
    display: flex;
    a{  

        color: #6772e5;
        font-size: 19px;
    }
    p{
        font-size: 19px;
        font-weight: 300;
        margin: 0;
        border: none;
    }
    span{
        font-weight: 500;
    }
`


class GrowFaster extends React.Component {
  render(){
    return (
        <Container>
        <Back1></Back1>
            <InContainer>
                <ImageCheckout/>
                <Box className="box">
                    <SubTitles title="GROW FASTER"/>
                    <Paragraf className="introText" text="Increase your revenue with payment options built to reach a global audience, optimize checkout conversion, and increase optimization rates with no additional work needed."/>
                    <Item><p><Link text="An IDC study shows that,"/> on average, businesses using Stripe attribute a <span>6.7% increase</span> in revenue to the Stripe platform.</p> <img src={Grafic} alt="grafic"/></Item>
                </Box>
            </InContainer>
        </Container>
    );
  }
}
export default GrowFaster;