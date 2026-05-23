import react from "react";
// Add image 
import uoj from "./uoj.jpg"
function App() {

  const name = "UOJ"
  const greeting = `Welcome to ${name} 👋`
  // add image
  const add_image = <img src={uoj} width={"500px"} alt="university of jaffna"></img>

  // props
  const welcome = (props) => {
    return <div> {props.children} </div>
  }

  return (
    <div>
      <h1> {greeting} </h1>
      <img src={uoj} width={"500px"} alt="university of jaffna"></img>
      {/* {add_image} */}

      <welcome>
        <li> <a href="#"> Home </a> </li>
        <li> <a href="#"> About us </a> </li>
        <li> <a href="#"> Contact us </a> </li>

      </welcome>

    </div> 
  );
}

export default App;
