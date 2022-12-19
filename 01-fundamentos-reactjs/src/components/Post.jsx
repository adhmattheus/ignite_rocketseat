import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import ptBR from 'date-fns/locale/pt-BR';
import { format } from "date-fns";



export function Post({ author, publishedAt }) {

	const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	})

	return (
		<article className={styles.post}>
			<header>

				<div className={styles.author}>

					<Avatar src={author.avatarUrl} />

					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>

				</div>

				<time title="" dataTime="2022-15-12 08:00:10">
					{publishedDateFormatted}
				</time>

			</header>


			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					placeholder="Deixe um comentário"
				/>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
			</div>

		</article>
	);
}
