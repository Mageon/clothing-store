import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
// import { Link } from 'react-router-dom';


const HomePage = (props) => {
  // console.log(props);
  return (    
    <div className="HomePage">
      {/* <Link to='/hats'>Hats Page</Link>
          // This one is like a tag but it rendes in our app the link we give it 
          // Now we can use the props to make a button to link to that
      <button onClick={() => props.history.push('/hats') }> To Hats Page </button> */}
      <Directory/>
    </div>
  )
}
export default HomePage;