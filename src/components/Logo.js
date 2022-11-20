import React from "react";
import logo from './../logo.svg'

function Logo() {
    return(<div style={{ display:'flex', flexDirection:'row'}}>

       <img src={logo} alt='logo' style={{ width:"80px", height:"80px"}}/>
       <div style={{ display:'flex', alignItems:'center'}}>
       React
       </div>
    </div>)
}

export default Logo