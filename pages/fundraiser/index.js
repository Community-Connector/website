import Image from 'next/image'
import Link from 'next/link'
import styles from './Fundraisers.module.css'
import BannerBackground from 'public/images/banner-background.jpg'
import FundraiserImage from 'public/images/fundraiser-image.jpg'

const Fundraiser = () => {
    return (
        <div className="page">
            <div className={styles.banner}>
                <Image src={BannerBackground} alt="Syria Relief Fund" className={styles.bannerBackground} />
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Syria Relief Fund</h1>
                    <p className={styles.bannerDescription}>Help us raise funds for the Syrian refugees in Lebanon.</p>
                </div>
            </div>

            <div className={`${styles.contentContainer} aspect`}>
                <div className={styles.textSection}>
                    <h2 className={styles.contentTitle}>Donate to the cause</h2>
                    <p className={styles.contentDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut
                    </p>

                    <Link href="https://example.com" target="_blank">
                        <button className={styles.button}>Donate</button>
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={FundraiserImage}
                        alt="Syria Relief Fund"
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    )
}

export default Fundraiser
