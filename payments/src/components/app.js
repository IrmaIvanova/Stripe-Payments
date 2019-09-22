import React from 'react';
import styled from 'styled-components';
import './app.css';

const BackContainer = styled.div`

`

const BackPlate = styled.div`

`

const BackgroundContainer = styled.div`

`
const Grid = styled.div`
    .blue4{
        
    }
`
const Background = styled.div`

`
const StripeContainer = styled.div`

`


class BackGrid extends React.Component {
  render(){
    return (

<BackContainer>
        <BackPlate >
            <BackgroundContainer>
                <Grid>
                <Background >
                </Background>
                </Grid>
            </BackgroundContainer>
            <StripeContainer className="background ">
                <Grid className="stripes back">
                    <span className="back"></span>
                    <div className="stripe outline_shift-down"></div>
                    <div className="stripe state8"></div>
                    <div className="stripe blue4"></div>
                    <div className="stripe blue1"></div>
                    <div className="stripe yellow6"></div>
                    <div className="stripe outline"></div>

                    <div className="stripe state8_right"></div>
                    <div className="stripe outline_shift-up"></div>
                    <div className="stripe yellow6_right"></div>
                    <div className="stripe blue1_right"></div>
                    <div className="stripe blue4_right"></div>
                    <div className="stripe blue6_right"></div>
                    <div className="stripe state8_right2"></div>
                    <div className="stripe blue4_right1"></div>
                    <div className="stripe outline_shift"></div>
                    <div className="stripe state8_right3"></div>
                    <div className="stripe blue1_right2"></div>
                    <div className="stripe yellow6_right1"></div>
                </Grid>
            </StripeContainer>
        </BackPlate>
</BackContainer>
    );
  }
}
export default BackGrid;