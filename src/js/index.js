import React from 'react';
import ReactDOM from 'react-dom';
import MainView from "./mainView";

var mainView = React.createElement(MainView,{name:'there'},null);

ReactDOM.render(mainView, document.getElementById("main"));