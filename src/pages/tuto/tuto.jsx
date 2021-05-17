import React from 'react';
import './tuto.styles.scss';

const Tutorial = () => {
  return(
    <div className="main">
      <h1>Some Information about the elements and syntax of things used on this project</h1>
      <h2>Differences between Functional Components and Class Components in React</h2>
      <br />

      <h3>Function Components</h3>
      <p><strong>Functional components</strong> are some of the more common components that will come across while working in React.</p>
      <p>These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree.</p>
      <h4>Syntax</h4>
      <div className="syntax">
        <span className="res_word">const</span> <span className="function"> functionName</span> = () =&gt; {'{'} <br/>
        &nbsp; <span className="func_res">return</span>( <br/>
        &nbsp; &nbsp; <span className="comentario">-- JSX code</span> <br/>
        &nbsp; ); <br/>
        {'}'}
      </div>

      <br />

      <h3>Class Components</h3>
      <p><strong>React class based components</strong> are the bread and butter of most modern web apps built in ReactJS. </p>
      <p>These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.</p>
      <p>The main feature of class-based components that distinguish them from functional components is that they have access to a <span className="res_word">state</span> which dictates the current behavior and appearance of the component.</p>
      <p>This <span className="res_word">state</span> can be modified by calling the <span className="res_word">setState</span>() function. One or more variables, arrays, or objects defined as part of the state can be modified at a time with the <span className="res_word">setState</span>() function. </p>
      <h4>Syntax</h4>
      <div className="syntax">
        <span className="func_res">import</span> <span className="var"> React </span> <span className="func_res">from</span> <span className="texto"> 'react'</span>; <br/>
        <br />
        <span className="res_word">class</span> <span className="comp"> className</span> <span className="res_word">extends</span> <span className="comp"> React</span>.<span className="comp">Component</span> {'{'} <br/>
        &nbsp; <span className="func_res">constructor</span>() {'{'}<br/>
        &nbsp; &nbsp; <span className="res_word">super</span>(); <br/>
        &nbsp; &nbsp; <span className="comentario">-- This settlement</span> <br />
        &nbsp; {'}'} <br />
        <br />
        &nbsp; <span className="function">render</span> () {'{'} <br />
        &nbsp; &nbsp; <span className="func_res">return</span>( <br />
        &nbsp; &nbsp; &nbsp; <span className="comentario">-- JSX to render</span> <br />
        &nbsp; &nbsp; ); <br />
        &nbsp; {'}'} <br />
        {'{'} <br />
        <br />
        <span className="func_res">export default</span> <span className="comp">className</span>;
      </div>

      <br />

      <p>Data is passed to other components with the help of <span className="res_word">props</span>. <span className="res_word">Props</span> work similarly for all components in ReactJS be they class based or functional. <span className="res_word">Props</span> are always passed down from the parent component to the child component. ReactJS does not allow a component to modify its own <span className="res_word">props</span> as a rule. The only way to modify the <span className="res_word">props</span> is to change the <span className="res_word">props</span> being passed from the parent component to the child component. This is generally done by passing a reference to a function in the parent component, which changes the <span className="res_word">props</span> being passed to the child component.</p>

      <p className="nota">
        <p><strong>Note</strong>: We add props inside the parenthesis of constructor and super.</p>
        <p>Class-based components have access to the lifecycle functions like <span className="res_word">componentWillMount</span>(), <span className="res_word">componentDidMount</span>(),<span className="res_word">componentWillReceiveProps</span>(),<span className="res_word">componentWillUpdate</span>(), <span className="res_word">shouldComponentUpdate</span>(),<span className="res_word">render</span>() and <span className="res_word">componentWillUnmount</span>();, also called as <strong><span className="res_word">lifecylce hooks</span></strong></p>
      </p>





    </div>
  );
}


export default Tutorial;