import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 21px;
    margin-bottom: 20px;
    font-family: 'Nunito Sans', sans-serif;
`

class SubTitles extends React.Component{
    render(){
        return(
            <div><H3>{this.props.title}</H3></div>
        );
    }
}

export default SubTitles;