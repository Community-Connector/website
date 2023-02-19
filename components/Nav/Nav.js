import styles from './Nav.module.css'

import { useRouter } from 'next/router'

import { useState } from 'react'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {

    const [expanded, setExpanded] = useState(false)

    return (

        <nav className={styles.nav}>
            <div className={styles.firstNavSection}>
                <div className={styles.logoWrapper}>
                    <HandShakeSymbol scale={0.11} />
                </div>
                <div className={styles.titleWrapper}>
                    <NavTitle title="Community Connector" />
                </div>
            </div>

            <div>

                <NavList 
                expanded={expanded}
                items={[
                    { name: 'Fundraisers', link: '/fundraisers' },
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
                    <span className={styles.itemText}>{name}</span>
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

const HandShakeSymbol = ({ scale }) => {

    let width = 620 * scale
    let height = 344 * scale

    const router = useRouter()

    return (
        <svg 
        width={width} 
        height={height} 
        viewBox="0 0 620 344" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={ () => router.push('/') }
        >
            <g id="HandShake">
                <path className={styles.fill} id="Vector" d="M0 0V238L54 248.65L73.4113 250.968L77.6003 236L85 194L106.424 88L120 24L0 0ZM506 29.5C506.474 52.47 513.095 75.478 517.6 98C528.081 150.392 539.828 202.549 550 255L620 242V6L506 29.5ZM150 73C143.409 107.983 136.745 142.968 130.424 178C129.122 185.218 121.323 207.069 127.318 212.547C132.939 217.684 141.202 205.724 145 202.424C150.535 197.617 155.976 189.624 162.715 186.603C176.457 180.444 192.406 192.592 195 206C198.898 203.257 202.583 198.031 207.424 197.09C219.322 194.776 237.98 202.501 241.566 215.039C243.285 221.049 240.833 227.366 239 233C244.008 229.871 249.076 223.654 255 222.519C268.211 219.989 287.458 234.422 287.359 248C287.296 256.554 279.245 266.205 276 274C286.966 269.632 295.547 280.287 304 286.627C318.029 297.149 334.569 314.945 351 320.997C367.438 327.051 389.511 322.026 397 305C374.724 293.144 354.495 277.896 334 263.291C325.5 257 316 252.5 316 244C337.118 255.757 356.884 270.922 377 284.333C387.203 291.135 397.219 299.84 410 300.621C422.126 301.362 432.696 293.638 437.677 283C438.977 280.223 441.922 274.676 439.932 271.699C432.5 267 414.502 257.071 408 253C387.153 239.947 369 224.5 351 212L354 207H355C360.809 213.545 369.002 218.625 376 223.873C380.98 227.609 385.931 231.386 391 235C410.832 249.141 453.892 284.692 473.174 253C475.481 249.207 477.001 245.308 478 241C439.778 214.865 402.212 178.256 372.424 143C362.947 131.783 354.397 119.934 345.86 108C343.47 104.66 340.103 96.871 335.816 95.816C330.831 94.59 323.904 100.568 319 101.61C309.324 103.668 297.164 98.998 288 102.938C273.591 109.133 264.475 126.956 249.91 132.298C232.266 138.769 215.164 125.064 200 119C210.26 100.571 224.364 84.297 237.611 68C242.841 61.566 248.19 51.628 255.174 47.086C269.112 38.02 293.81 32.745 310 29C301.913 17.184 273.857 18.164 262 21.721C239.443 28.489 218.057 42.573 198 54.6C181.614 64.426 169.423 73 150 73ZM208 115V116C221.186 126.061 241.189 132.14 256 121.507C264.796 115.192 276.154 99.985 286.424 97.179C308.78 91.071 334.623 99.754 351 77H352L355 80V81C351.231 83.655 344.788 88.169 343.828 93C343.001 97.163 347.655 101.905 349.859 105C357.1 115.17 364.387 125.253 372.2 135C394.71 163.085 421.811 186.73 449 210.13C457.199 217.187 469.53 232.724 480 235.608C485.271 237.06 493.69 231.229 499 230C496.196 194.521 485.741 157.923 478.8 123C476.504 111.447 476.563 89.948 469.836 80.318C467.476 76.94 459.709 76.578 456 74.73C445.573 69.533 435.96 62.613 426 56.601C408.788 46.212 390.846 31.727 371 26.9C343.828 20.29 308.206 34.728 283 43.947C274.593 47.022 263.159 48.969 256.004 54.419C248.719 59.968 243.64 68.822 238.113 76L208 115Z"/>
                <path className={styles.fill} id="Vector_2" d="M120 51L111.2 96L94.8002 180L87 224L114 229L149 57L120 51Z"/>
                <path className={styles.fill} id="Vector_3" d="M503 58L473 64L480.197 100L497.001 187L506 237L530 232.999L537.357 229.686L535.8 217L530 187L512.211 99L503 58Z"/>
                <path className={styles.fill} id="Vector_4" d="M164 247C156.636 270.038 179.412 292.84 202 280C196.722 308.447 226.166 314.944 247 309C236.829 329.292 269.174 351.778 285.61 337.2C298.395 325.86 308.145 281.187 281 280.199C270.396 279.813 264.532 291.297 257 297C263.025 282.532 278.825 267.069 279.725 251C280.716 233.311 260.545 224.928 247 234.094C235.259 242.04 227.108 254.505 216 263C222.811 251.16 233.038 240.276 234.815 226C236.558 211.996 221.794 200.037 208 204.703C197.874 208.128 193.622 219.94 185 225C191.725 209.811 186.214 187.631 165 193.434C156.496 195.76 138.707 213.33 134.573 221.17C125.096 239.139 148.861 253.388 164 247Z" />
                <path className={styles.fill} id="Vector_5" d="M304 294C304.736 311.131 299.623 320.947 295 337C306.784 340.217 320.727 346.812 332.999 341.467C337.612 339.458 344.045 333.768 343.468 328.09C343.036 323.828 336.982 320.396 334 317.921C324.465 310.007 314.701 300.185 304 294Z" />
            </g>
        </svg>

    )
}




export default Nav 
export { NavPlaceholder };