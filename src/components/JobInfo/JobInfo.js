import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './JobInfo.module.css';

export default function JobInfo({
    jobName,
    jobInfo,
    howToApply,
    image,
    companyName,
    companyURL
}) {
    return(
        <div className={ styles.mainContainer }>
            <section className={ styles.infoContainer }>
                <section className={ styles.title }>
                    <h2>{ jobName }</h2>
                </section>

                <section className={ styles.content }>
                    <section className={ styles.leftContent }>
                        <ReactMarkdown 
                            source={jobInfo}
                            className={ styles.innerHtml }
                            unwrapDisallowed = { true }
                            linkTarget = {'_blank'}
                        />
                    </section>

                    <section className={ styles.rightContent }>
                        <div className={ styles.companyInfo }>
                            <h4>{ companyName }</h4>
                            <a href={ companyURL } target='blank'><img alt='company' src={ image } /></a>
                            <div></div>
                        </div>
                        <div className={ styles.htApply }>
                            <h3>How to apply</h3>
                            <ReactMarkdown
                                source={ howToApply }
                                className={ styles.innerHtml }
                                linkTarget = {'_blank'}
                            />
                        </div>
                    </section>
                </section>

            </section>
        </div>
    );
}