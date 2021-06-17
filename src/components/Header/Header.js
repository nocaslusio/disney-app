import styles from './Header.module.css';
import Link from "next/link";

const Header  = ({}) => {

return(
<header className={styles.header}>
<Link href="/">
<div><img className= {styles.headerbackground} src={"../disneylogo.png"} /></div>
</Link>
</header>
)
}

export default Header;
