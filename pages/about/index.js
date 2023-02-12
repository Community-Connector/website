import styles from './About.module.css'

import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard'

const About = () => {

    const teamMembers = [
        {
            name: "Aalyan Aamir",
            position: "Co-Founder",
            imageSrc: "https://warm-kashata-49ba24.netlify.app/img/aalyan.jpeg",
            description: "Add your description here."
        },
        {
            name: "Kumel Hasni",
            position: "Co-Founder",
            imageSrc: "https://warm-kashata-49ba24.netlify.app/img/kumel.png",
            description: "Add your description here."
        },
        {
            name: "Zack Ghanbari",
            position: "Co-Director of Technology",
            imageSrc: "https://warm-kashata-49ba24.netlify.app/img/zack.jpeg",
            description: "Add your description here."
        },
        {
            name: "Ali Rastegar",
            position: "Co-Director of Technology",
            imageSrc: "https://warm-kashata-49ba24.netlify.app/img/alir.jpeg",
            description: "Add your description here."
        }
    ]

    return (
        <div className="page aspect">
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

                    <div className={styles.teamContainer}>
                        {teamMembers.map((member, index) => {
                            return (
                                <TeamMemberCard
                                    key={index}
                                    name={member.name}
                                    position={member.position}
                                    imageSrc={member.imageSrc}
                                    description={member.description}
                                />
                            )
                        })}
                    </div>
                    
                </div>

            </main>
        </div>
    )
}

export default About
