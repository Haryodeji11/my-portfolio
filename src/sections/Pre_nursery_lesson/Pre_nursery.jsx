import React from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import '../../css/index.css';

const Pre_Nursery = () => {
    return ( 
        <>
        <Header />
        <Nav />
        <div className="Note_description">
            PRE-NURSERY ALL NOTES
        </div>
        <div className="paragaphs">
            Welcome to Greenbrave.com plese use the following links to access notes for free.<br/>

            All Notes are free to read. Do not foreget to share with your friends so they can all access educational materials for free through our webiste.

        </div>

        <div className="notes_links">
            <div className="notes_link">
                <Link to = ""></Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/threads/first-term-lesson-notes-for-pre-nursery-1-2.15/">FIRST TIME LESSON NOTE FOR NURSERY 1&2</Link>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Pre_Nursery;