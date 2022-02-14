import './Footer.css';
import {Link} from "react-router-dom";

function Footer(){
    return(
        <section className="footer-container">
            <div className="footer-row">
                <div class="footer-col">
                    <h1>AOMDB</h1>
                    <p>An extensive Repository unveiling the Plant Based Compounds targeting obesity by 
                        providing intricate information about various insiico parameters all at once</p>
                </div>
                <div class="footer-col">
                    <h1>Contact Us</h1>
                    <p>P. Lavanya, M. Tech, Research Scholar,<br/>
                        Sri Ramachandra Institute of Higher Education and Research (DU)<br/>
                        Porur, Chennai – 600 116,<br/>Tamil Nadu, India.
                        <br/>Email Me: lavanyap@sriramachandra.edu.in</p>
                </div>
            </div>
            <div className='footer-row'><Link className='cpy-ryt' to='/'>© 2022 Copyright: www.AOPMDB.in</Link></div>
        </section>
    )
}


export default Footer;