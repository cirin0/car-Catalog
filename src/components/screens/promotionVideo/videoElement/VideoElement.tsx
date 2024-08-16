import { usePlayer } from 'hooks/usePlayer'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { IoPause, IoPlay } from 'react-icons/io5'
import styles from '../PromotionVideo.module.css'
import videoPorsche from '/public/img/PromotionPorsche.mp4'
import prewPorsche from '/public/img/PromotionPorschePrew.jpg'

const VideoElement = () => {
	const {
		videoRef,
		toggleVideo,
		handleProgressClick,
		toggleFullscreen,
		videoTools,
		showControls,
		hideControls,
		handleMouseMove,
	} = usePlayer()
	return (
		<div
			onMouseMove={handleMouseMove}
			className={`${styles.wrapperVideo} ${
				videoTools.isFullscreen ? styles.fullscreenWrapper : ''
			}`}
			style={{ cursor: videoTools.showCursor ? 'auto' : 'none' }}
		>
			<video
				src={videoPorsche}
				ref={videoRef}
				className={`${styles.player} ${videoTools.isFullscreen ? styles.fullscreen : ''}`}
				onClick={toggleVideo}
				poster={prewPorsche}
				onPlay={hideControls}
				onPause={showControls}
				onDoubleClick={toggleFullscreen}
			/>
			<div
				className={`${styles.playerControlls} ${
					videoTools.showControls || !videoTools.isPlaying
						? styles.showControls
						: styles.hideControls
				} ${videoTools.isFullscreen ? styles.fullscreenControls : ''}`}
			>
				<button
					style={{ paddingLeft: '10px' }}
					className={styles.controlsButton}
					onClick={toggleVideo}
				>
					{videoTools.isPlaying ? <IoPause /> : <IoPlay />}
				</button>
				<div className={styles.progressBarPlayer} onClick={handleProgressClick}>
					<div
						className={styles.progressBar}
						style={{ width: `${videoTools.progress}%` }}
					></div>
				</div>
				<div className={styles.timeControls}>
					<p>
						{Math.floor(videoTools.currentTime / 60) +
							':' +
							('0' + Math.floor(videoTools.currentTime % 60)).slice(-2)}
					</p>
					<p>/</p>
					<p>
						{Math.floor(videoTools.videoTime / 60) +
							':' +
							('0' + Math.floor(videoTools.videoTime % 60)).slice(-2)}
					</p>
				</div>
				<button
					style={{ paddingRight: '10px' }}
					className={styles.controlsButton}
					onClick={toggleFullscreen}
				>
					<AiOutlineFullscreen />
				</button>
			</div>
		</div>
	)
}
export { VideoElement }
