import React from 'react';
import styled from 'styled-components';
import Paragraf from './ParagrafMain.js';
import Link from '../../Link.js';
import '../../Nav/GlobalNav.css';
import SubTitles from '../SubTitle.js';
import Grafic from '../../../img/grafic.svg';
import ImageDeveloper from './ImageDeveloper.js';
import Back2 from './back2.js';

const Container = styled.div`
    width: 1903px;
    height: 400px;
    position: relative;
    top: 400px;

`
const InContainer = styled.div`
    width: 1040px;
    height: 400px;
    margin: 200px 432px;
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
    flex-wrap: wrap;
    a{  
        
        color: #159570;
        font-size: 17px;
    }

    
    }
    span{
        margin: 0 0px 25px 40px;
    }
`
const ArrowBox = styled.div`
    a{
        margin: 40px  0 25px 0;
        color: #6772e5;
        font-size: 19px;
    }
`
const DownLoudBox=styled.span`

`

class Developer extends React.Component {
  render(){
    return (
        <Container>
        <Back2></Back2>
            <InContainer>

                <Box className="box">
                    <SubTitles title="DEVELOPER-CENTRIC"/>
                    <Paragraf className="introText" text="Rapidly build production-ready integrations with modern tools, from React components to real-time webhooks. Using Stripe’s developer platform means less maintenance for legacy systems and more focus on core customer and product experiences."/>
                    <Item>
                    <DownLoudBox className="downloud2"><Link text="An IDC study shows that"/></DownLoudBox>
                    <DownLoudBox className="downloud"><Link text="An IDC study shows that"/></DownLoudBox>
                    <DownLoudBox className="downloud"><Link text="An IDC study shows that"/></DownLoudBox>
                    <DownLoudBox className="downloud2"><Link text="An IDC study shows that"/></DownLoudBox>
                    <DownLoudBox className="downloud"><Link text="An IDC study shows that"/></DownLoudBox>
                    <DownLoudBox className="downloud2"><Link text="An IDC study shows that"/></DownLoudBox>
                     </Item>
                     <ArrowBox className="arrow3"><Link text="Explore the docs"/></ArrowBox>
                </Box>
                <ImageDeveloper/>
            </InContainer>
        </Container>
    );
  }
}
export default Developer;