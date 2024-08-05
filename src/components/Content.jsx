import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"
import CreateFolderPage from "./CreateFolderPage"
import FolderScreen from "./FolderScreen"
import cl from '../styles/Content.module.css'
import { useState } from "react"


const Content = (props) =>{
    const [isCreate, setIsCreate] = useState(false);
    const [isInFolder, setIsInFolder] = useState(false);
    const [sd, setSd] = useState(0);


    function createFolder(){
        setIsCreate(true)
    }

    return(<div className={cl.Content}>
        <Header />
        {isCreate ? <CreateFolderPage setIsCreate={setIsCreate} createFolder={props.createFolder}/> 
        : (isInFolder ? <FolderScreen AddNotesInFolder={props.AddNotesInFolder} notesInFolders={props.notesInFolders} sd={sd} setNotesInFolders={props.setNotesInFolders} setIsInFolder={setIsInFolder}/>
            :<Body deleteQuickNote={props.deleteQuickNote} deleteFolder={props.deleteFolder} setSd={setSd} folders={props.folders} createQuickNote={props.createQuickNote} setIsInFolder={setIsInFolder} notesInQuickNotes={props.notesInQuickNotes} createFolder={createFolder}/>)}
        <Footer />
    </div>)
}

export default Content 