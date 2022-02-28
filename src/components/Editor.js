import "./css/Editor.css"

const Editor = () => {
  return (
    <div>
        <form>
            <h3>Code Editor</h3>
            <textarea className="textArea" name="codeEditor"> </textarea>
            <input type="button" value="Run" style={{width:'220px'}}></input>
            <input type="button" value="Submit" style={{width:'220px'}}></input>
        </form>
    </div>
  )
}

export default Editor