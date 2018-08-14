import React, { Component } from 'react'
import Nav from './../navbar/nav'
import Table from './../table/table2'
import Db from './../../db/dbf.json'

export default class App extends Component {
    state = {
        db: Db.db.map(e => e.Financialxml)
    }

    componentDidMount() {
        console.log(this.state.db)
    }
    render() {
        return (
            <section>
                <Nav route="/" title="Reportes" />
                <Table />
            </section>
        )
    }
}