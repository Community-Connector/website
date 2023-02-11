import styles from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={styles.footer} >
            <p className={styles.text}>Copyright © 2023 Community Connector</p>
            <p className={`${styles.text} ${styles.alignRight}`}>Created by <em>ReKompile</em> for <em>Community Connector</em>. All rights reserved.</p>
        </footer>
    )

}

const FooterPlaceholder = () => {
    return (
        <div className={styles.placeholder} />
    )
}

export default Footer
export { FooterPlaceholder }