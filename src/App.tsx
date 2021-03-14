import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Nav from './components/Nav';
import Tags from './components/Tags';
import Statistics from './components/Statistics';
import Money from './components/Money';
import NoMatch from './components/NoMatch';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags />
                        </Route>
                        <Route path="/money">
                            <Money />
                        </Route>
                        <Route path="/statistics">
                            <Statistics />
                        </Route>
                        <Redirect exact from={"/"} to={"/money"}/>
                        <Route path={"*"}>
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>

                <Nav/>
            </Wrapper>
        </Router>
    );
}

export default App;
