import React from 'react';

import styles from './APIDocPage.module.css';

// Components
import Footer from '../../components/Footer/Footer'

export default function APIDocPage() {
    return(
        <div className={ styles.mainContainer }>
            <div className={ styles.pageContainer }>
                <section className={ styles.content }>
                    <h1>The GitHub Jobs API</h1>

                    <div className={ styles.topLine }></div>

                    <div className={ styles.contentTop }>
                        <p>The GitHub Jobs API allows you to search, and view jobs with JSON over HTTP.</p>

                        <p>To get the JSON representation of any search result or job listing, append .json 
                            to the URL you'd use on the HTML GitHub Jobs site.</p>

                        <p>For example, when searching for Python jobs near New York on the 
                            site I am taken to this url:</p>

                        <a href='https://jobs.github.com/positions?description=python&location=new+york'>https://jobs.github.com/positions?description=python&location=new+york</a>

                        <p>To get the JSON representation of those jobs I just use positions.json:</p>

                        <a href='https://jobs.github.com/positions.json?description=python&location=new+york'>https://jobs.github.com/positions.json?description=python&location=new+york</a>

                        <h2>Pagination</h2>

                        <p>The API also supports pagination. /positions.json, for example, will only return 50 
                            positions at a time. You can paginate results by adding a page parameter 
                            to your queries.</p>
                        
                        <p>Pagination starts by default at 0.</p>

                        <h3>Examples</h3>

                        <ul>
                            <li><a href='https://jobs.github.com/positions.json?description=ruby&page=1'>https://jobs.github.com/positions.json?description=ruby&page=1</a></li>
                            <li><a href='https://jobs.github.com/positions.json?page=1&search=code'>https://jobs.github.com/positions.json?page=1&search=code</a></li>
                        </ul>
                    </div>

                    <div className={ styles.line }></div>

                    <div className={ styles.contentMid }>
                        <h2>GET /positions.json</h2>

                        <p>Search for jobs by term, location, full time vs part time,
                            or any combination of the three. All parameters are optional.</p>

                        <h3>Parameters</h3>

                        <ul>
                            <li><span>description</span> — A search term, such as "ruby" or "java". This parameter is aliased to <span>search</span>.</li>
                            <li><span>location</span> — A city name, zip code, or other location search term.</li>
                            <li><span>lat</span> — A specific latitude. If used, you must also send long and must not send location.</li>
                            <li><span>long</span> — A specific longitude. If used, you must also send lat and must not send location.</li>
                            <li><span>full_time</span> — If you want to limit results to full time positions set this parameter to 'true'.</li>
                        </ul>

                        <h3>Examples</h3>

                        <ul>
                            <li><a href='https://jobs.github.com/positions.json?description=python&full_time=true&location=sf'>https://jobs.github.com/positions.json?description=python&full_time=true&location=sf</a></li>
                            <li><a href='https://jobs.github.com/positions.json?search=node'>https://jobs.github.com/positions.json?search=node</a></li>
                            <li><a href='https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823'>https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823</a></li>
                        </ul>
                    </div>

                    <div className={ styles.line }></div>

                    <div className={ styles.contentBot }>
                        <h2>GET /positions/ID.json</h2>

                        <p>Retrieve the JSON representation of a single job posting.</p>

                        <h3>Parameters</h3>

                        <ul>
                            <li><span>markdown</span> — Set to 'true' to get the description and how_to_apply fields as Markdown.</li>
                        </ul>

                        <h3>Examples</h3>

                        <ul>
                            <li><a href='https://jobs.github.com/positions/21516.json'>https://jobs.github.com/positions/21516.json</a></li>
                            <li><a href='https://jobs.github.com/positions/21516.json?markdown=true'>https://jobs.github.com/positions/21516.json?markdown=true</a></li>
                        </ul>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}