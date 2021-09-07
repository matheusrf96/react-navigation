import React from 'react'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import './App.css'

const App = (props) => {
    return (
        <div className="app">
            <Menu />
            <Content />
        </div>
    )
}

export default App
