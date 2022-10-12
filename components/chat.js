import styles from './chat.module.css'

export default function Chat({message,color,text}){
  return(<><div style={{backgroundColor:`${color}`,color:text||'black'}} className={styles.chat}>
            <div style={{backgroundColor:`${color}`}} >
            {message}
            </div>
            <i style={{color:'lightgreen'}} class="bi-check2-all"></i>
        </div><br /></>)
}