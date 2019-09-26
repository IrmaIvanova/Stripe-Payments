import React from 'react';
import styled from 'styled-components';

import Amazone from '../../img/amazon.svg';
import Booking from '../../img/booking_com.svg';
import Docu from '../../img/docusign.svg';
import Insta from '../../img/instacart.svg';
import Peleton from '../../img/peleton.svg';
import Shopify from '../../img/shopify.svg';
import Unicefy from '../../img/unicef.svg';
import './LogoBlock.css';

const HeaderContainer = styled.div`
    width: 1903px;
    position: absolute;
    top: 900px;

`
const InContainer = styled.div`
    width: 1040px;
    margin: 0 432px 120px 432px;
    padding: 0 20px;

`
const Image = styled.div`
        z-index: 5;
        display: flex;
        justify-content: space-between;
    img{
        width: auto;
        height: 48px;
        z-index: 5;
        }

`
const TextOnHover = styled.span`
    width: 1040px;
    text-align: center;
    position: absolute;




`

class LogoBlock extends React.Component {
  render(){
    return (
        <HeaderContainer>
            <InContainer className="hover">
                <Image className="blurHover">
                    <img src={Amazone} alt="phone"/> 
                    <img src={Booking} alt="tablet"/> 
                    <img src={Docu} alt="tablet"/>
                    <img src={Insta} alt="tablet"/>
                    <img src={Peleton} alt="tablet"/>
                    <img src={Shopify} alt="tablet"/>
                    <img src={Unicefy} alt="tablet"/>

                </Image>
                <TextOnHover className="textHover">
                    Millions of tech-forward businesses use Stripe to power their&nbsp;payments
                </TextOnHover>
            </InContainer>
        </HeaderContainer>
    );
  }
}
export default LogoBlock;