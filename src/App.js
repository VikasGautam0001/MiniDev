import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css"
import CreateRoomPopup from "./components/CreateRoomsComponent/CreateRoomPopup";
import RoomPage from "./components/RoomPageComponent/RoomPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element= {<CreateRoomPopup/>} />
          <Route path = "/room" element = {<RoomPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
