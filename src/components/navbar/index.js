import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'
import Navbar from './navbar'

export default class App extends Component {
    state = {
        isOpen: false,
        loggedIn: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logOut = () => {
        localStorage.removeItem('logged')
        this.setState({ loggedIn: true })
        // window.location.reload()
        // return (
        //     <Redirect to="/" />
        // )
        setTimeout(() => {this.setState({ loggedIn: false }); window.location.reload()}, 1)
    }

    render() {
        return (
            <section>
                <Navbar toggler={this.toggle} open={this.state.isOpen} logOut={this.logOut} logged={this.state.loggedIn}/>
            </section>
        )
    }
}