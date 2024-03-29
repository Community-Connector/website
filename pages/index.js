import Head from 'next/head'

import styles from './Home.module.css'

import Community from '@/svgs/Community/Community'
import Questions from '@/svgs/Questions/Questions'

import { useRouter } from 'next/router'

import { faHandHoldingDollar, faHandshakeSimple, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState, useEffect } from 'react'

const Home = () => {

  const router = useRouter()
  
  const MONEY_STAT = 25000
  const FUNDRAISERS_STAT = 5
  const PEOPLE_STAT = 10000

  const [statNumbers, setStatNumbers] = useState({
    money: MONEY_STAT,
    fundraisers: FUNDRAISERS_STAT,
    people: PEOPLE_STAT
  })


  // create a function to change the numbers rapidly and smoothly
  // before the page loads, the numbers will be 0 and then they will change to the actual numbers
  // this will make the page look more dynamic
  const changeNumbers = () => {
    let money = 0
    let fundraisers = 0
    let people = 0

    const moneyInterval = setInterval(() => {
      money += 100
      setStatNumbers({
        money: money,
        fundraisers: fundraisers,
        people: people
      })
      if (money === MONEY_STAT) {
        clearInterval(moneyInterval)
      }
    }, 10)

    const fundraisersInterval = setInterval(() => {
      fundraisers += 1
      setStatNumbers({
        money: money,
        fundraisers: fundraisers,
        people: people
      })

      if (fundraisers === FUNDRAISERS_STAT) {
        clearInterval(fundraisersInterval)
      }
    }, 100)

    const peopleInterval = setInterval(() => {
      people += 50
      setStatNumbers({
        money: money,
        fundraisers: fundraisers,
        people: people
      })

      if (people === PEOPLE_STAT) {
        clearInterval(peopleInterval)
      }
    }, 10)
  }

  useEffect(() => {
    changeNumbers()
  }, [])


  return (
    <div className='page aspect flex'>
      <main >

        <div className={styles.heading}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Community Connector</h1>
            <h2 className={styles.subtitle}>Connecting community to start giving..</h2>

            <h3 className={styles.viewFundraiser} onClick={() => router.push("fundraiser")}  >View our current fundraiser 
              <span className={styles.arrowsSpan}>
                <svg id={styles.arrows} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
                </svg>
              </span>
            </h3>
          </div>

          <div className={styles.imageContainer}>
            <Community primaryColor="#EE6F1D" secondaryColor="#2c6d89" />
          </div>

        </div>

        <div className={styles.introduction}>

          <div className={styles.statisticsSection}>

            <div className={styles.statistic}>

              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="100%" width="100%" id={styles.iconColor}>
                  <path fill={styles.iconColor} d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/>
                </svg>
              </div>

              <div className={styles.info}>
                <h3 className={styles.number}>${statNumbers.money}{(statNumbers.money === MONEY_STAT) ? "+" : ""}</h3>
                <p className={styles.text}>Fundraised</p>
              </div>

            </div>

            <div className={styles.statistic}>

              <div className={styles.icon}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="100%" width="100%" id={styles.iconColor}>
                  <path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/>
                </svg>

              </div>

              <div className={styles.info}>
                <h3 className={styles.number}>{statNumbers.fundraisers}{(statNumbers.fundraisers === FUNDRAISERS_STAT) ? "+" : ""}</h3>
                <p className={styles.text}>Fundraisers organized</p>
              </div>

            </div>

            <div className={styles.statistic}>

              <div className={styles.icon}>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="100%" width="100%" id={styles.iconColor}>
                  <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/>
                </svg>

              </div>

              <div className={styles.info}>
                <h3 className={styles.number}>{statNumbers.people}{(statNumbers.people === PEOPLE_STAT) ? "+" : ""}</h3>
                <p className={styles.text}>People positively impacted</p>
              </div>


            </div>

          </div>
          <div className={styles.learnMoreSection}>
            <h3>What we do..</h3>

            <p>
              Our mission at Community Connector is to provide basic necessities to 
              anyone in need regardless of their race, gender, ethnicity, previous 
              financial situation, or place of residence. Our goal is to work towards 
              a world where every person has access to basic foodstuffs, medicine, and 
              overall necessities.
            </p>

          </div>

        </div>

        <div className={styles.moreAboutSection}>
          <div className={styles.moreAbout}>
            <div className={styles.moreAboutText}>

              <h3>More about Community Connector..</h3>

              <p>
                Community Connector was founded in the midst of the COVID-19 Pandemic by 2 
                high schoolers who saw the dire need of assistance for local families financially 
                struggling during the trying times. As need grew, Community Connector expanded their 
                grasp to the greater Bay Area, and then began to work with organizations such as the Zahra 
                Trust Fund and the Givelight Foundation to reach a greater number of people.
              </p>

            </div>

            <div className={styles.moreAboutImage}>
              <Questions primaryColor="#EE6F1D" />
            </div>


          </div>
        </div>

        <div className={styles.helpSection}>

          <h2>Take action...</h2>

          <div className={styles.helpCards}>
            <HelpCard
              title="Make a donation"
              description="Donate to our current fundraiser to help us continue our mission of providing basic necessities to those in need."
              icon={<FontAwesomeIcon icon={faHandHoldingDollar} size="3x" color="#EE6F1D" />}
            />

            <HelpCard
              title="Be Part of the Solution"
              description="Volunteer to help us with our fundraisers and other events. We are always looking for more people to help us!"
              icon={<FontAwesomeIcon icon={faHandshakeSimple} size="3x" color="#EE6F1D" />}
            />

            <HelpCard
              title="Spread the word"
              description="Help us spread the word about our mission and our fundraisers. The more people we can reach, the more we can help!"
              icon={<FontAwesomeIcon icon={faUserGroup} size="3x" color="#EE6F1D" />}
            />


          </div>

        </div>

      </main>


    </div>
  )
}

const HelpCard = ({ title, description, icon }) => {
  return (
    <div className={styles.helpCard}>
      <div className={styles.helpCardIcon}>
        {icon}
      </div>

      <div className={styles.helpCardText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}


export default Home
