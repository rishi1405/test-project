import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const element=<h1>Hello, World</h1>;

//Below code is written in JSX
// const element=(<div>
//   <h1>Welcome to React Programming World</h1>
//   <h1>Understanding React Rendering....</h1>
// </div>);
///////////////////////

// const element=React.createElement("div",null,'Welcome to ReactJS....')

const element=React.createElement("div",{className:"testClass"},
React.createElement("h1",null,'Hello,'),
React.createElement("h2",null,'How are you?')
);

ReactDOM.render(element,document.getElementById('root'));