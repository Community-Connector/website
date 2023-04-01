import Image from 'next/image'
import Link from 'next/link'
import styles from './Fundraisers.module.css'
import BannerBackground from 'public/images/banner-background.jpg'

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

            <div className={`${styles.contentContainer} ${styles.paddingTop} aspect`}>
                <div className={styles.textSection}>
                    {/* <h2 className={styles.contentTitle}>Donate to the cause</h2> */}
                    <p className={styles.contentDescription}>
                        On Monday morning, 6th February 2023, a powerful 7.8 magnitude earthquake struck. Thousands of people are still missing, believed to be trapped under rubble as rescue workers continue to search mounds of wreckage in cities and towns across the area to save them before it is too late.
                        <br /><br />
                        Nearly 10,000 have died in Syria with countless more injured. It is estimated that more than 6,400 buildings have been destroyed, and a staggering 5 million people are left homeless or displaced with no means to access food, clean water, shelter or other basic necessities.
                        <br /><br />
                    </p>
                </div>
                <div className={styles.statistics}>
                    <div className={styles.statistic}>
                        <h2><b>9,000+</b> People killed</h2>
                        <PersonFallingBurst />
                    </div>
                    <div className={styles.statistic}>
                        <h2><b>6,000+</b> Buildings destroyed</h2>
                        <BuildingX />
                    </div>
                    <div className={styles.statistic}>
                        <h2><b>5M+</b>&nbsp;People homeless &&nbsp;displaced</h2>
                        <PersonWalkingLuggage />
                    </div>
                </div>
            </div>

            <div className={`${styles.contentContainer} ${styles.noShadow} ${styles.paddingBottom} ${styles.flexColumn} ${styles.spaceBetween} aspect`}>
                <p className={`${styles.contentDescription} ${styles.lineHeight}`}>
                    Many of these families have already suffered through conflict, disaster, and chronic poverty and the effects of the earthquake will now leave thousands-if not millions-of families completely and utterly destitute.
                    <br /><br />
                    Whilst families struggle to come to terms with the loss of their loved ones and their homes, hospitals also struggle to cope with the enormous influx of casualties and urgently require resources.
                    <br /><br />
                    As the disaster unfolded, The Zahra Trust's local team mobilized to provide immediate support following a rapid needs assessment.
                    <br /><br />
                    And while all of the emergency aid has been done, with all the families surviving in temporary shelters with no schools and hospitals, it is important that we kickstart the rebuilding process. All of the money raised through this drive will be used to do exactly that in Aleppo.
                </p>

                <div className={styles.donateButton}>
                    <Link href="https://www.tinyurl.com/syria-fund" target='_blank'>
                        <button className={styles.button}>Donate</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const PersonFallingBurst = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 9.8c0 39-23.7 74-59.9 88.4C71.6 154.5 32 213 32 278.2V352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-73.8c0-10 1.6-19.8 4.5-29L261.1 497.4c9.6 14.8 29.4 19.1 44.3 9.5s19.1-29.4 9.5-44.3L222.6 320H224l80 0 38.4 51.2c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8l-43.2-57.6C341.3 263.1 327.1 256 312 256l-71.5 0-56.8-80.2-.2-.3c44.7-29 72.5-79 72.5-133.6l0-9.8zM96 80A48 48 0 1 0 0 80a48 48 0 1 0 96 0zM464 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 78.7-12.2c6.5-1 11.7-5.9 13.1-12.2s-1.1-13-6.5-16.7l-65.6-45.1L603 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L508.3 92.1l-29.4-74C476.4 12 470.6 8 464 8s-12.4 4-14.9 10.1l-29.4 74L343.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1-65.6 45.1c-5.4 3.7-8 10.3-6.5 16.7c.1 .3 .1 .6 .2 .8l19.4 0c20.1 0 39.2 7.5 53.8 20.8l18.4 2.9L383 265.3l36.2 48.3c2.1 2.8 3.9 5.7 5.5 8.6L464 286.1z"/>
        </svg>
    )
}

const BuildingX = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c15.1 0 28.5-6.9 37.3-17.8C340.4 462.2 320 417.5 320 368c0-54.7 24.9-103.5 64-135.8V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L518.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L473.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L496 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
        </svg>
    )
}

const PersonWalkingLuggage = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M432 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM347.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L505 232.7l-15.3-36.8C472.5 154.8 432.3 128 387.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L340.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM256 274.1c-7.7-4.4-17.4-1.8-21.9 5.9l-32 55.4L147.7 304c-15.3-8.8-34.9-3.6-43.7 11.7L40 426.6c-8.8 15.3-3.6 34.9 11.7 43.7l55.4 32c15.3 8.8 34.9 3.6 43.7-11.7l64-110.9c1.5-2.6 2.6-5.2 3.3-8L261.9 296c4.4-7.7 1.8-17.4-5.9-21.9z"/>
        </svg>
    )
}


export default Fundraiser
