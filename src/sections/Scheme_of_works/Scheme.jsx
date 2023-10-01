import React from 'react';
import Header from '../../components/header';
import Nav from '../../components/nav';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import '../../css/index.css';

const Scheme = () => {
    return ( 
        <>
        <Header />
        <Nav />
        <div className="Note_description">
            SCHEME OF WORKS
        </div>
        <div className="paragaphs">
            Welcome to Greenbrave.com plese use the following links to access notes for free.<br/>

            All Notes are free to read. Do not foreget to share with your friends so they can all access educational materials for free through our webiste.

        </div>

        <div className="notes_links">
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/scheme-of-work-for-nursery-preschool.25/">SCHEME OF WORK FOR PRE-SCHOOL AND NURSERY</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/scheme-of-work-for-primary-schools.27/">SCHEME OF WORK FOR PRIMARY SCHOOL</Link>
            </div>
            <div className="notes_link">
                <Link to = "https://greenbrave.com/resources/scheme-of-work-for-nursery-preschool.25/">SCHEME OF WORK FOR SECONDARY SCHOOL</Link>
            </div>
        </div>

        <Footer />
        </>
     );
}
 
export default Scheme;