import Navbar from "components/Navbars/navbar"
import Footersmall from "components/Footers/FooterSmall"
import AfghanFlyer from "public/img/afghan-flyer.jpeg"
import AustinStormRelief from "public/img/austin-storm-relief.png"
import SriLankaImg from "public/img/sri-lanka-sports-fund.jpg"
import CarePackageCampaign from "public/img/care-package-campaign.png"
import EidGiftCard from "public/img/eid-gift-card.jpg"
import Image from 'next/image'

function FundraiserListing({name, children, image, image_alt, alt = false}) {
    return (
        <div className={`flex flex-col md:${alt ? "flex-row" : "flex-row"} items-center py-6 justify-around ${alt ? 'bg-blueGray-100' : ''}`}>
            <div className="lg:w-1/2">
                <h3 className="text-4xl text-wrap text-center font-semibold">{name}</h3>
                <div className="block text-xl m-4 max-w-s">
                    {children}
                </div> 
            </div>
            <div className='relative m-2 md:m-0 text-center object-contain'>
                <Image
                    src={image}
                    alt={image_alt}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default function PreviousFundrasiers() {
    return (
        <>
            <Navbar fixed />

            <section>
                <div className="pt-12 pb-16 mb-5 bg-blueGray-200">
                    <h1 className="text-5xl text-center pt-2 pb-20 ">Previous Fundraisers</h1>
                </div>

                <FundraiserListing name="Afghanistan Relief Fund" image={AfghanFlyer} image_alt="Afghanistan Relief Flyer">
                    <p>
                        Provided food parcels that consisted of staple foods of the region including rice, wheat, and beans that sustained 1 family for an entire month.
                        Raised $14,000, and sent 1400 food parcels in the 1st quarter of 2022.
                    </p>
                </FundraiserListing>

                <FundraiserListing name="Austin Storm Relief" image={AustinStormRelief} image_alt="Austin Storm Relief Flyer" alt>
                    <p>
                        Raised $2500 in order to support victims in Austin that were hit hard by the Snow storms in February of 2021.
                        The money went towards helping families who had suffered damage to their homes.
                    </p>
                </FundraiserListing>

                <FundraiserListing name="Sri Lanka / Indonesia Sports Fund" image={SriLankaImg} image_alt="Sri Lanka Image">
                    <p>
                        Collected $2000 for sports equipment for orphanages in Sri Lanka and Indonesia in order for them to buy any sports equipment they needed.
                    </p>
                </FundraiserListing>

                <FundraiserListing name="Care Package Campaign" image={CarePackageCampaign} image_alt="Care Package Campaign" alt>
                    <p>
                        Collected $4000 to make care packages for the homeless in San Francisco. We were able to make about 450 care packages.
                    </p>
                </FundraiserListing>

                <FundraiserListing name="Eid Gift Card" image={EidGiftCard} image_alt="Eid Gift Card">
                    <p>
                        In celebration of Eid al-Fitr at the end of Ramadan, we collected $1000, to make 50 $20 gift cards and distributed them to Muslim families in Oakland. 
                    </p>
                </FundraiserListing>
            </section>

            <Footersmall />
        </>
    )
}