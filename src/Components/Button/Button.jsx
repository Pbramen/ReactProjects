import styles from './Button.module.css'

function Button() { 
    const handleClick = (e) => e.target.textContent = "Ow";
    return (
        <button className={styles.button} onClick={(e)=>handleClick(e)}>Submit</button>
    )
}

export default Button;