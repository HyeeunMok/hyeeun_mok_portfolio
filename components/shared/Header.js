import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        debugger;
        const title = this.props.title;
    
        return (
            <React.Fragment>
                <p>{ title }</p>
                {this.props.children}
                <Link href="/">
                    <a>HOME</a>
                </Link>

                <Link href="/about">
                    <a>ABOUT</a>
                </Link>

                <Link href="/projects">
                    <a>PROJECTS</a>
                </Link>

                <Link href="/blogs">
                    <a>BLOG</a>
                </Link>

                <Link href="/resume">
                    <a>RESUME</a>
                </Link>
            </React.Fragment>

        )
    }
}

export default Header;