import React from 'react';
import styled from 'styled-components';



const HeaderParagraf = styled.div`
    width: 500px;
    hight: 128px;
    margin-bottom: 30px;
    font-size: 19px;
    color: #525F7F;
    line-height: 32px;
`


class Paragraf extends React.Component {
  render(){
    return (
        <HeaderParagraf>
            {this.props.text}
        </HeaderParagraf>
    );
  }
}
export default Paragraf;