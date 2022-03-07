import "./Editor.css"

const Editor = () => {
  return (
    <div>
      <h3 className="header">Code Editor</h3>
        <form>
            <textarea className="textArea" name="codeEditor"> </textarea>
            <input type="button" value="Run" className="run" ></input>
            <input type="button" value="Submit" className="submit"></input>
        </form>
    </div>
  )
}

export default Editor