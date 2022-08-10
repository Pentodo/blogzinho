import styles from './Post.module.css';

const Post = ({ post }) => {
	console.log(post);

	return (
		<div className={styles.Post}>
			<h2>{post.title}</h2>
			<img src={post.img} alt='post' />
			<p>{post.content}</p>
			<p className={styles.by}>
				Por: <span>{post.createdBy}</span>
			</p>
		</div>
	);
};

export default Post;
