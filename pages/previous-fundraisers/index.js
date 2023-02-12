import Image from "next/image"
import styles from './PreviousFundraisers.module.css'
import AfghanFlyer from "public/images/afghan-flyer.jpeg"
import AustinStormRelief from "public/images/austin-storm-relief.png"
import SriLankaImg from "public/images/sri-lanka-sports-fund.jpg"
import CarePackageCampaign from "public/images/care-package-campaign.png"
import EidGiftCard from "public/images/eid-gift-card.jpg"

const FundraiserListing = ({name, children, image, image_alt, alternate_row = false}) => {
    return (
        <div className={`${styles.fundraiserListing} ${alternate_row ? styles.fundraiserListingOdd : styles.fundraiserListingEven}`}>
            <div className={styles.fundraiserTextContainer}>
                <h3 className={styles.fundraiserTitle}>{name}</h3>
                <p className={styles.fundraiserDescription}>{children}</p>
            </div>
            <div className={styles.fundraiserImageContainer}>
                <Image
                    src={image}
                    alt={image_alt}
                    className={styles.fundraiserImage}
                />
            </div>
        </div>
    )
}

const PreviousFundraisers = () => {
    return (
        <div className="page">

            <div className={styles.introSection}>
                <h1 className={styles.subTitle}>Past Fundraisers</h1>

                <p className={styles.introText}>
                    Our non-profit organization was founded with the aim of supporting struggling families in the community
                    and making a positive impact during these challenging times. Here, you can learn about the various fundraising
                    initiatives that we have organized in the past and the impact they have had on our community. We are
                    proud of our efforts and would like to thank everyone who has supported us in our mission. Your generosity
                    has made a real difference in the lives of many and we couldn't have done it without you.
                </p>

            </div>

            <FundraiserListing name="Afghanistan Relief Fund" image={AfghanFlyer} image_alt="Afghanistan Relief Flyer">
                Provided food parcels that consisted of staple foods of the region including rice, wheat, and beans that sustained 1 family for an entire month.
                Raised $14,000, and sent 1400 food parcels in the 1st quarter of 2022.
            </FundraiserListing>

            <FundraiserListing name="Austin Storm Relief" image={AustinStormRelief} image_alt="Austin Storm Relief Flyer" alternate_row>
                Raised $2500 in order to support victims in Austin that were hit hard by the Snow storms in February of 2021.
                The money went towards helping families who had suffered damage to their homes.
            </FundraiserListing>

            <FundraiserListing name="Sri Lanka / Indonesia Sports Fund" image={SriLankaImg} image_alt="Sri Lanka Image">
                Collected $2000 for sports equipment for orphanages in Sri Lanka and Indonesia in order for them to buy any sports equipment they needed.
            </FundraiserListing>

            <FundraiserListing name="Care Package Campaign" image={CarePackageCampaign} image_alt="Care Package Campaign" alternate_row>
                Collected $4000 to make care packages for the homeless in San Francisco. We were able to make about 450 care packages.
            </FundraiserListing>

            <FundraiserListing name="Eid Gift Card" image={EidGiftCard} image_alt="Eid Gift Card">
                In celebration of Eid al-Fitr at the end of Ramadan, we collected $1000, to make 50 $20 gift cards and distributed them to Muslim families in Oakland. 
            </FundraiserListing>
        </div>
    )
}

export default PreviousFundraisers
