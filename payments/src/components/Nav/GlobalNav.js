import React from 'react';
import styled from 'styled-components';
import Link from '../Link.js';
import './GlobalNav.css';


const HeaderNav = styled.div`
    width: 1040px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    top: -620px;
    border-bottom: 2px solid #e6ebf1;

    a{
        padding: 0 25px 0 0;
        text-decoration: none;
        font-size: 17px;
    }
`

const Logo = styled.div`
    a{
        font-weight: 800;
        font-size: 30px;
    }
`
const NavCenter = styled.div`
    display:flex;
`
const NavRight = styled.div`
    display:flex;
`
const Item = styled.div`
  
`
class GlobalNav extends React.Component {
  render(){
    return (
        <HeaderNav>
            <Logo>
                <Link text="stripe"/>
            </Logo>
            <NavCenter>
                <Link text="Products"/>
                <Link text="Developers"/>
                <Link text="Company"/>
                <Link text="Pricing"/>
            </NavCenter>
            <NavRight>
                <Link text="Support"/>
                <Item className="arrow"><Link text="Sign in"/></Item>
            </NavRight>
        </HeaderNav>
    );
  }
}
export default GlobalNav;