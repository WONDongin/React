import World from "./World"
import styles from "./Hello.module.css"
//return JPX 형식. 태그한개만 가능
const Hello = function() {
    return(<>
    <p className={styles.box}>Hello</p>
    <World />
    </> )
}
export default Hello;