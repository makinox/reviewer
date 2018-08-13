import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <section>
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to={props.route}>{props.section}{props.title}</Link>
            </div>
        </nav>
    </section>
)