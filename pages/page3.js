
import styled from 'styled-components';
import {useState, useRef, useEffect, useCallback} from 'react';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import {scrollStop} from '../src/utils';
import dynamic from 'next/dynamic';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;
const Page = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.color};
    transform: translateY(-${props => ((props.index) * (props.itemHeight))}px);
    transition: transform 0.3s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
`;

// const DynamicComponentWithNoSSR = dynamic(() => Promise.resolve(FullPage), {ssr: false});
// export default DynamicComponentWithNoSSR;

export default function FullPage() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const containerRef = useRef();
    const pageRef = useRef(0);
    const timeRef = useRef(new Date().getSeconds);
    const positionRef = useRef(0);
    // const setPageIndexWithThrottle = throttle((index) => {
    //     setCurrentPageIndex(index)
    // }, 1500);

    // 마우스 휠 이벤트
    const handleIndex = useCallback(throttle((e)=>{
        if (new Date().getSeconds() !== timeRef.current) {
            if (e.deltaY < 0) { 
                console.log("pageup")
                pageUp();
            }
            if (e.deltaY > 0) {
                console.log("pagedown")
                pageDown();
            }
        }
        timeRef.current = new Date().getSeconds();
    }, 500), [currentPageIndex]);

    // 모바일 드래그 이벤트
    const handleTouchStart = (e) => {
        const {clientY} = e.changedTouches[0];
        positionRef.current = clientY;
    }
    const handleTouchEnd = (e) => {
        const {clientY} = e.changedTouches[0];
        console.log(clientY, positionRef.current);
        if(clientY - positionRef.current > 50) {
            pageUp();
        }
        if(positionRef.current - clientY > 50) {
            pageDown();
        }
    }

    const pageUp = () => setCurrentPageIndex(currentPageIndex === 0 ? 0 : currentPageIndex - 1); 
    const pageDown = () => setCurrentPageIndex(currentPageIndex === 3 ? 3 : currentPageIndex + 1);
    
    return (
        <Container ref={containerRef} onWheel={handleIndex} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <Page ref={pageRef} color="green" index={currentPageIndex} itemHeight={pageRef.current.offsetHeight}>
                {currentPageIndex}
            </Page>
            <Page color="yellow" index={currentPageIndex} itemHeight={pageRef.current.offsetHeight}>
            {currentPageIndex}
            </Page>
            <Page color="purple" index={currentPageIndex} itemHeight={pageRef.current.offsetHeight}>
            {currentPageIndex}
            </Page>
            <Page color="blue" index={currentPageIndex} itemHeight={pageRef.current.offsetHeight}>
            {currentPageIndex}
            </Page>
        </Container>
    )
}