import cl from '../styles/CreateFolderPage.module.css'

function SelectColour(props){
    return(<>
                
            <select className={cl.select} onChange={(e)=>{props.setColor(e.target.value)}}>
                <option  value={'none'}>none</option>
                <option  value={'green'}>green</option>
                <option  value={'brown'}>brown</option>
                <option  value={'red'}>red</option>
                <option  value={'orange'}>orange</option>
                <option  value={'black'}>black</option>
                <option  value={'aquamarine'}>aquamarine</option>
                <option  value={'purple'}>purple</option>
                <option  value={'blue'}>blue</option>
                <option  value={'blueviolet'}>blueviolet</option>cadetblue
                <option  value={'cadetblue'}>cadetblue</option>
                <option  value={'chocolate'}>chocolate</option>
                <option  value={'aqua'}>aqua</option>
            </select></>)
}
export default SelectColour