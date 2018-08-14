import React from 'react'

export default (props) => (
    <section>
        <div className="container">
            <div className="row">
                <div className="col col-12">
                    <table className="table table-striped table-hover table-responsive-sm table-bordered mt-5">
                        <thead>
                            <tr className="thead-dark">
                                <th scope="col">Serial</th>
                                <th scope="col">Number</th>
                                <th scope="col">Numeracion</th>
                                <th scope="col">Fecha reporte</th>
                                <th scope="col">Total efectivo</th>
                                <th scope="col">Total tarjeta</th>
                                <th scope="col">Total ventas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
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
                                        </tr>
                                    )
                                })
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
)