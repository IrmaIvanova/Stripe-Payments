import React from 'react';

import styled from 'styled-components';
import Back4 from './back4';



const Container = styled.div`
    width: 1903px;
    position: relative;

`
const InContainer = styled.div`
    width: 1040px;
    margin: 0 432px;
    padding: 0 20px;
    h1{
        margin-bottom: 100px;
    }
`





class DeepDive extends React.Component {
  render(){
    return (
        <Container>
        <Back4/>
            <InContainer>
                
            </InContainer>



        </Container>
            

    );
  }
}
export default DeepDive;