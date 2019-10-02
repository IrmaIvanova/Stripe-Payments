import React from 'react';
import styled from 'styled-components';
import Paragraf from './ParagrafMain.js'
import './Cards.css';
import SubTitles from '../SubTitle.js';


const Card = styled.div`
    width: 430px;
    height: 100px;
    padding:35px 40px;
    margin: 30px 40px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    z-index: 0;

    p{
        line-height: 32px;
        font-size: 15px;

    }


`
const TitleBox = styled.div`
    display: flex;
    margin-bottom: 7px;
    h3{
        margin: 0 20px 0 0;
        font-size: 15px;
        text-transform: uppercase;
    }
    h3:nth-child(2){
        color: #8898AA;
        font-weight: 300;

    }


`
const CardShadowBox= styled.div`
    display: flex;
    justify-content: center;
    width: 420px;
    height: 100px;
    padding-bottom: 36px;
    box-shadow: -1px 37px 0px -1px #0000001f;
`
const CardShadowBox1= styled.div`
    width: 390px;
    height: 100px;
    padding-bottom: 72px;
    box-shadow: -1px 37px 0px -1px #b6b4b41f;
`


class Cards extends React.Component{
    render(){
        return(
            <Card className="hover ">
                <CardShadowBox>
                    <CardShadowBox1>
                            <TitleBox>
                                <SubTitles title="terminal"/> 
                                <SubTitles title="september 23"/>
                            </TitleBox>
                            <Paragraf text="Platforms can now export connected account information as a CSV from the Dashboard."/>

                    </CardShadowBox1>
                </CardShadowBox>
            </Card>
        );
    }

}

export default Cards;