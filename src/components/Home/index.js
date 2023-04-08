import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

const Home = () => {

    return (

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi,
                    <br />
                    I'm
                    <img src={LogoTitle} alt="developer" srcset="" />
                    Charan
                    <br />
                    Full Stack Java Developer
                </h1>
                <h2>
                    Java Developer / Learning Frontend /
                    <Link to="/contact" className='flat-botton'>CONTACT ME</Link> 
                </h2>
            </div>
        </div>
    );
}
export default Home;