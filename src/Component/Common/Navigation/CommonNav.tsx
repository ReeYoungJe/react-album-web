import styles from './CommonNav.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";

interface Navigation {
	index: number
	path: string
	label: string
	searchValue: string
	isActive: boolean
}

function CommonNav() {

	const [navigation, setNavigation] = useState<Navigation[]>([
		{
			index: 0,
			path: "/search/edit",
			label: "보도/편집 전용",
			searchValue: "edit",
			isActive: false
		},
		{
			index: 1,
			path: "/search/following",
			label: "팔로잉",
			searchValue: "following",
			isActive: false
		},
		{
			index: 2,
			path: "/search/photoPlus",
			label: "Unsplash Photo+",
			searchValue: "photo",
			isActive: false
		},
		{
			index: 3,
			path: "/search/oneColor",
			label: "단색",
			searchValue: "one color",
			isActive: false
		},
		{
			index: 4,
			path: "/search/3dRender",
			label: "3D 렌더링",
			searchValue: "3d rendering",
			isActive: false
		},
		{
			index: 5,
			path: "/search/nature",
			label: "자연",
			searchValue: "nature",
			isActive: false
		},
		{
			index: 6,
			path: "/search/texture",
			label: "텍스쳐 및 패턴",
			searchValue: "texture",
			isActive: false
		},
		{
			index: 7,
			path: "/search/interior",
			label: "인테리어",
			searchValue: "interior",
			isActive: false
		},
		{
			index: 8,
			path: "/search/film",
			label: "필름",
			searchValue: "film",
			isActive: false
		},
		{
			index: 9,
			path: "/search/experimental",
			label: "실험적인",
			searchValue: "experimental",
			isActive: false
		},
		{
			index: 10,
			path: "/search/travel",
			label: "여행",
			searchValue: "travel",
			isActive: false
		},
		{
			index: 11,
			path: "/search/sports",
			label: "스포츠",
			searchValue: "sports",
			isActive: false
		}
	])
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