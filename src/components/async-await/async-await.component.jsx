import React from 'react';


const AsyncAwait = () => {


  const hello = async () => { return "Hello" };
  // console.log(hello());
  // hello().then((value) => console.log(value))
  hello().then(console.log);

  return(
    <div className="main">
      <h2>Making asynchronous programming easier with async and await</h2>
      <h3>The async keyword</h3>
      <p>First of all we have the <span className="res_word">async</span> keyword, which you put in front of a function declaration to turn it into an async function. An async function is a function that knows how to expect the possibility of the <span className="res_word">await</span> keyword being used to invoke asynchronous code.</p>
      <h4>Try typing the following lines into your browser's JS console:</h4>
      <div className="syntax">
        <span className="res_word">const</span><span className="function"> hello</span> = () =&gt; {'{'} <span className="func_res">return </span><span className="texto">'Hello</span> {'}'}; <br />
        <span className="res_word">console</span>.<span className="function">log</span>(<span className="function">hello</span>());
      </div>

      <br />

      <p>The function returns "Hello" — nothing special, right?</p>
      <h4>But what if we turn this into an async function? Try the following:</h4>
      <div className="syntax">
        <span className="res_word">const</span><span className="function"> hello</span> = <span className="res_word">async</span> () =&gt; {'{'} <span className="func_res">return </span><span className="texto">'Hello</span> {'}'};
      </div>
      <p>To actually consume the value returned when the promise fulfills, since it is returning a promise, we could use a .<span className="res_word">then</span>() block</p>
      <div className="syntax">
        <span className="function">hello</span>().<span className="res_word">then</span>((<span className="res_word">value</span>) =&gt; <span className="res_word">console</span>.<span className="function">log</span>(<span className="res_word">value</span>));
      </div>
      <p>So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.</p>

      <br />

      <h3>The await keyword</h3>
      <p>The advantage of an <span className="res_word">async</span> function only becomes apparent when you combine it with the <span className="res_word">await</span> keyword. await only works inside async functions within regular JavaScript code, however it can be used on its own with JavaScript modules.</p>
      <p className="nota">
      <span className="res_word"><strong>await</strong></span> can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.
      </p>
      <p>You can use await when calling any function that returns a Promise, including web API functions.</p>

      <br />

      <h4>Here is a trivial example:</h4>
      <div className="syntax">
        <span className="res_word">const</span><span className="function"> hello</span> = <span className="res_word">async</span> () =&gt; {'{'}  <br />
        &nbsp; <span className="func_res">return </span> <span className="var">greeting</span> = <span className="res_word">await</span> Promise.<span className="res_word">resolve</span>( <span className="texto">'Hello'</span> ); <br />
        {'}'}; <br />
        <br />

        <span className="function">hello</span>().<span className="res_word">then</span>( <span className="res_word">alert</span> );
      </div>
      
      <p className="nota">For more info go to <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await" target="_blank" rel="noopener noreferrer">Mozilla Async/Await</a></p>



    </div>
  )
}

export default AsyncAwait;