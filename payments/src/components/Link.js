import React from 'react';
import styled from 'styled-components';



const Item = styled.div`
   
`



class Link extends React.Component {
  render(){
    return (
        <Item>
        <a href="#">{this.props.text}</a>
        </Item>

    );
  }
}
export default Link;