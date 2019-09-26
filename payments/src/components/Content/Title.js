import React from 'react';
import styled from 'styled-components';



const MainTitle = styled.h1`
    width: 500px;
    margin-bottom: 30px;
    color: #32325d;
    font-size: 42px;
    line-height: 52px; 
    font-weight: 500;
`


class Title extends React.Component {
  render(){
    return (
        <MainTitle>
            {this.props.title}
        </MainTitle>
    );
  }
}
export default Title;