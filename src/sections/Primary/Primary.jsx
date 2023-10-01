import React from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import '../../css/index.css';

const Primary = () => {
    return ( 
        <>
        <Header />
        <Nav />
        <div className="Note_description">
            PRIMARY ALL NOTES
        </div>
        <div className="paragaphs">
            Welcome to Greenbrave.com plese use the following links to access notes for free.<br/>

            All Notes are free to read. Do not foreget to share with your friends so they can all access educational materials for free through our webiste.

        </div>

        <div className="notes_links">
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-primary-1.9/">FIRST TIME LESSON NOTE FOR PRIMARY 1</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-primary-2.10/">FIRST TERM LESSON NOTE FOR PRIMARY 2</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-primary-3.11/">FIRST TERM LESSON NOTE FOR PRIMARY 3</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-primary-4.12/">FIRST TERM LESSON NOTE FOR PRIMARY 4</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-primary-5.13/">FIRST TERM LESSON NOTE FOR PRIMARY 5</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-primary-6.14/">FIRST TERM LESSON NOTE FOR PRIMARY 6</Link>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Primary;