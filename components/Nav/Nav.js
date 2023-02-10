import styles from './Nav.module.css'

import { useRouter } from 'next/router'

const Nav = () => {

    return (

        <nav className={styles.nav}>
            <div className={styles.titleWrapper}>
                <NavTitle title="Community Connector" />
            </div>

            <div>

                <NavList items={[
                    { name: 'Fundraisers', link: '/' },
                    { name: 'Previous Fundraisers', link: '/previous-fundraisers' },
                    { name: 'About', link: '/about' },
                    { name: 'Contact', link: '/contact' },
                ]} />

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

const NavList = ({ items }) => {

    return (
        <ul className={styles.list}>
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

// This is a placeholder component that is used to keep the layout consistent
const NavPlaceholder = () => {
    return (
        <div className={styles.placeholder} />
    )
}



export default Nav 
export { NavPlaceholder };