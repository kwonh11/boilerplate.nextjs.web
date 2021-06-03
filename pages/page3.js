import styled from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";
import throttle from "lodash.throttle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  transform: translateY(-${(props) => {
    return props.max == props.index ? ((props.index -1) * props.itemHeight) + 500 : props.index * props.itemHeight
    }
  }px);
  transition: transform 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;
const Footer = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
`;

export default function FullPage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pageRef = useRef(0);
  const timeRef = useRef(new Date().getSeconds);
  const positionRef = useRef(0);

  // 마우스 휠 이벤트
  const handleIndex = useCallback(
    throttle((e) => {
      if (new Date().getSeconds() !== timeRef.current) {
        if (e.deltaY < 0) {
          console.log("pageup");
          pageUp();
        }
        if (e.deltaY > 0) {
          console.log("pagedown");
          pageDown();
        }
      }
      timeRef.current = new Date().getSeconds();
    }, 500),
    [currentPageIndex]
  );

  // 모바일 드래그 이벤트
  const handleTouchStart = (e) => {
    const { clientY } = e.changedTouches[0];
    positionRef.current = clientY;
  };
  const handleTouchEnd = (e) => {
    const { clientY } = e.changedTouches[0];
    console.log(clientY, positionRef.current);
    if (clientY - positionRef.current > 50) {
      pageUp();
    }
    if (positionRef.current - clientY > 50) {
      pageDown();
    }
  };

  const pageUp = () =>
    setCurrentPageIndex(currentPageIndex === 0 ? 0 : currentPageIndex - 1);
  const pageDown = () =>
    setCurrentPageIndex(currentPageIndex === 4 ? 4 : currentPageIndex + 1);

  return (
    <Container
      onWheel={handleIndex}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Page
        ref={pageRef}
        index={currentPageIndex}
        itemHeight={pageRef.current.offsetHeight}
        max={4}
        color="green"
      >
        {currentPageIndex}
      </Page>
      <Page
        index={currentPageIndex}
        itemHeight={pageRef.current.offsetHeight}
        max={4}
        color="yellow"
      >
        {currentPageIndex}
      </Page>
      <Page
        index={currentPageIndex}
        itemHeight={pageRef.current.offsetHeight}
        max={4}
        color="blue"
      >
        {currentPageIndex}
      </Page>
      <Page
        index={currentPageIndex}
        itemHeight={pageRef.current.offsetHeight}
        max={4}
        color="purple"
      >
        {currentPageIndex}
      </Page>
      <Footer>
    textextextexxtextxetxetxetex
      </Footer>
    </Container>
  );
}
