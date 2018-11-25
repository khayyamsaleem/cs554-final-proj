import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '~/components/Navbar'
import Favicon from '~/assets/favicon.ico'
import "~/styles/App.scss"

export default class App extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Client Connect</title>
                    <link rel="icon" type="image/ico" href={Favicon}></link>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                </Head>
                <div className="App">
                    <Navbar />
                    {this.props.children}
                </div>
            </>
        );
    }
}
