import { useState } from "react"
import { useImmer } from "use-immer";
import cl from '../styles/Addqn.module.css'

const Addqn = (props) =>{
    const [quickNoteText,setQuickNoteText] = useState('');
    return(<div className={cl.Block}> 
      <input className={cl.AddqnInput} value={quickNoteText} onChange={e=>{setQuickNoteText(e.target.value)}}></input>
      <button className={cl.AddqnBut} onClick={()=>props.createQuickNote(quickNoteText)}>+</button>
    </div>)
}

export default Addqn