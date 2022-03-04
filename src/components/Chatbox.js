
import {useState,useEffect} from 'react'
import "./css/Chatbox.css"
import ChatboxMessage from "./ChatboxMessage"

const Chatbox = () => {

  const [Messages, setMessages] = useState([])
  const [Message, setMessage] = useState("")
  

  const onAdd = (Message) => {
    setMessages([...Messages , Message])
  }
  
  const onSubmit = (e) => {
      e.preventDefault()

      if(!Message){
        alert('Please add text')
        return
      }

      onAdd(Message)

      
      // setMessage('')
  }

  return (
    

    <div>
        <h3 className="header">Chatbox</h3>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a message"
             value={Message} className="message"
             onChange={(e) => setMessage(e.target.value)}
            />

            <input type="submit" name="submit"  className='btnsend'
              value='Send'
            />
        </form>

        {Messages.map((msg) =>(
            <ChatboxMessage msg={msg} userName="Pankaj"/>
        ))}
        
        
    </div>
  )
}

export default Chatbox