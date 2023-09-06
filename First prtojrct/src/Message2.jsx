import PropTypes from 'prop-types';
import { useState } from "react";
Message2.propTypes = {
    value: PropTypes.string,
    state: PropTypes.string,
    clickhandle:PropTypes.func
}


function Message2({value}){
    const [active,setactive] = useState('list-group-item')
    const [t,f] = useState(true)
    function clickHandle(){
        if (t){
      setactive('list-group-item active')
        }
      else{
        setactive('list-group-item')
      }
      f(!t)
    }
return(
    <ul  className="list-group">
        <li className={active} onClick={clickHandle}>{value}</li>
    </ul>);
}
export default Message2;

