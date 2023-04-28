import Logo from './img/logo.png'
import Arrow from './img/arrow.png'
function Nav(){
    return(
        <div className="nav">
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="#">For business</a>
                            </li>
                            <li>
                            <a href="#">Products
                                <img src={Arrow} alt="Arrow" />
                             </a>
                            </li>
                            <li>
                            <a href="#">
                                Resources
                                <img src={Arrow} alt="Arrow" />
                            </a>
                            
                            </li>
                            <li>
                                <a href="#">Store</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-btn">
                        <a href="#">Try for free</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav