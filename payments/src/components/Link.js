import React from 'react';
import styled from 'styled-components';



const Item = styled.a`
   
`



class Link extends React.Component {
  render(){
    return (

        <Item href="#">{this.props.text}</Item>

    );
  }
}
export default Link;