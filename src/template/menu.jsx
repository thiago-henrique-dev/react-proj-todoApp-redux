import React from "react";

export default prosp => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="#/todos" className="navbar-brand"><i className="fa fa-calendar-check-o"></i> TodoApp</a> 
            </div>
        </div>
        <div id='navbar' className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="#/todos">Tarefa</a></li>
                <li><a href="#/about">Sobre</a></li>
            </ul>
        </div>
    </nav>
)