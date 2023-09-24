'use client'
import { styled } from "styled-components"

const Wrapper = styled.header`
  background-color: #ffffff;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:80px;
  z-index: 1000;
  box-shadow: 0px 4px 16px 0px rgba(221, 221, 221, 0.24);

  .inner {
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid red;
    border-right: 1px solid red;
  }

  @media (max-width: 1440px) {
    padding: 0 20px;

    .inner {
      width: 100%;
    }
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <div className="inner">
        <h1>HEADER</h1>
        <nav>Gnb</nav>
      </div>
    </Wrapper>
  )
}