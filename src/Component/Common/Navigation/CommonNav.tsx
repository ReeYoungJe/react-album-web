import styles from './CommonNav.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import navJson from './nav.json'

interface Navigation {
	index: number
	path: string
	label: string
	searchValue: string
	isActive: boolean
}

function CommonNav() {

	const [navigation, setNavigation] = useState<Navigation[]>(navJson)
	//UseState 로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출

	const navLinks = navigation.map((item : Navigation) =>{
		return (
			<div className={styles.navigation}>
				<Link  to={item.path}  className={styles.navigation__menu} key={item.path}>
					<span className={styles.navigation__menu__label}>{item.label}</span>
				</Link>
			</div>
		);
	})

	return (
		<div className={styles.navigation}>
			{navLinks}
		</div>
	);
}

export default CommonNav;