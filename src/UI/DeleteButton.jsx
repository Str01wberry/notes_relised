import cl from '../styles/DeleteButton.module.css'

function DeleteButton(props){
    return(
        <button className={cl.Button} onClick={()=>props.deleteQuickNote(props.id)}><span>{props.children}</span></button>
    )
}

export default DeleteButton