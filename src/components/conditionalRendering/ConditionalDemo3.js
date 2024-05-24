import React from 'react'

export default function ConditionalDemo3() {
const unreadMessages=["hello","hiii","good evening"];

// short Circuit    
return<>
<h1>hello saurabh</h1>
{unreadMessages.length>0 &&(
<h2>you have {unreadMessages.length} unread messages</h2>)}
</>

}
