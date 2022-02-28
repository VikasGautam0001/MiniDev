import "./App.css"
import Chatbox from "./components/Chatbox";
import Editor from "./components/Editor";
import Question from "./components/Question";

function App() {
  return (
    
      <div className="row">
        <div className="col-sm-4">
          <Question/>
        </div>
        <div className="col-sm-4">
          <Editor/>
        </div>
        <div className="col-sm-4">
          <Chatbox/>
        </div>
      </div>
   
  );
}

export default App;
