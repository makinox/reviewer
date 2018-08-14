import React from 'react'
import Tables from './../../table/table1'
import db from './../../../db/db.json'
import Nav from './../../navbar/nav'

export default class App extends React.Component {
	state = {
		db: db.db.map(e => e.Sale)
	}

	componentDidMount(){
		console.log(this.state.db)
	}

	render() {
		return (
			<section>
				<Nav route="/reports" title="Ventas"/>
				<Tables db={this.state.db}/>
			</section>
		)
	}
}