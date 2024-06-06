import React from 'react'
import { UserContext,ChannelContext } from '../../../AReactApp'
//old approach and multiple text context pass to component
export default function ComponentF() {
 
 return (<>
  <div>
<UserContext.Consumer>
{
    user=>{
        return(
            <ChannelContext.Consumer>
                {
                    channel=>{
                        return  <div>user context value is : {user }
                           <span> </span>and channel Context value is: {channel}</div>
                    }
                }
            </ChannelContext.Consumer>
        
        
      )
    }
}
</UserContext.Consumer>
  </div>
 
  
  </>
  )
}
