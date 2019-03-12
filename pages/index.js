import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

    static async getInitialProps() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            console.log(response.data);
        } catch(err) {
            console.error(err);
        }
        

        return {initialData: [1,2,3,4]};
    }

    constructor(props) {
        super(props);
        
        this.state = {
            title: 'I am Index Page'
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle = () => {
        this.setState({title: 'I am Updated Index page'});
    }

    render() {
        const { title } = this.state;
        const initialData = this.props.initialData;
        // const title = this.state.title;

        return (
            <BaseLayout>
                <h1 className='fromPage'>I am Index Page from Class Component</h1>
                <h2> { title } </h2>
                <button onClick={this.updateTitle}> Change Title </button>
            </BaseLayout>
        )
    }
}

export default Index;
