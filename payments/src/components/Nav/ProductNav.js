import React from 'react';
import styled from 'styled-components';
import Link from '../Link.js';
import './GlobalNav.css';
import LogoImg from '../../img/Payments.svg';


const PNav = styled.div`
    width: 1040px;
    height: 30px
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    padding: 12px 0;
    top: -620px;
    a{
        padding: 0 25px 0 10px;
        text-decoration: none;
        font-size: 16px;
        font-weight: 800;
        color: #6772e5;
    }

`

const Logo = styled.div`
    display:flex;
    align-items: center;

    img{
        width: 24px;
        height: 24px;
    }
`
const Products = styled.div`
    display:flex;

`

const Item = styled.div`
  
`
class GlobalNav extends React.Component {
  render(){
    return (
        <PNav>
            <Logo>
                <img src={LogoImg} alt="logoImg"/>
                <Link text="PAYMENTS"/>
            </Logo>

            <Products>
                <Item className="active"><Link text="OVERVIEW"/></Item>
                <Link text="FEATURES"/>
                <Item className="arrow"><Link text="DOCS"/></Item>
            </Products>
        </PNav>
    );
  }
}
export default GlobalNav;