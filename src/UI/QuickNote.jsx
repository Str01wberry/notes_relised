import cl from '../styles/QuickNote.module.css'
import DeleteButton from './DeleteButton'
const QuickNote = (props) =>{
    return(<div className={cl.Block}>
        <input readOnly={true} className={cl.QuickNote} value={props.text}></input>
        <DeleteButton id={props.id} deleteQuickNote={props.deleteQuickNote}>-</DeleteButton>

        </div>
    )
}

export default QuickNote