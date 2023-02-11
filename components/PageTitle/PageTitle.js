import styles from './PageTitle.module.css'

const PageTitle = ({ title }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <h1 className={styles.background}>{title}</h1>
        </div>
    )
}

export default PageTitle