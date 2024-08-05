import Folder from "../UI/Folder";
import cl from '../styles/Folders.module.css'
const Folders = (props) =>{

    return(<div className={cl.Folders}>
                {props.folders.map(folder=><Folder key={folder.id} color={folder.color} deleteFolder={props.deleteFolder} setIsInFolder={props.setIsInFolder} setSd={props.setSd} id={folder.id} >{folder.name}</Folder>)}
    </div>)
}
//props.setInFolder(true); props.setSd(folder.id)
export default Folders