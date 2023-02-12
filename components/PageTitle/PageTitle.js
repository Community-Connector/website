import styles from './PageTitle.module.css'

const PageTitle = ({ children }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{children}</h1>
            <h1 className={styles.background}>{children}</h1>
        </div>
    )
}

export default PageTitle