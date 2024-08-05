import { useState } from "react";
import cl from '../styles/CreateFolderPage.module.css'
import SelectColour from "./SelectColour";

const CreateFolderPage = (props) =>{
    const [folderName, setFolderName] = useState('');
    const [color, setColor] = useState(' ')

    return(<div className={cl.CreateFolderPage}>
        <div className={cl.CFPBlock}>
            <p className={cl.block}> Crete your new folder</p>
            <div className={cl.block}><input className={cl.input} onChange={(e)=>{setFolderName(e.target.value)}} ></input></div>
            <div className={cl.block}>
                <SelectColour setColor={setColor}/>
            </div>
            <div className={cl.block}>
                <button className={cl.CFPBut} onClick={()=>{props.createFolder(folderName, color);  props.setIsCreate(false);}}>Confirm</button>
            </div>
        </div>
    </div>)
}

export default CreateFolderPage