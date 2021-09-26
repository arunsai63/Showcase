import React, { Component } from 'react';

interface IProps {

}

interface IState {

}

class NavBar extends Component<IProps, IState> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Veneno</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ml-5">
                                <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="#">DS</a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="#">ALGO</a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="#">GAMES</a>
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