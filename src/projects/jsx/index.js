import react from "react";
import reactDom from "react-dom";


//making a component
function getButtonText(){
    return "click me!";
}

const App = () => (
    <div style = {{backgroundColor : "blue",color:"white"}} className = "hello">{getButtonText()}</div>
)

reactDom.render(<App />,document.querySelector("#root"));

