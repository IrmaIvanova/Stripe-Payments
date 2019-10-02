import React from 'react';
import styled from 'styled-components';
import Paragraf from './ParagrafMain.js';
import Link from '../../Link.js';
import '../../Nav/GlobalNav.css';
import SubTitles from '../SubTitle.js';
import Global from '../../../img/global.svg';
import Partnerships from '../../../img/partnerships.svg';
import Reliability from '../../../img/reliability.svg';



const Container = styled.div`
    width: 1903px;
    height: 400px;
    position: relative;
    top: 850px;

`
const InContainer = styled.div`
    width: 1040px;
    height: 400px;
    margin: 0 432px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    


`

const Box = styled.div`
    width: 346px;
    padding: 20px;

    p{
        font-size: 17px;
        color: #32325D;
    }
`

const Item = styled.div`
a{
    color: #6772e5;
    font-size: 17px;
}
`


class Section extends React.Component {
  render(){
    return (
        <Container>
            <InContainer>
                <Box className="box">
                <img src={Reliability} alt="Reability"/>
                    <SubTitles title="Battle-tested reliability"/>
                    <Paragraf className="introText" text="Securely accept payments backed by highly scalable infrastructure built from the ground up for redundancy, security, and velocity."/>
                    <Item className="arrow4"><Link text="Stripe status"/></Item>
                </Box>
                <Box className="box">
                <img src={Global} alt="Glopal"/>
                    <SubTitles title="Global reach with one integration"/>
                    <Paragraf className="introText" text="Sidestep the integration costs of going global with our unified API that makes account setup consistent worldwide so you can access Stripe’s local processing capabilities."/>
                    <Item className="arrow5"><Link text="Explore global features"/></Item>
                </Box>
                <Box className="box">
                <img src={Partnerships} alt="Partnerships"/>
                <SubTitles title="Industry expertise built-in"/>
                <Paragraf className="introText" text="Rely on us to partner with the wider payments industry: from the expected partners—local banks, major card networks, the PCI Council—to the unexpected—the W3C, internet browser providers, and industry associations."/>

            </Box>
            </InContainer>
        </Container>
    );
  }
}
export default Section;