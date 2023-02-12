import styles from './Contact.module.css'

const Contact = () => {

    return (
        <div className="page aspect">
            
            <main className={styles.container}>
            
                <div className={styles.section}>
                    <h1 className={styles.subTitle}>Contact Us</h1>

                    <p className={styles.text}>
                        If you have any questions or concerns, please feel free to contact us. We will get back to you as soon as possible.
                    </p>

                    <ContactForm />

                </div>

                <div className={styles.section}>
                    <h1 className={styles.subTitle}>Connect With Us</h1>

                    <p className={styles.text}>
                        Keep up to date with our latest news and events by following us on social media.
                    </p>

                    <div className={styles.socials}>

                        <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img
                            className={styles.icon}
                            src='/images/social-media/facebook.png'
                            alt='Facebook'
                            width={70}
                            height={70} />
                        </a>

                        <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img
                            className={styles.icon}
                            src='/images/social-media/instagram.png'
                            alt='Instagram'
                            width={70}
                            height={70} />
                        </a>
                        
                        <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <img
                            className={styles.icon}
                            src='/images/social-media/linkedin.png'
                            alt='LinkedIn'
                            width={70}
                            height={70} />
                        </a>

                    </div>

                </div>

            </main>

        </div>
    )
}

const ContactForm = () => {
    return (
        <form className={styles.form}>

            <div className={styles.formGroup}>
                <label 
                htmlFor="name" 
                className={styles.label}>Name</label>

                <input 
                type="text" 
                name="name" 
                id="name" 
                className={styles.input} 
                placeholder="Enter full name" />
            </div>

            <div className={styles.formGroup}>
                <label 
                htmlFor="email" 
                className={styles.label}>Email Address</label>

                <input 
                type="email" 
                name="email" 
                id="email" 
                className={styles.input} 
                placeholder="Enter email" />
            </div>

            <div className={styles.formGroup}>
                <label 
                htmlFor="message" 
                className={styles.label}>Message</label>

                <textarea 
                name="message" 
                id="message" 
                className={styles.textarea} 
                rows="5"
                placeholder="Enter message" />
            </div>

            <button 
            type="submit" 
            className={styles.button}>Submit</button>

        </form>
    )
}


export default Contact