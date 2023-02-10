import styles from './Nav.module.css'

import { useRouter } from 'next/router'

import { useState } from 'react'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {

    const [expanded, setExpanded] = useState(false)

    return (

        <nav className={styles.nav}>
            <div className={styles.titleWrapper}>
                <NavTitle title="Community Connector" />
            </div>

            <div>

                <NavList 
                expanded={expanded}
                items={[
                    { name: 'Fundraisers', link: '/' },
                    { name: 'Previous Fundraisers', link: '/previous-fundraisers' },
                    { name: 'About', link: '/about' },
                    { name: 'Contact', link: '/contact' },
                ]}
                />

                <NavExpand expanded={expanded} setExpanded={setExpanded} />

            </div>
        </nav>

    )
}

const NavTitle = ({ title }) => {

    const router = useRouter()

    return (
        <h1 className={styles.title} onClick={ () => router.push('/') }>
            {title}
        </h1>
    )
}

const NavList = ({ items, expanded }) => {

    return (
        <ul 
        className={styles.list}
        style={{
            height: expanded ? 'auto' : '0',
        }}
        >
            {items.map((item, index) => (
                <NavItem key={index} name={item.name} link={item.link} />
            ))}
        </ul>
    )
}

const NavItem = ({ name, link }) => {
    
        return (
            <li className={styles.item}>
                <a href={link} className={styles.link}>
                    {name}
                </a>
            </li>
        )
}

const NavExpand = ({ expanded, setExpanded }) => {

    return (
        <div className={styles.expand} onClick={() => setExpanded( (expanded) => !expanded ) }>
            <FontAwesomeIcon icon={faBars} className={`${styles.expandIcon} ${expanded ? styles.rotate : ''}`}/>
        </div>
    )
}


// This is a placeholder component that is used to keep the layout consistent
const NavPlaceholder = () => {
    return (
        <div className={styles.placeholder} />
    )
}



export default Nav 
export { NavPlaceholder };