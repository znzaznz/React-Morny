import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import Statistics from './views/Statistics.jsx';
import Money from './views/Money';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
    return (
        <AppWrapper>

            <Router>
                <Switch>
                        <Route path="/tags" exact>
                            <Tags />
                        </Route>
                        <Route path={'/tags/:id'}>
                            <Tag/>
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
            </Router>
        </AppWrapper>
    );
}

export default App;
