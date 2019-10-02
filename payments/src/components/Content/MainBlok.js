import React from 'react';
import Proof from './MainBlock/Proof.js';
import GrowFaster from './MainBlock/GrowFaster';
import Developer from './MainBlock/Developer';





class MainBlock extends React.Component {
  render(){
    return (
        <div>
            <Proof/>
            <GrowFaster/>
            <Developer/>

        </div>
    );
  }
}
export default MainBlock;