import {Link} from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer__container bd-container">
                <h1 className="footer__title">Sattha Prathueangyukan</h1>
                <p className="footer__description">I am pack and this is my personal website</p>

                <div className="footer__social">
                    <Link to="/" className="footer__link"><i className='bx bxl-linkedin-square' ></i></Link>
                    <Link to="/" className="footer__link"><i className='bx bxl-github' ></i></Link>
                </div>
                <p className="footer__copy">&#169; 2021 STPACK. All right reserved</p>

            </div>
        </footer>

            
        </>
    )
}

export default Footer
