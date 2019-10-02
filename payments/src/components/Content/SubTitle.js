import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 21px;
    margin-bottom: 20px;
    font-family: 'Nunito Sans', sans-serif;
    color: #32325D;
`

class SubTitles extends React.Component{
    render(){
        return(
            <H3 >{this.props.title}</H3>
        );
    }
}

export default SubTitles;