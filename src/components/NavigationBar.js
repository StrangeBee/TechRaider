import React from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div `
 .navbar {
     background-color: #222;
 }

 .navbar-brand, .navbar-nav .nav-link {
     color: #bbb;

     &:hover {
         color: white;
     }
 }

`;
 
export default function NavigationBar() {
    return (
       <Styles>
           <Navbar expand="lg">
               <Navbar.Brand href="/">Tech Raid</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                      <NavItem><NavLink href="/">Home</NavLink></NavItem>
                      <NavItem><NavLink href="/about">About</NavLink></NavItem>
                      <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
                  </Nav> 
               </Navbar.Collapse>
           </Navbar>
       </Styles>
    )
}
