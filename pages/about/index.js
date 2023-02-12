import PageTitle from "@/components/PageTitle/PageTitle"

import styles from './About.module.css'

const About = () => {

    return (
        <div className="page">
            <PageTitle>About Us</PageTitle>

            <main className={styles.container}>

                <h1>Who are we?</h1>

            </main>
        </div>
    )
}

export default About
