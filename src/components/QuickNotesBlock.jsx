import QuickNote from "../UI/QuickNote"
import Addqn from "./Addqn"
import cl from '../styles/QuickNotesBlock.module.css'

const QuickNotesBlock = (props) =>{

    return(<div className={cl.QuickNotesBlock}> 
        <div></div>
        <Addqn createQuickNote={props.createQuickNote}/>
        <div></div>
        {props.notesInQuickNotes.map(note=><QuickNote key={note.id} deleteQuickNote={props.deleteQuickNote} id={note.id} text={note.text}/>)} 
    </div>)
  
}

export default QuickNotesBlock