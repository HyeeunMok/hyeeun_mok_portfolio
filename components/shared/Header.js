import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {
    render() {
        debugger;
        const title = this.props.title;
    
        return (
            <React.Fragment>
                <p>{ title }</p>
                {this.props.children}
                <p className='customClass'>I am styled P element</p>
                <p className='customClassFromFile'>I am styled P element</p>
                
                <Link href="/">
                    <a style={{'fontSize': '20px'}}> HOME </a>
                </Link>

                <Link href="/about">
                    <a> ABOUT </a>
                </Link>

                <Link href="/projects">
                    <a> PROJECTS </a>
                </Link>

                <Link href="/blogs">
                    <a> BLOG </a>
                </Link>

                <Link href="/resume">
                    <a> RESUME </a>
                </Link>
                <style jsx>
                {
                    `
                    a {
                        font-size: 20px;
                    };
                    .customClass {
                        color: red;
                    }
                    `
                }                
                </style>
            </React.Fragment>

        )
    }
}

export default Header;