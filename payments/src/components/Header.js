import React from 'react';
import GlobalNav from './Nav/GlobalNav.js';
import ProductNav from './Nav/ProductNav.js';
import BackGrid from './app.js';
import Content from './Content/Content.js';
import LogoBlock from './Content/LogoBlock';




class Header extends React.Component {
  render(){
    return (
        <div>
            <BackGrid/>
            <GlobalNav/>
            <ProductNav/>
            <Content/>
            <LogoBlock/>
        </div>
    );
  }
}
export default Header;