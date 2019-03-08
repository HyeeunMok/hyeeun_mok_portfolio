import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            title: 'I am Index Page'
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('constructor');
    }

    componentDidUpdate() {
        console.log('constructor');
    }

    componentWillUnmount() {
        console.log('constructor');
    }

    updateTitle() {
        this.setState({title: 'I am Updated Index page'});
    }

    render() {
        console.log('constructor');

        return (
            <BaseLayout>
                <h1 className='fromPage'>I am Index Page from Class Component</h1>
                <h2> { this.state.title} </h2>
                <button onClick={ () => this.updateTitle() }> Change Title </button>
            </BaseLayout>
        )
    }
}

export default Index;
