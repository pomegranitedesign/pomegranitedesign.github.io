import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Logo from '../images/logo.png';

const HeaderWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 1.45rem;
  background-color: #747d8c;
  position: relative;
  height: ${({ isHome }) => (
    isHome ? "70vh" : "20vh" 
  )};
  z-index: 1;

  h1 {
    margin: 0;

    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    li {
      list-style: none;
      margin-left: 20px;

      a {
        text-decoration: none;
        color: #ffffff;

        transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
        
        padding: 10px;

        &:hover {
          background-color: #3742fa;
        }
      }
    }
  }
`;

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    if(location.pathname !== prevProps.location.pathname) {
      if(location.pathname === "/") {
        this.headerRef.animate(
          [
            { height: '20vh' },
            { height: '70vh' }
          ],
          
          {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
            iterations: 1
          }
        );
      } else {
        this.headerRef.animate(
          [
            { height: '70vh' },
            { height: '20vh' }
          ],
          
          {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
            iterations: 1
          }
        );
      }
    }
  }
  
  render() {
    const { data, location } = this.props;

    return (
      <HeaderWrapper 
        ref={headerRef => this.headerRef = ReactDOM.findDOMNode(headerRef)}
        isHome={location.pathname === '/'}
      >
        <HeaderContainer>
          <h1>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img 
                src={Logo}
                alt="Logo"
              /> 
            </Link>
          </h1>
          
          <Navigation>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </Navigation>
        </HeaderContainer>
        <Img 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: '100%',
            opacity: 0.4,
            filter: "blur(2px)"
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }
}

export default Header;
