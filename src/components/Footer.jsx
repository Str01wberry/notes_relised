import cl from '../styles/Footer.module.css'

const Footer = () =>{
    return(<div className={cl.Footer}>
          <a className={cl.Contacts} href=''>Facebook</a>
          <a className={cl.Contacts} href=''>Instagram</a>
          <a className={cl.Contacts} href=''>Telegram</a>
          <a className={cl.Contacts} href=''>About us</a>
    </div>)
}

export default Footer