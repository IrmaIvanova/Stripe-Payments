import React from 'react';
import styled from 'styled-components';
import Paragraf from './ParagrafMain.js';
import Link from '../../Link.js';
import '../../Nav/GlobalNav.js';
import SubTitles from '../SubTitle.js';
import Cards from './Cards';


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
`

const Item = styled.div`
a{
    color: #6772e5;
    font-size: 19px;
}
`
const CardBox = styled.div`
    div:nth-child(2){
        visibility: hidden;
    }
    div:nth-child(3){
        visibility: hidden;
    }
    p{
        font-size: 15px;
    }

`

class Proof extends React.Component {
  render(){
    return (
        <Container>
            <InContainer>
                <Box className="box">
                    <SubTitles title="PRESENT AND FUTURE PROOF"/>
                    <Paragraf className="introText" text="Integrate the latest technologies with an innovative platform that’s always getting better and launching new features weekly. We fit your needs as you grow and as the industry evolves."/>
                    <Item className="arrow2"><Link text="Explore all Features"/></Item>
                </Box>
                <CardBox><Cards/><Cards/><Cards/></CardBox>
            </InContainer>
        </Container>
    );
  }
}
export default Proof;