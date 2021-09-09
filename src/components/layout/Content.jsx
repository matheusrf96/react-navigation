import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'

import './Content.css'

const Content = (props) => {
    return (
        <main className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/param/:id">
                    <Param />
                </Route>
            </Switch>
        </main>
    )
}

export default Content
