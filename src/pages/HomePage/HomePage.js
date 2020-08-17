import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../Store';

// Styles
import styles from './HomePage.module.css';

// Components
import { Pagination } from '@material-ui/lab'
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// API
import API from '../../API';
import JobCard from '../../components/JobCard/JobCard';
import JobInfo from '../../components/JobInfo/JobInfo';

export default function HomePage() {

    const searchResponse = useSelector(state => state.params);
    const selectJobResponse = useSelector(state => state.id);
    
    const[jobState, setJobState] = useState([]);
    const[selectedJobState, setSelectedJobState] = useState('');
    const[page, setPage] = useState(1);
    const[pageTitle, setPageTitle] = useState('Featured Jobs');

    useEffect(() => {
        API.get(`positions/${selectJobResponse.id}.json?markdown=true`)
            .then((res) => {setSelectedJobState(res.data);
        console.log(res.data)});   
    }, [selectJobResponse]);

    useEffect(() => {
        setSelectedJobState('');
        setPage(1);
        API.get(`positions.json?description=${searchResponse.description}&location=${searchResponse.location}&full_time=${searchResponse.full_time}&page=${searchResponse.page}`)
            .then((res) => {setJobState(res.data)
                console.log(res)
            }
        );
    }, [searchResponse])

    useEffect(() => {
        setSelectedJobState('');
        API.get(`positions.json?description=${searchResponse.description}&location=${searchResponse.location}&full_time=${searchResponse.full_time}&page=${page}`)
            .then((res) => {setJobState(res.data)
                console.log(res)
            }
        );
    }, [searchResponse, page])

    console.log(jobState)

    function handlePagination(value) {
        window.scroll(0, 0);
        if(value===0) {
            setPage(page + 1)
        } 
        else if(page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {
        if( jobState.length === 0 ) {
            setPageTitle('Nothing Found');
        } else {
            setPageTitle('Featured Jobs');
        }
    }, [jobState]);

    const viewJobCard = jobState.map(cur =>
        <div key={ cur.id } className={ styles.jobCardContainer }>
            <JobCard 
                jobTitle={cur.title}
                company={cur.company}
                fullTime={cur.type}
                location={cur.location}
                date={cur.created_at}
                id={cur.id}
            />
        </div>
    )

    const viewJobInfo = (
        <ScrollAnimation
            animateIn='fadeInUp'
            animateOut='fadeOutDown'
            delay={1}
            animateOnce={true}
        >
            <div className={ styles.jobInfo }>
                <JobInfo
                    jobName = { selectedJobState.title }
                    jobInfo = { selectedJobState.description }
                    howToApply = { selectedJobState.how_to_apply }
                    companyName = { selectedJobState.company }
                    companyURL = { selectedJobState.company_url }
                    image = { selectedJobState.company_logo }
                />
            </div>
        </ScrollAnimation>
                        )

    const closeButton = (
        <ScrollAnimation
            animateIn='rotateIn'
            animateOut='rotateOut'
            delay={1}
            animateOnce={true}
        >
            <div className={ styles.buttonContainer }>
                <button onClick={() => setSelectedJobState('')}></button>
            </div>
        </ScrollAnimation>
    )

    const advancePage =(
        <div className={ styles.paginateButton }>
            <button onClick={ () => handlePagination(0) }>More Awesome Jobs</button>
        </div>
    );

    const returnPage =(
        <div className={ styles.paginateButton }>
            <button onClick={ () => handlePagination(1) }>Back</button>
        </div>
    );

    return(
        <div className={ styles.mainContainer }>
            <div className={ styles.insideContainer }>
                <SearchBar />
                <section className={ styles.pageContainer }>
                    <div>
                        <section className={ styles.headerContainer }>
                            {TitleComponent(pageTitle)}
                        </section>
                        <section className={ styles.contentContainer }>
                            {selectedJobState===''?null:closeButton}
                            {selectedJobState===''?null:viewJobInfo}
                            {viewJobCard}
                        </section>
                        {page>1?returnPage:null}
                        {jobState.length===0?null:advancePage}
                    </div>
                    <Footer />
                </section>
            </div>    
        </div>
    );
}