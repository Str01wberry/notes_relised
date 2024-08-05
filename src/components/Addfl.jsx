import cl from '../styles/Addfl.module.css'
import AddFolder from '../UI/AddFolder'

const Addfl = (props) =>{
    return(<div className={cl.Addfl}>
            <AddFolder createFolder={props.createFolder}>+</AddFolder>
    </div>)
}

export default Addfl