import React from 'react'
import './table.css'

export default (props) => (
    <section>
        <div className="container">
            <div className="row">
                <div className="col col-12">
                    <table className="table table-striped table-hover table-responsive-sm table-bordered mt-5">
                        <thead>
                            <tr className="thead-dark">
                                <th scope="col" className="Check CheckNumber" onClick={props.reverse}>#</th>
                                <th scope="col" className="Articulos Item 0 Id" onClick={props.reverse}>Number</th>
                                <th scope="col" className="Check OpenTime hora" onClick={props.reverse}>Hora</th>
                                <th scope="col" className="Check OpenTime fecha" onClick={props.reverse}>Fecha</th>
                                <th scope="col" className="Articulos Item 2 Amount" onClick={props.reverse}>Valor</th>
                                <th scope="col" className="Articulos Item 1 Description" onClick={props.reverse}>Descripcion</th>
                                <th scope="col" className="Articulos Item 1 Qty" onClick={props.reverse}>Qty</th>
                                <th scope="col" className="Articulos Item 2 Name" onClick={props.reverse}>Medio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.db.map((sell) => {
                                    return (
                                        <tr key={sell.Check['CheckNumber']}>
                                            <th scope="row">{sell.Check['CheckNumber']}</th>
                                            <td>{sell.Articulos.Item[0].Id}</td>
                                            <td>{sell.Check['OpenTime'].split('T')[1]}</td>
                                            <td>{sell.Check['OpenTime'].split('T')[0]}</td>
                                            <td>{sell.Articulos.Item[2].Amount}</td>
                                            <td>{sell.Articulos.Item[1].Description}</td>
                                            <td>{sell.Articulos.Item[1].Qty}</td>
                                            <td>{sell.Articulos.Item[2].Name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
)