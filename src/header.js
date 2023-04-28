import Lun from './img/store.png'
import DWN from './img/download.png'
import AC from './img/Acolada.png'
import DL from './img/dolar.png'
function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-top">
                        <img src={Lun} alt="" />
                        <h1>Crawless Store — <br/> the shortest way to create your bots </h1>
                        <p>Browse ready-made tasks and workflows <br /> from the growing developers community around the world</p>
                    </div>
                    
                </div>
                <div className="top-element">
                    <div>
                        <img src={DWN} alt="" />
                        <a href="#">On-click install</a>
                    </div>
                    <div className='unic'>
                        <div></div>
                        <img src={DL} alt="" />
                        <a href="#">Privacy of your scrapped data</a>
                    </div>
                    <div>
                        <img src={AC} alt="" />
                        <a href="#">Version control system</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Header