import "./css/Chatbox.css"
const Chatbox = () => {
  return (
    <div>
        <h3>Chatbox</h3>
        <form>
            <input type="text" placeholder="Enter a message" className="message" ></input>
            <input type="submit" name="submit" value="send"></input>
        </form>
    </div>
  )
}

export default Chatbox