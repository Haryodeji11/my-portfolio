import React from 'react';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import '../../css/index.css';

const Programming = () => {
    return ( 
        <>
        <Header />
        <Nav />
        <div className="Note_description">
            PROGRAMMING
        </div>
        <div className="paragaphs">
            Welcome to Greenbrave.com plese use the following links to access notes for free.<br/>

            All Notes are free to read. Do not foreget to share with your friends so they can all access educational materials for free through our webiste.

        </div>

        <div className="notes_links">
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/full-stack-web-development-building-dynamic-and-robust-applications-bootcamp.56/">Full Stack Web Development: Building Dynamic and Robust Applications(Bootcamp)</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/cybersecurity-100-books.59/">Cybersecurity 100+ Books </Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/comprehensive-c-programming-from-basics-to-advanced-with-interactive-compiler.57/">Comprehensive C++ Programming: From Basics to Advanced with Interactive Compiler </Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/the-ultimate-dark-web-anonymity-privacy-security-course.54/">The Ultimate Dark Web, Anonymity, Privacy & Security Course</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/abdul-baris-mastering-data-structures-algorithms-using-and-c.53/">Abdul Bari's "Mastering Data Structures & Algorithms using and C++</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/complete-deep-web-course.52/">Complete Deep Web Course</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/wp-rocket-premium.2/">WP Rocket - Premium</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/cgBQTDqS#WsCtPFZV9BBzs-mLKBGu9A">Java</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/ohRiELpY#wjvmJY3xKPLuFbbM6VxcQg">Javascript</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/AtYWCZjK#hLOTRFl7d2WLWdSjVkO14A">Nodejs</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/AtYWCZjK#hLOTRFl7d2WLWdSjVkO14A">Python</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/ptQimDjK#eZ69t5vpNXJe5rxKrw5wQA">React</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/5pQSiZLC#qgH93xIvrQGDfsihmzmdBQ">React Native</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/EkIEkRIS#z6UL4G2QckHBABR8p-xn">Redux</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://mega.nz/folder/ksYAXR5S#Oy9DapBfBrV2UyM_cksYhw">SQL</Link>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Programming;