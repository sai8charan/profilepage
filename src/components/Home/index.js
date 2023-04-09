import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a','i',' ', 'C','h','a','r','a','n'];
    const jobArray = ['F','u','l','l', ' ', 'S','t','a','c','k',' ','J','a','v','a',' ','D','e','v','e','l','o','p','e','r'];
 
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" srcset="" />
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray}
                                     idx={15} />
                   <br/>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={24} />
                    <br />
                    <br/>
                </h1>
                <h2>
                    Java Developer / Learning Frontend /
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link> 
                </h2>
            </div>
        </div>
    );
}
export default Home;