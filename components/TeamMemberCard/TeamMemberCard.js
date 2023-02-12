import styles from './TeamMemberCard.module.css'

const TeamMemberCard = ({ name, position, imageSrc, description }) => {
    return (
        <div className={styles.card}>
            
            <img src={imageSrc} alt={name} className={styles.image} />

            <h1 className={styles.name}>{name}</h1>
            <h2 className={styles.position}>{position}</h2>

            <p className={styles.description}>{description}</p>

        </div>
    )
}

export default TeamMemberCard