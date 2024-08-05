import FoldersBlock from './FoldersBlock'
import cl from '../styles/Body.module.css'
import QuickNotesBlock from './QuickNotesBlock'


const Body = (props) =>{
    return(<div className={cl.Body}>           
        <QuickNotesBlock deleteQuickNote={props.deleteQuickNote} createQuickNote={props.createQuickNote} notesInQuickNotes={props.notesInQuickNotes} />
        <FoldersBlock deleteFolder={props.deleteFolder} setIsInFolder={props.setIsInFolder} setSd={props.setSd} folders={props.folders} createFolder={props.createFolder} />
    </div>)
}

export default Body