import React from 'react'
import Banner from './comp/banner.js'
import List from './comp/list.js'

export default class App extends React.Component {
    render() {
        return (
            <>
                <Banner>
                    <h1>Medicine Portal Prototype</h1>
                    <h2>Check medications here</h2>
                </Banner>

                <List />
            </>
        )
    }
}