import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';


interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}
export function Comment({ content, onDeleteComment }: CommentProps) {

	const [likeCount, setLikeCount] = useState(0);

	function handleDeletComment() {
		onDeleteComment(content)
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1;
		})
	}


	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/adhmattheus.png" alt=" " />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTIme}>
							<strong>Mattheus Adhonnay</strong>
							<time title="2022-15-12 08:00:10 " dateTime="2022-15-12 08:00:10"> Cerca de 1h atrás</time>
						</div>

						<button onClick={handleDeletComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>

			</div>
		</div>
	);
};