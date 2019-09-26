import React from 'react';
import styled from 'styled-components';


const ButtonBox = styled.div`
    display: flex;
    width: 500px;
    justify-content: flex-start;
    align-items: center;

    a{
        width: auto;
        margin: 10px;
        padding: 14px;
        font-size: 15px;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
        font-weight: 800;
    }
`
const ItemBlue = styled.a`
  background: #32325D;
  color: #FFF;
`

const ItemWhite = styled.a`
  background: #FFF;
  color: #6772E5;

`
class Button extends React.Component {
  render(){
    return (
        <ButtonBox>
            <ItemBlue>{this.props.btn}</ItemBlue>
            <ItemWhite>{this.props.btn2}</ItemWhite>
        </ButtonBox>

    );
  }
}
export default Button;