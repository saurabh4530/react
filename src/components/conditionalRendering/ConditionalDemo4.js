import React from 'react'

export default function ConditionalDemo4() {
let daynumber=new Date().getDay()

switch (daynumber) {
    case 1:
        
        return <h3>today is monday and day is {daynumber}  </h3>;
    case 2:
        
        return <h3>today is tuesday and day is {daynumber}  </h3>;
    case 3:
        
        return <h3>today is wed and day is {daynumber}  </h3>;
    case 4:
        
        return <h3>today is thu and day is {daynumber}  </h3>;
    case 5:
        
        return <h3>today is fri and day is {daynumber}  </h3>;
    case 6:
        
        return <h3>today is sat and day is {daynumber}  </h3>;
    case 7:
        
        return <h3>today is sunday and day is {daynumber}  </h3>;
    

    default:
        break;
}
}
