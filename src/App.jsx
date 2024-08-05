import Content from "./components/Content";
import { useState } from "react";
import { useImmer } from "use-immer";
import './styles/App.css';

const App = () =>{
    const [folders, setFolders] = useState([])//{name: 'folder', id: 0, color: ' '}
    const [notesInQuickNotes, setNotesInQuickNotes] = useImmer([{text:'Note1', id: 0}]);//{text:'Note1', id: 0}
    const [notesInFolders, setNotesInFolders] = useImmer([])//{id: 0, notes: ['00000', '0'], color: ' '}, {id: 1, notes: ['11111', '1'], color: 'green'}

    function createQuickNote(text){
        const id = Date.now();
        setNotesInQuickNotes([...notesInQuickNotes, {text: text, id: id}])
    }
    function deleteQuickNote(id){
        let qn = notesInQuickNotes.filter(qnote=>qnote.id !== id);
        setNotesInQuickNotes(qn)

    }
    function deleteFolder(id){
        let fl = folders.filter(folder=>folder.id !== id);
        setFolders(fl)
        deleteNoteInFolder(id)
    }
    function deleteNoteInFolder(id){
        let n = notesInFolders.filter(notes=>notes.id !== id);
        setNotesInFolders(n)
    }
    function createFolder(text, color){
        const id = Date.now();
        setFolders([...folders, {name: text, id: id, color: color}]);
        setNotesInFolders([...notesInFolders, {id: id, notes:[] }])
        
    }

    function AddNotesInFolder(value, index){
        setNotesInFolders(draft=>{draft[index].notes = [...draft[index].notes, value]})
    }
    return(
        <Content folders={folders} AddNotesInFolder={AddNotesInFolder} deleteQuickNote={deleteQuickNote} deleteFolder={deleteFolder} setFolders={setFolders} createFolder={createFolder} createQuickNote={createQuickNote} notesInQuickNotes={notesInQuickNotes} setNotesInFolders={setNotesInFolders} notesInFolders={notesInFolders}/>
    )
}

export default App