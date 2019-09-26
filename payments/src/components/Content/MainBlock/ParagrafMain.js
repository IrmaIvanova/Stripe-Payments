import React from 'react';
import styled from 'styled-components';



const MainParagraf = styled.div`
    width: 500px;

    margin-bottom: 30px;
    font-size: 24px;
    color: #424770;
    line-height: 32px;
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