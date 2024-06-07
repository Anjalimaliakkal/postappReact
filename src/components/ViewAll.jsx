import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        "https://jsonplaceholder.typicode.com/posts"
    )
    return (

        <div>
            <NavBar/>
            <h1><center>VIEWALL STUDENTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">USER ID</th>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">TITLE</th>
                                                        <th scope="col">BODY</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{value.userId}</th>
                                                        <td>{value.id}</td>
                                                        <td>{value.title}</td>
                                                        <td>{value.body}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll