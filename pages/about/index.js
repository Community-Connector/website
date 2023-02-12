import styles from './About.module.css'

import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard'

const About = () => {

    const teamMembers = [
        {
            name: "Aalyan Aamir",
            position: "Co-Founder",
            imageSrc: "https://warm-kashata-49ba24.netlify.app/img/aalyan.jpeg",
            description: "Mountain biker and snowboarder who hopes to major in physics. Aalyan is motivated to help  anyone in need any way he can."
        },
        {
            name: "Kumel Hasni",
            position: "Co-Founder",
            imageSrc: "https://rekompile.org/_next/image?url=%2Fteam%2Fkumel%20hasni.png&w=1920&q=75",
            description: "Cybersecurity enthusiast who enjoys soccer, running, and reading. Kumel is driven to serve the community."
        },
        {
            name: "Zack Ghanbari",
            position: "Co-Director of Technology",
            imageSrc: "https://rekompile.org/_next/image?url=%2Fteam%2Fzackaria%20ghanbari.jpg&w=1920&q=75",
            description: "Future CS major who has pursued areas from robotics to web development. Zackaria has a passion for helping others."
        },
        {
            name: "Ali Rastegar",
            position: "Co-Director of Technology",
            imageSrc: "https://rekompile.org/_next/image?url=%2Fteam%2Fali%20rastegar.png&w=1920&q=75",
            description: " Ali Rastegar is the Co-Director of Technology, because he co-des everyday 😀"
        }
    ]

    return (
        <div className="page aspect">
            <main className={styles.container}>

                <div className={styles.section}>
                    <h1 className={styles.subTitle}>Who are we?</h1>

                    <p className={styles.text}>
                        Founded by Bay Area high school students during the peak of COVID-19, Community Connector is a non-profit organization 
                        that aims to offset and provide assistance to struggling families in the community. Through Community Connector we 
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
