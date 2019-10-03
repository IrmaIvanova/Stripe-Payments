import React from 'react';
import Title from '../Title';
import styled from 'styled-components';
import About1 from './About1';


const Container = styled.div`
    width: 1903px;
    position: relative;
    top: 300px;
`
const InContainer = styled.div`
    width: 1040px;
    margin: 0 432px;
    padding: 0 20px;
    h1{
        margin-bottom: 100px;
    }
`





class AboutSecurity extends React.Component {
  render(){
    return (
        <Container>
            <InContainer>
                <Title title="Security and compliance at the core"/>
            </InContainer>
            <About1/>


        </Container>
            

    );
  }
}
export default AboutSecurity;