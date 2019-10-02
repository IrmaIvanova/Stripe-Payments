
import React from 'react';
import styled from 'styled-components';
import './back2.css';

const BackContainer = styled.div`

`

const BackPlate = styled.div`

`

const BackgroundContainer = styled.div`

`
const Grid = styled.div`

`
const Background = styled.div`

`
const StripeContainer = styled.div`

`


class Back2 extends React.Component {
  render(){
    return (

<BackContainer>
        <BackPlate >

            <StripeContainer >
                <Grid className="stripes2 back2">
                    <span className="back2"></span>
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
export default Back2;