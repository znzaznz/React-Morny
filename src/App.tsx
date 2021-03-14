import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Tags from './components/Tags';
import Statistics from './components/Statistics';
import Money from './components/Money';
import NoMatch from './components/NoMatch';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`
const  Nav = styled.nav`
  border: 1px solid blue;
  >ul {
    display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
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

                <Nav>
                    <ul>
                        <li>
                            <Link to="/tags">标签</Link>
                        </li>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}

export default App;
