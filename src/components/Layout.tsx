import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

export default function Layout(props:any){
    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}