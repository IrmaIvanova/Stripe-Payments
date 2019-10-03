import React from 'react';
import styled from 'styled-components';

import Lyft from '../../../img/lyft.svg';
import Slack from '../../../img/slack.svg';
import Gloss from '../../../img/glossier.svg';
import Chari from '../../../img/charity_water.svg';
import MissG  from '../../../img/missguided.svg';



const HeaderContainer = styled.div`
    width: 1903px;
    position: relative;
    top: 900px;

`
const InContainer = styled.div`
    width: 940px;
    margin: 50px 550px;
    padding: 0 20px;

`
const Image = styled.div`
        z-index: 5;
        display: flex;
        justify-content: space-around;
    img{
        width: auto;
        height: 48px;
        z-index: 5;
        }

`

class PartnersLogoBlock extends React.Component {
  render(){
    return (
        <HeaderContainer>
            <InContainer >
                <Image >
                    <img src={Lyft} alt="phone"/>
                    <img src={Slack} alt="tablet"/> 
                    <img src={Chari} alt="tablet"/>
                    <img src={MissG} alt="tablet"/>
                    <img src={Gloss} alt="tablet"/>


                </Image>
            </InContainer>
        </HeaderContainer>
    );
  }
}
export default PartnersLogoBlock;