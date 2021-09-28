import { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Veneno</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ml-5">
                                <Link className="nav-link active" to="/About">About Me</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/DS">DS</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/Algos">Algorithms</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/Games">Games</Link>
                            </li>
                            {/* <li className="nav-item ml-5">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar