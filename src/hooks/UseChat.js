
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pusher from "pusher-js";

const UseChat=()=>{

    const[messages,setMessages]=useState(['2sas'])
    const[content,setContent]=useState('')
    const[receiver,setReceiver]=useState('sadek')

     useEffect(()=>
      {
    axios.get('http://localhost:4000')
    .then(res=>{
    
    })

    
    
    const pusher = new Pusher("b0ff63e2122eab6ada15", {
        cluster: "ap2",
      });
  
      const channel = pusher.subscribe("dal3oona");
      channel.bind("new-message-event", (data) => {
console.log(data);
setMessages(prevMessages => [...prevMessages, { content: data.content, to: data.to }]);
      
      });

         // Cleanup function to unsubscribe from Pusher
         return () => {
          channel.unbind_all();
          channel.unsubscribe();
      };

    },[])

    const sendMessage=()=>{
    axios.post('http://localhost:4000/new-message',{content,to:receiver})
    .then(res=>{
   
    })

}
return {messages,setMessages,content,setContent,sendMessage,receiver,setReceiver}

}

export default UseChat