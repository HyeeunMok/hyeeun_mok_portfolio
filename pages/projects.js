import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes'

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
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link route={`/project/${post.id}`}>
                        <a style={{'fontSize': '20px'}}> {post.title} </a>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <BasePage>
                    <h1>I am Projects Page </h1>
                    <ul>
                        { this.renderPosts(posts) }
                    </ul>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Projects;