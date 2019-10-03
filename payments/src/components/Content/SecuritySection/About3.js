import React from 'react';
import styled from 'styled-components';

import Link from '../../Link.js';
import EU from '../../../img/eu.svg';
import Glob from '../../../img/glob.svg';
import PCI from '../../../img/pci.svg';
import US from '../../../img/us.svg';
import Soc from '../../../img/soc.svg';
import About4 from './About4';





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
 text-align: center;
 p{
    padding-bottom: 20px;
    

 }

 a{
    color: #6772e5;


 }

 ul{
    margin: 40px auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 440px;
    list-style: none;
 }
 figure{
     width: 500px;
 }

  img{
      border-radius: 50%;

  }

  li{
      width: 200px;
      height: 156px;
      padding: 0 20px 20px;

  }
  li:nth-child(2n){
    transform: translateY(60px);
  }
`




class About3 extends React.Component {
  render(){
    return (
        <Container>
            <InContainer>
                <Box >
                    <figure>
                    <ul>
                        <li>
                            <img src={PCI} alt="pci"/>
                            <p>PCI DSS Level 1 certification</p>
                        </li>
                        <li>
                            <img src={Soc} alt="Soc"/>
                            <p>SSAE18/SOC 1 type 1 and type 2 and SSAE18/SOC 2 type 1 reports</p>
                        </li>
                        <li>
                            <img src={US} alt="US"/>
                            <p>Money Transmitter Licenses across the US</p>
                        </li>
                        
                        <li>
                            <img src={Glob} alt="pci"/>
                            <p>AFSL in Australia, E-Money License in Europe, and registered MSB in Canada</p>
                        </li>
                        <li>
                            <img src={EU} alt="eu"/>
                            <p><Link text="PSD2 and Strong Customer Authentication (SCA) compliant"></Link></p>
                        </li>

                    </ul>
                    </figure>

                </Box>
                <About4/>
            </InContainer>
        </Container>
    );
  }
}
export default About3;