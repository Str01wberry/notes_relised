import Folders from "./Folders"
import Addfl from "./Addfl"
import cl from '../styles/FoldersBlock.module.css'

const FoldersBlock = (props) =>{
    return(<div className={cl.FoldersBlock}>
            <Addfl createFolder={props.createFolder}/>
            <Folders deleteFolder={props.deleteFolder} setIsInFolder={props.setIsInFolder} setSd={props.setSd} folders={props.folders}/>
    </div>)
}

export default FoldersBlock