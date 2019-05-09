import React from 'react';

export default function(Component) {
    return class withAuth extends React.Component {
        
    renderProtectedPage() {
        const { isAuthenticated } = this.props.auth;

        if (isAuthenticated) {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>I am Secret Page </h1>
                        <p> Secret Content Here </p>
                    </BasePage>
                </BaseLayout>
            )

        } else {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1> You are not authenticated. Please login to access this page. </h1>
                    </BasePage>
                </BaseLayout>
            )   
        }
    }
       
        render() {
            return this.renderProtectedPage()
        }
    }
}