import React from 'react'
import Tables from './../../table/table1'
import db from './../../../db/db.json'
import Nav from './../../navbar/nav'

export default class App extends React.Component {
	state = {
		db: db.db.map(e => e.Sale),
		reverse: true
	}

	componentDidMount(){
		console.log(this.state.db)
	}

	sortingz = (a,b,c,d = false,e = false,f = false) => {
		let nameB
		let nameA
		if (c && d){
			nameB = b[`${c}`][`${d}`].toUpperCase()
			nameA = a[`${c}`][`${d}`].toUpperCase()
		} else if (d && e){
			nameB = b[`${c}`][`${d}`][`${e}`].toUpperCase()
			nameA = a[`${c}`][`${d}`][`${e}`].toUpperCase()
		} else if (d && e && f){
			nameB = b[`${c}`][`${d}`][`${e}`][`${f}`].toUpperCase()
			nameA = a[`${c}`][`${d}`][`${e}`][`${f}`].toUpperCase()
		} else {
			nameB = b[`${c}`].toUpperCase()
			nameA = a[`${c}`].toUpperCase()
		}
		if (nameA < nameB) {
		  return -1
		}
		if (nameA > nameB) {
		  return 1
		}
		return 0
	}

	sortingx = (a,b,c,d = false,e = false,f = false) => {
		let nameB
		let nameA
		if (c && d){
			nameB = b[`${c}`][`${d}`].toUpperCase()
			nameA = a[`${c}`][`${d}`].toUpperCase()
		} else if (d && e){
			nameB = b[`${c}`][`${d}`][`${e}`].toUpperCase()
			nameA = a[`${c}`][`${d}`][`${e}`].toUpperCase()
		} else if (d && e && f){
			nameB = b[`${c}`][`${d}`][`${e}`][`${f}`].toUpperCase()
			nameA = a[`${c}`][`${d}`][`${e}`][`${f}`].toUpperCase()
		} else {
			nameB = b[`${c}`].toUpperCase()
			nameA = a[`${c}`].toUpperCase()
		}
		if (nameA > nameB) {
		  return -1
		}
		if (nameA < nameB) {
		  return 1
		}
		return 0
	}

	reverse = (e) => {
		const {className} = e.target
		let metaObjects = className.split(' ')
		console.log(metaObjects.length)

		// if (this.state.reverse){
		// 	this.setState({
		// 		db: this.state.db.sort((a,b) => {
		// 			return this.sortingz(a,b,className)
		// 		}),
		// 		reverse: false
		// 	})
		// } else {
		// 	this.setState({
		// 		db: this.state.db.sort((a,b) => {
		// 			return this.sortingx(a,b,className)
		// 		}),
		// 		reverse: true
		// 	})
		// }
	}

	render() {
		return (
			<section>
				<Nav route="/reports" title="Ventas"/>
				<Tables db={this.state.db} reverse={this.reverse}/>
			</section>
		)
	}
}