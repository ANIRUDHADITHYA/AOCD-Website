import './HomeMainContent.css';
import {Link} from "react-router-dom";
import home1 from '../Images/home1.png';
import home2 from '../Images/home2.png';
import home3 from '../Images/home3.png';

function HomeMainContent () {
    return(
        <section className='home-main'>
        <div class="content-col">
            <p>
                Natural plant-based compounds provide a vast pool of inhibition with the ability of 
                being developed into clinical products. Various extracts, Secondary metabolites derived 
                from plants may be an excellent strategy for developing future effective, safe anti-obesity drugs. 
                In this database, we surveyed plant bioactive with anti-obesity potential targeting Pancreatic Lipase, 
                suppressing appetite and inhibiting the adipocyte differentiation.
            </p>
            <br/>
            <p>Presently, it comprises of 256 compounds wherein 100 compounds are acting against 
                Appetite Suppressant, 96 Compounds are found to inhibit Pancreatic Lipase and 60 compounds 
                played significant role in inhibiting adipogenesis. </p>
        </div>
        <div class="row">
            <div class="img-col">
                <img src={home1} alt='image1'/>
                <Link to='/compounds'><div class="layer"><h3>Pancreatic Lipase- 93 Compounds</h3></div></Link>
            </div>
            <div class="img-col">
                <img src={home2} alt='image2'/>
                <Link to='/compounds'><div class="layer"><h3>Appetite Suppression- 88 Compounds</h3></div></Link>
            </div>
            <div class="img-col">
                <img src={home3} alt='image3'/>
                <Link to='/compounds'><div class="layer"><h3>Adipogenesis- 49 Compounds</h3></div></Link>
            </div>
        </div>
        </section>
    )
}


export default HomeMainContent;
