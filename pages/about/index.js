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

                    <TeamMemberDisplay teamMembers={teamMembers} />

                </div>

                <div className={`${styles.section} ${styles.marginBottom}`}>
                    <h1 className={styles.subTitle}>Our Mission</h1>

                    <p className={styles.text}>
                    Our mission at Community Connector is to provide basic necessities to anyone in need regardless of their race, gender, 
                    ethnicity, previous financial situation, or place of residence. Our goal is to work towards a world where every person 
                    has access to basic foodstuffs, medicine, and overall necessities. We hope to achieve this by providing these
                    necessities to those in need and by raising awareness of the issue. With your help, we can make a difference.
                    </p>

                </div>

            </main>
        </div>
    )
}


// don't know if this is the best way to do this, 
// but it works

// To modify the number of team members per row, 
// change the value of perRow
const TeamMemberDisplay = ({ teamMembers }) => {

    const perRow = 2

    let rows = []

    for (let i = 0; i < teamMembers.length; i+=perRow) {
        let cols = []

        for (let j = 0; j < perRow; j++) {
            cols.push(
                <TeamMemberCard
                key={i+j}
                name={teamMembers[i+j].name}
                position={teamMembers[i+j].position}
                imageSrc={teamMembers[i+j].imageSrc}
                description={teamMembers[i+j].description}
                />
            )
        }

        rows.push(cols)
        cols = []
    }

    return (
        <div className={styles.teamContainer}>
            {rows.map((row, index) => {
                return (
                    <div 
                    key={index}
                    className={styles.teamMemberRow}>
                        {row}
                    </div>
                )
            }
            )}
        </div>
    )
            

}

export default About
