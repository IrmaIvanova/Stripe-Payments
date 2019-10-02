import React from 'react';
import Proof from './MainBlock/Proof.js';
import GrowFaster from './MainBlock/GrowFaster';
import Developer from './MainBlock/Developer';
import Section from './MainBlock/Section.js';
import Carusel from './MainBlock/Carusel';





class MainBlock extends React.Component {
  render(){
    return (
        <div>
            <Proof/>
            <GrowFaster/>
            <Developer/>
            <Section/>
            <Carusel/>

        </div>
    );
  }
}
export default MainBlock;