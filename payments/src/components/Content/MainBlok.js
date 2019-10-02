import React from 'react';
import Proof from './MainBlock/Proof.js';
import GrowFaster from './MainBlock/GrowFaster';
import Developer from './MainBlock/Developer';
import Section from './MainBlock/Section.js';





class MainBlock extends React.Component {
  render(){
    return (
        <div>
            <Proof/>
            <GrowFaster/>
            <Developer/>
            <Section/>

        </div>
    );
  }
}
export default MainBlock;