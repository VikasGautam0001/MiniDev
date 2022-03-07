import {Link} from 'react-router-dom';
import './CreateRoomPopup.css'
const CreateRoomPopup = () => {
    return (
        <div className="CreateRoomPopup">
            <div className="Difficuilty" >
                <label htmlFor="Difficuilty" style={{marginBottom:'5px'} }>Difficuilty</label>
                <select style={{height:'25px',backgroundColor:'#F5F5F5'}}>
                    <option value="Easy">Easy</option>
                    <option value="Mediums">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="Duration" >
                <label htmlFor="Duration" style={{marginBottom:'5px'} }>Duration</label>
                <select style={{height:'25px',backgroundColor:'#F5F5F5'}}>
                    <option value="duration1">30 Minutes</option>
                    <option value="duration2">60 Minutes</option>
                </select>
            </div>
            <div className="UserName">
                    <label htmlFor="UserName" style={{marginBottom:'5px'}}>UserName</label>
                    <input type="text" name="UserName" id="UserName" placeholder="Enter Username" style={{height:'25px',backgroundColor:'#F5F5F5'}}/>
            </div>
            <div>
                <Link to={'/room'}>
                    <button style={{backgroundColor:'green', color:'white'}}>Create</button>
                </Link>
                <button style={{backgroundColor:'red', color:'white'}}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateRoomPopup
