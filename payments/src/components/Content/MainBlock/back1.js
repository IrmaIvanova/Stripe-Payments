
import React from 'react';
import styled from 'styled-components';
import './ImageCheckout.css';

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


class Back1 extends React.Component {
  render(){
    return (

<BackContainer>
        <BackPlate >

            <StripeContainer >
                <Grid className="stripes1 back1">
                    <span className="back1"></span>
                    <div className="stripe outline_shift-down"></div>
                    <div className="stripe state8"></div>

                    <div className="stripe outline"></div>

                </Grid>
            </StripeContainer>
        </BackPlate>
</BackContainer>
    );
  }
}
export default Back1;