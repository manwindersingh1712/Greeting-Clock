import React, { useState } from 'react';

var message="";

var styles={
  color:''
};


let curdate = new Date();
let curHour=curdate.getHours();

if(curHour<12){
  message="Good Morning";
  styles.color="green";
}else if(curHour>=12 && curHour<19){
  message="Good Afternoon";
  styles.color="Orange";
}else{
  message="Good Night";
  styles.color="black";
}


function App() {
  let time=curdate.toLocaleTimeString();
  
  const [ctime,setCtime]= useState(time);

  const updateTime=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
  }


  setInterval(updateTime,1000);
  
  return (
    <div className="center">

      <div className>
        <h1>
        Hello There!! <span style={styles}>{message}</span>
        </h1>
        
        <div id="time">
          <h2>Time : {ctime}</h2>
        </div>
        </div>
    </div>
  );
}




export default App;
