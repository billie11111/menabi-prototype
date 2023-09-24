'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { styled } from "styled-components"

const Wrapper = styled.main`
  margin-top: 80px;
  
  .desktop-l {
    position: relative;
    padding: calc(50vh - 80px) 0;
    background-color: var(--main-bg-color);
  
    .inner {
      max-width: 1440px;
      height: 100%;
      margin: 0 auto;
      position: relative;

      .animation-container {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: left;
        transition: left 1s ease-in-out;
      }
    }
  }

  .desktop-m {
    display: none;

    .inner {
      width: 696px;
      border: 1px solid red;
      margin: 0 auto;
    }
  }

  @media (max-width: 1440px) {
    .desktop-l {
      display:none;
    }

    .desktop-m {
      display:block;
    }
  }
`;

const TestAWrapper = styled.div`
  height: 634px;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  position: relative;

  .title {
    color: var(--main-theme-color);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 50px;
    transition: opacity 1s ease-in-out;
  }

  .category {
    width: 360px;
    text-align: right;
    font-size: 40px;
    margin-right: 20px;

    & > span {
      font-size: 15px;
      display: inline-block;
      margin-right:15px;
    }
  }
`;

const TestBWrapper = styled.div`
  height: 634px;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  position: relative;
  z-index: 1;

   .category {
    width: 120px;
    text-align: right;
    font-size: 40px;
    margin-right: 20px;

    & > span {
      font-size: 15px;
      display: inline-block;
      margin-right:15px;
    }
  }
`;

const TestCard = styled.div`
  width: 440px; //width: 880px;
  height: 634px;
  transition: width 1s ease-in-out; 
  display: flex;
  position: relative;
  
  .cover {
    position: relative;
    width: 440px;
    height: 634px;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    display: flex;
    transition: opacity 0.3s ease-in-out;

    .desc {
      background: url('/bg_left.webp') no-repeat 5px top;
      background-size: cover;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .container {
        width: 328px;
        opacity: 0;

        & > h3 {
          display:block;
          margin-bottom: 20px;
          font-size: 24px;
          line-height: 35px;
          font-weight: bold;

          & > span {
            color: green;
          }
        }

        & > p {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 20px;
        }

        & > a {
          position: relative;
          z-index: 1;
          font-size: 14px;
          text-align: center;
          background-color: black;
          padding: 10px 30px;
          color: #ffffff;
          border-radius: 5px;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
      }
    }

    .image {
      background: url('/bg_right.webp') no-repeat -5px top;
      background-size: cover;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    width: 880px;

    .content {
      opacity: 1;
      transition: opacity 1s ease-in-out;

      .container {
        opacity: 1;
        transition: opacity 1s ease-in-out;
        transition-delay: 400ms;
        transition-property: opacity;
      }
    }

    .cover {
      opacity:0;
    }
  }
`;




export default function Home() {
  const [isHoverB, setIsHoverB] = useState(false);
  const onMouseEnter = () => setIsHoverB(true);
  const onMouseLeave = () => setIsHoverB(false);

  return (
    <Wrapper>
      <section className="desktop-l">
        <div className="inner">
          <div className={`animation-container ${isHoverB ? "move-left" : ""}`}>

            <TestAWrapper>
              <div className={`title ${isHoverB ? "hide-title" : ""}`}>연령에 맞는<br /> 검사지를<br /> 선택해 주세요</div>
              <div className="category"><span>중.고등학생</span>청소년</div>
              <TestCard>
                <div className="cover">
                  <Image src="/cover_1.webp" alt="cover" fill />
                </div>
                <div className="content">
                  <div className="desc">
                    <div className="container">
                      <h3>
                        <span>성향 맞춤 학습전략 검사</span>
                        는 개인의 내적 특성을 파악하여 맞춤형 학습 전략을 제안하는 검사입니다.
                      </h3>
                      <p>이 검사를 통해 나의 성향에 기밚나 학습 전략을 이해하고 나의 학습 루틴에 통합하면 보다 의미있는 학습 경험, 학업성취도 향상, 미래의 도전과 지식의 실제 적용에 대한 더 나은 준비로 이어질 수 있습니다.</p>
                      <Link href="/">검사 시작하기</Link>
                    </div>
                  </div>
                  <div className="image">뇌 사진</div>
                </div>
              </TestCard>
            </TestAWrapper>

            <TestBWrapper onMouseLeave={onMouseLeave}>
              <div className="category">성인</div>
              <TestCard>
                <div className="cover" onMouseEnter={onMouseEnter}>
                  <Image src="/cover_2.webp" alt="cover" fill />
                </div>
                <div className="content">
                  <div className="desc">
                    <div className="container">
                      <h3>
                        <span>성향 맞춤 학습전략 검사</span>
                        는 개인의 내적 특성을 파악하여 맞춤형 학습 전략을 제안하는 검사입니다.
                      </h3>
                      <p>이 검사를 통해 나의 성향에 기밚나 학습 전략을 이해하고 나의 학습 루틴에 통합하면 보다 의미있는 학습 경험, 학업성취도 향상, 미래의 도전과 지식의 실제 적용에 대한 더 나은 준비로 이어질 수 있습니다.</p>
                      <Link href="/">검사 시작하기</Link>
                    </div>
                  </div>
                  <div className="image">뇌 사진</div>
                </div>
              </TestCard>
            </TestBWrapper>

          </div>
        </div>
      </section>

      {/* (1366px) */}
      <section className="desktop-m">
        <div className="inner">
          container : 696
        </div>
      </section>
    </Wrapper>
  )
}
