import { useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers,setNewUsers]=useState([]);
  useEffect(()=>{
const getNewUsers=async ()=>{
  try{
    const res=await axios.get("/users?new=true",{ headers: {
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ1YTI2NWQ2OTdlZTZhNGQ2M2FmMSIsImlhdCI6MTcxMTU3NDM5MCwiZXhwIjoxNzEyMDA2MzkwfQ.F1YgwhJAxmstACk6tWlQafDXJxRO5iyqmRgiUbGtgug",
    },});
    setNewUsers(res.data);
  }catch(err){
    console.log(err);
  }
}
getNewUsers();  
},[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>(
 <li className="widgetSmListItem">
 <img
   src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png"}
   alt=""
   className="widgetSmImg"
 />
 <div className="widgetSmUser">
   <span className="widgetSmUsername">{user.username}</span>
    </div>
 <button className="widgetSmButton">
   <Visibility className="widgetSmIcon" />
   Display
 </button>
</li>

        ))}
       
      </ul>
    </div>
  );
}
