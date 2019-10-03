import React from 'react';
import styled from 'styled-components';
import Paragraf from '../MainBlock/ParagrafMain';
import Lock from '../../../img/block.svg';



const InContainer = styled.div`
    width: 600px;
    padding: 0 20px;
    position: relative;
     left: 200px;


`

const Item = styled.div`
    width: 500px;
    display: flex;
    
    img{
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin: 30px 20px;
        position: absolute;
        left: -70px;
        box-shadow: -2px 4px 12px #171616a8;
    }
    }

    p{
        font-size: 15px;
        font-weight: 300;

    }



`


class About2 extends React.Component {
  render(){
    return (

            <InContainer>                
                <Item >
                    <img src={Lock} alt="lock"/>
                    <Paragraf className="introText" text="All card numbers are encrypted on disk with AES-256. Decryption keys are stored on separate machines."/>
                </Item>

                <Item >
                    <img src={Lock} alt="lock"/>
                    <Paragraf className="introText" text="Stripe’s infrastructure for storing, decrypting, and transmitting card numbers runs in separate hosting infrastructure, and doesn’t share any credentials with Stripe’s primary services."/>
                </Item>

            </InContainer>

    );
  }
}
export default About2;