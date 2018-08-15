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
		// console.log(this.state.db)
	}

	sortingz = (a,b,c,d = false,e = false,f = false, len = false) => {
		let nameB
		let nameA
		if (len === 2){
			nameB = b[`${c}`][`${d}`].toUpperCase()
			nameA = a[`${c}`][`${d}`].toUpperCase()
		} else if (len === 3){
			if (e === 'hora'){
				nameB = b[`${c}`][`${d}`].toUpperCase().split('T')[1]
				nameA = a[`${c}`][`${d}`].toUpperCase().split('T')[1]
			}else if (e === 'fecha'){
				nameB = b[`${c}`][`${d}`].toUpperCase().split('T')[0]
				nameA = a[`${c}`][`${d}`].toUpperCase().split('T')[0]
			}
		} else if (len === 4){
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

	sortingx = (a,b,c,d = false,e = false,f = false, len = false) => {
		let nameB
		let nameA
		if (len === 2){
			nameB = b[`${c}`][`${d}`].toUpperCase()
			nameA = a[`${c}`][`${d}`].toUpperCase()
		} else if (len === 3){
			if (e === 'hora'){
				nameB = b[`${c}`][`${d}`].toUpperCase().split('T')[1]
				nameA = a[`${c}`][`${d}`].toUpperCase().split('T')[1]
			}else if (e === 'fecha'){
				nameB = b[`${c}`][`${d}`].toUpperCase().split('T')[0]
				nameA = a[`${c}`][`${d}`].toUpperCase().split('T')[0]
			}
		} else if (len === 4){
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

	reverse = (x) => {
		const {className} = x.target
		let metaObjects = className.split(' ')
		let c = metaObjects[0] || false
		let d = metaObjects[1] || false
		let e = metaObjects[2] || false
		let f = metaObjects[3] || false
		let len = metaObjects.length || false

		if (this.state.reverse){
			this.setState({
				db: this.state.db.sort((a,b) => {
					return this.sortingz(a,b,c,d,e,f,len)
				}),
				reverse: false
			})
		} else {
			this.setState({
				db: this.state.db.sort((a,b) => {
					return this.sortingx(a,b,c,d,e,f,len)
				}),
				reverse: true
			})
		}
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