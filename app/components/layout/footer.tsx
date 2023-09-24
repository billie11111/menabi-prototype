'use client'
import { styled } from "styled-components"

const Wrapper = styled.footer`
  background-color: #ffffff;
  width: 100%;
  height:140px;

  .inner {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    & > h1 {
      align-self: center;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="inner">
        <h1>Footer</h1>
      </div>
    </Wrapper>
  )
}