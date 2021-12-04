import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Logo from './Component/img/image.png';
import Onlinebar from "./Component/Onlinebar";
import Sidebar from "./Component/Sidebar";
import Navigation from "./Component/Navigation";
import styles from './Home.module.css';

const Home = () => {
    
    const [news, setNews] = useState([]);
    const [online, setOnline] = useState([]);
    const [quotes, setQuotes] = useState([]);

    let generateQuote = (quotes) => {
        let randomNumber = Math.floor(Math.random() * 10);
        setQuotes([quotes[randomNumber]]);
    }

    useEffect(() => {
        const OPTIONS = {
            method: "POST",
            headers: {'Content-type': 'application/json'}
        }

        fetch('http://localhost:8081/api/news', OPTIONS)
            .then(res=>res.json())
            .then(json=>setNews(json))


        fetch('http://localhost:8081/api/online', OPTIONS)
            .then(res=>res.json())
            .then(json=>setOnline(json))

        fetch('http://localhost:8081/api/quotes', OPTIONS)
            .then(res=>res.json())
            .then(json=>generateQuote(json))
    }, [])


    return (
        <div id="container">

            <Navigation />

            <main className="main">
                <div className="main-container-1 main-float">
                    <div className="container-big">
                        <Sidebar status="page-not-active" content="grid_view" contentname="Dashboard"/>
                        <Sidebar status="page-active" content="home" contentname="Library"/>
                        <Link to="/Task"><Sidebar status="page-not-active" content="schedule" contentname="Task"/></Link>
                        <Link to="/Courses"><Sidebar status="page-not-active" content="storage" contentname="Courses"/></Link>
                        <Link to="/Private"><Sidebar status="page-not-active" content="library_add" contentname="Private"/></Link>
                    </div>

                    <div className="container-small">
                    </div>
                </div>
                <div className="main-container-2 main-float">
                    <div className="quote-container-header">
                        <h2 className="page-active page-spec-title">Quote of the day</h2>
                    </div>
                    <div className="quote-container-main">
                        <h3>
                                {quotes.map((q) => {
                                    return <i key={q.quote}>{q.quote}<br/></i>
                                })}
                        </h3>
                    </div>
                    <div className="news-container-header">
                        <h2 className="page-active page-spec-title">News & Updates</h2>
                    </div>
                    <div className="news-container-main">
                        {news.map((n) => {
                                return  <div key={n.fullname} className={styles.newscontainermainbox}>
                                            <div className={styles.circlenewsbox1}>
                                                <div className={styles.circleprofile}>
                                                    <img className={styles.circleprofileimg} src={Logo} alt="logo"/>
                                                </div>
                                            </div>
                                            <div className={styles.circlenewsbox2}>
                                                <div className={styles.circlenewsbox2first}>{n.date}</div>
                                                <div className={styles.circlenewsbox2second}>{n.news}</div>
                                            </div>
                                        </div>
                        })}
                    </div>
                </div>


                <div className="main-container-3 main-float">
                    <div className="online-container-header">
                        <h2 className="page-active page-spec-title">Who are online?</h2>
                    </div>

                    <div className="online-container-main">
                        {online.map((o) => {
                                    return <Onlinebar key={o.fullname} status={o.status} fullname={o.fullname} source={o.source}/>
                        })}
                    </div>

                </div>
            </main>

            <footer className="footer">

            </footer>
        </div>
    )
} 


export default Home
