import { Header } from 'components/ui/header/Header'
import { MenuLinks } from 'components/ui/navBar/menuLinks/MenuLinks'
import { VideoElement } from 'components/ui/videoElement/VideoElement'
import { FC } from 'react'
import { ISideBarState } from 'types/content.interface'
import styles from './PromotionVideo.module.css'

const PromotionVideo: FC<ISideBarState> = ({ activeMenuItem }) => {
	return (
		<div>
			{/* @ts-ignore */}
			<Header />
			<div className={styles.dFlex}>
				{/* @ts-ignore */}
				<MenuLinks activeMenuItem={activeMenuItem} />
				<div className='container'>
					<VideoElement />
				</div>
			</div>
		</div>
	)
}
export { PromotionVideo }
