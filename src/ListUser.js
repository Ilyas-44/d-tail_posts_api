import React, { useState } from "react";
import User from "./User";
export default function ListUser(props){
const [activeId,setActiveId]=useState(1)
const users=props.utilisateurs
function handleChangeActiveId(id){ 
    setActiveId(id)
}
return(<div className="App" >
<h1>nombre d'utilisateurs: {props.utilisateurs.length}</h1>
 {users.map(user=>{
return(<User user={user} activeId={activeId} 
    handleChangeActiveId={handleChangeActiveId}/>)
})}
</div>
)}