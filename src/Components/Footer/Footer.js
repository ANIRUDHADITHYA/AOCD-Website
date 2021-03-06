import './Footer.css';
import {Link} from "react-router-dom";



function Footer(){

const handleClick = () =>{
    window.scroll({top:0, behavior: 'smooth'})
}

    return(
        <section className="footer-container">
            <div className="footer-row">
                <div class="footer-col">
                    <h1>AOCD</h1>
                    <p>An extensive Repository unveiling Natural Compounds isolated from Plants, Microbes 
                        and Marine targeting obesity by providing intricate information about various 
                        insiico parameters and also its biological activity all at once</p>
                </div>
                <div class="footer-col">
                    <h1>Contact Us</h1>
                    <p>P. Lavanya, M. Tech,<br></br> Research Scholar,<br/>
                        Sri Ramachandra Institute of Higher Education and Research (DU)<br/>
                        Porur, Chennai – 600 116,<br/>Tamil Nadu, India.
                        <br/>lavanyap@sriramachandra.edu.in</p>
                </div>
            </div>
            <div className='footer-row'><Link onClick={handleClick} className='cpy-ryt' to='/'>© 2022 Copyright: www.AOCD.co.in</Link></div>
        </section>
    )
}


export default Footer;