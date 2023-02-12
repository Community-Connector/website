import styles from './About.module.css'

const About = () => {

    return (
        <div className="page">
            <main className={styles.container}>
                <div className={styles.section}>
                    <h1 className={styles.subTitle}>Who are we?</h1>

                    <p className={styles.text}>
                        Founded by Bay Area high school students during the peak of COVID-19, Community Connector is a non-profit organization 
                        that aims to to offset and provide assistance to struggling families in the community. Through Community Connector we 
                        have delivered groceries to people all around the Bay and have fundraised over $25k for global campaigns. We hope 
                        to continue our efforts with your help!
                    </p>

                </div>

                <div className={styles.section}>
                    <h1 className={styles.subTitle}>Meet our team</h1>

                    <p className={styles.text}>
                        Founded by Bay Area high school students during the peak of COVID-19, Community Connector is a non-profit organization 
                        that aims to to offset and provide assistance to struggling families in the community. Through Community Connector we 
                        have delivered groceries to people all around the Bay and have fundraised over $25k for global campaigns. We hope 
                        to continue our efforts with your help!
                    </p>

                </div>

            </main>
        </div>
    )
}

export default About
