import React from 'react';
import styled from 'styled-components';

import "./InlineBox.css"




const Inline = styled.div`
width: 442px;
display: grid;
grid: repeat(1, 65px) / repeat(5, 1fr);
position: relative;

`
const Span = styled.div`

`
class InlineBox extends React.Component {
  render(){
    return (


            <Inline>
                <Span className="Card"></Span>
                <Span className="Sepa"></Span>
                <Span className="Ideal"></Span>
                <Span className="AliPay"></Span> 
                <Span className="More"></Span> 
            </Inline>

    );
  }
}
export default InlineBox;