import React from 'react';

import styles from './HIWPage.module.css';

// Components
import Footer from '../../components/Footer/Footer'

export default function HIWPage() {
    return(
        <div className={ styles.mainContainer }>
            <section className={ styles.pageContainer }>
                <section className={ styles.header }>
                    <h1>How GitHub Jobs Works</h1>
                    <p>GitHub Jobs is a great place attract the best technical talent for
                         your company's open software development positions. Here's how:</p>
                </section>
                <section className={ styles.content }>
                    <div className={ styles.contentLeft }>
                        <img alt='screenshot' src='https://jobs.github.com/images/modules/faq/screenshot-editor.jpg' />
                        <h2>Create & preview your listing</h2>
                        <p>See exactly how your listing will look before you publish live. Before creating a listing,
                             you must login with your GitHub account and verify your email address.</p>
                    </div>
                    <div className={ styles.contentMiddle }>
                        <img alt='screenshot' src={require('../../images/Capturar.PNG')} />
                        <h2>Pay with a major credit card</h2>
                        <p>Invoicing available on request for bulk orders. 
                            Email jobs@github.com for more info. Sorry, no recruitment agencies.</p>
                    </div>
                    <div className={ styles.contentRight }>
                        <img alt='screenshot' src='https://jobs.github.com/images/modules/faq/screenshot-listing.jpg' />
                        <h2>Your listing goes live immediately</h2>
                        <p>Listings are live for 30 days. We’ll send you a receipt and a link to change the listing.</p>
                    </div>
                </section>
                <div></div>
                <section className={ styles.contact }>
                    <h3>Questions?</h3>
                    <p>Submit a request via 
                        <a target='blank' href='https://support.github.com/contact?tags=jobs-support'>our contact</a> 
                        form and let's talk</p>
                </section>
            </section>
            <Footer />
        </div>
    );
}