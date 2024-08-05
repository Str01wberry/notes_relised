import cl from '../styles/Folder.module.css'
const Folder = (props) =>{
    return(<div className={cl.Block}>
            <button className={cl.Folder} style={{backgroundColor: props.color}} readOnly={true} onClick={()=>{props.setSd(props.id); props.setIsInFolder(true)}} >{props.children}</button>
            <button className={cl.Button} onClick={()=>props.deleteFolder(props.id)}>-</button>
    </div>)
}

export default Folder