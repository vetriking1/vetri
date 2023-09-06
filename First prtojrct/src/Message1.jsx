import { useState } from "react";
function Message1(){
    const [click,setclick] = useState(false)
    function clickHandle(){
        setclick(!click)
    }
    return (<><button onClick={clickHandle}>comment</button>{click && (<div><h1>Comments</h1><textarea></textarea></div>)}</>)
}

export default Message1;