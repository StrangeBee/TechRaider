import React from 'react'
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components';
import bckbImage from '../assets/bckb.jpg';



const Styles = styled.div `
  .jumbo {
      background: url(${bckbImage}) no-repeat fixed bottom;
      background-size: cover;
      color: #efefef;
      height: 208px;
      position: relative;
      z-index: -2;
  }

  .overlay {
      background-color: #000;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
  }
`;

export default function Jumbotron() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>Learn how to code with Tech Raid Videos</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}
