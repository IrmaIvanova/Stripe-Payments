import React from 'react';
import styled from 'styled-components';



const MainParagraf = styled.p`
    

    font-size: 24px;
    color: #424770;
    line-height: 32px;
    font-weight: 300;
`


class Paragraf extends React.Component {
  render(){
    return (
        <MainParagraf>
            {this.props.text}
        </MainParagraf>
    );
  }
}
export default Paragraf;