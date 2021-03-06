import React from 'react';
import CommentSection from '../CommentSection /CommentSection';
import Like from './Like';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: props.post.likes
		};
	}
	likeCounter = () => {
		let likes = this.state.likes + 1;
		this.setState({ likes });
		console.log('likeCounter');
	};
	render() {
		return (
			<div>
				<PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
				<div>
					<img src={this.props.post.imageUrl} alt="#" />
				</div>
				<CommentSection postId={this.props.post.imageUrl} comments={this.props.post.comments} />
				<Like likeCounter={this.likeCounter} likes={this.state.likes} />
			</div>
		);
	}
}
Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string
	})
};

export default Post;
