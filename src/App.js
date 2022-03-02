import "./App.css"
import Chatbox from "./components/Chatbox";
import Editor from "./components/Editor";
import Question from "./components/Question";

function App() {
  return (
    
      <div className="container">
        <div className="question">
          <Question/>
        </div>
        <div className="editor">
          <Editor/>
        </div>
        <div className="chatbox">
          <Chatbox/>
        </div>
      </div>
   
  );
}

export default App;
