import { useState } from "react"
import { useImmer } from "use-immer"
import cl from '../styles/FolderScreen.module.css'

const FolderScreen = (props) =>{
  const [value, setValue] = useState('')
  const n = props.notesInFolders.filter((el) => el.id == props.sd)

  let i = 0

  function findElement(){
    for(i; i < props.notesInFolders.length; i++){
      if(props.notesInFolders[i].id == props.sd) {
        return i;
      }
    }
  }
  let index = findElement()
    
    return(<div>
    <button className={cl.Back} onClick={()=>props.setIsInFolder(false)}>Back</button>
    <div className={cl.FolderScreen}>
        <div /*className="FSBlock"*/>
          <input className={cl.FolderScreenInput} onChange={e=>{setValue(e.target.value)}}></input>
          <div className={cl.FSButBlock}>
            <button className={cl.FolderScreenButton} onClick={()=>{props.AddNotesInFolder(value, index)}}>Add new note</button>   
          </div>
          <div>{n.map(note=>note.notes.map(e=><input value={e} readOnly={true} className={cl.QNInput}></input>))}</div>
        </div>
    </div>
    </div>)
}

export default FolderScreen
