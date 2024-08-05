import cl from '../styles/Addfl.module.css'

const AddFolder = (props) => {
    return(<button className={cl.AddflBut} onClick={props.createFolder}>{props.children}</button>)
}
export default AddFolder