import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Resume extends React.Component {

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>I am Resume Page </h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Resume;