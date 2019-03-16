import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Project extends React.Component {

    static async getInitialProps({query}) {
        const projectId = query.id;
        let project = {};

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${projectId}`);
            project = response.data;

        } catch(err) {
            console.error(err);
        }

        return {project};
    }

    render() {
        const { project } = this.props;

        return (
            <BaseLayout>
                <h1> {project.title} </h1>
                <p> BODY: {project.body} </p>
                <p> ID: {project.id} </p>
            </BaseLayout>
        )
    }
}

export default withRouter(Project);