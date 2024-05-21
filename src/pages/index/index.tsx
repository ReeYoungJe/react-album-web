import CommonHeader from "@/Component/Common/Header/CommonHeader.tsx";
import CommonSearchBar from "@/Component/Common/SearchBar/CommonSearchBar.tsx";
import CommonNav from "@/Component/Common/Navigation/CommonNav.tsx";
import CommonFooter from "@/Component/Common/Footer/CommonFooter.tsx";
import Card from "@pages/index/components/Card.tsx";

// CSS
import styles from './styles/index.module.scss';
import {useEffect} from "react";

function Index() {
	const getData =  async  ()=>{
		const API_URL = 'https://api.unsplash.com/search/photos'
		const API_KEY = 'TCUMH201dau3LQ80QTOPInw8VqjqFTUsDnA776J5410'
		const PER_PAGE = '30'

		const searchValue = 'korea'
		const pageValue = 100

		try{
			const res = await axios.get(`${API_URL}?query=${searchValue}&client_id${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
			console.log(res)
		}catch(error){

		}
		useEffect()
	}
	return (
		<div className={styles.page}>
			{/* 공통 헤더 UI 부분 */}
			<CommonHeader/>
			{/* 공통 네비게이션 UI 부분 */}
			<CommonNav/>
			<div className={styles.page__contents}>
				<div className={styles.page__contents__introBox}>
					<div className={styles.wrapper}>
						<span className={styles.wrapper__title}>PhotoSplash</span>
						<span className={styles.wrapper__desc}>
                            인터넷의 시각 자료 출처입니다. <br/>
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
						{/* 검색창 UI 부분 */}
						<CommonSearchBar/>
					</div>
				</div>
				<div className={styles.page__contents__imageBox}>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			{/* 공통 푸터 UI 부분 */}
			<CommonFooter/>
		</div>
	);
}

export default Index;


