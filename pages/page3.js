
import styled from 'styled-components';
import {useState, useRef, useEffect} from 'react';
import throttle from 'lodash.throttle';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
`;

export default function FullPage() {
    const currentPageIndex = useState(0);
    const scrollRef = useRef();
    
    useEffect(() => {
        console.log(scrollRef.current);
    }, []);
    return (
        <Container ref={scrollRef}/>
    )
}