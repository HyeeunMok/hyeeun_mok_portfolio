import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Projects extends React.Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err) {
            console.error(err);
        }

        return {posts: posts.splice(0, 10)};
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li key={post.title}> {post.title} </li>
            )
        })
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <h1>I am Projects Page </h1>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
            </BaseLayout>
        )
    }
}

export default Projects;