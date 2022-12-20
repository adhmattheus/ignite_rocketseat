import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/adhmattheus.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTIme}>
							<strong>Mattheus Adhonnay</strong>
							<time title="2022-15-12 08:00:10 " dataTime="2022-15-12 08:00:10"> Cerca de1h atrás</time>
						</div>

						<button title="Dletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>

			</div>
		</div>
	)
}