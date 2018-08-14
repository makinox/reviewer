import React from 'react'
import Tables from './tables'
import db from './../../../db/db.json'

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
				<Tables db={this.state.db}/>
			</section>
		)
	}
}