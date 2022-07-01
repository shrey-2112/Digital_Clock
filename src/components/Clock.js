// import React from 'react'
import React, { useEffect,useState } from 'react'

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() =>{
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    }, 1000);
    }, []);
  return <div style={{color: "darkblue", fontSize: "80px", margin: "30vh"}}>{clockState}</div>
  
}

export default Clock;
 