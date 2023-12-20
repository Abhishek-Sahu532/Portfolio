import { Container, Row ,Col} from "react-bootstrap"
import logo from '../../assets/img/logo.svg'
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './Footer.css'


export const Footer =()=>{
    return(
        <footer className="footer">
<Container>
    <Row className='align-item-center'>
<Col sm={6}>
    <img src={logo} alt='' />
</Col>
<Col sm={6} className='text-center text-sm-end'>
<div className="social-links">
    <a href='/fdsa'><img src={navIcon1} alt='' /> </a>
    <a href ="/abc"><img src={navIcon2} alt='' /> </a>
    <a href ='/acb'><img src={navIcon3} alt='' /> </a>
</div>

</Col>
    </Row>
    <p className="text-center">Made with love by Abhishek</p>
</Container>
        </footer>
    )
}