import { Image } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    // Destructuring object comming from LeagueDetail
    const { leagueBanner, leagueLogo } = props;

    // style LeagueDetail banner for own league
    const detailBanner = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6)),url(${leagueBanner})`
    }

    return (
        <div>
            {/* applied nested ternary operation */}
            {
                leagueLogo
                    ? <div>
                        {
                            leagueBanner != null
                                ? <div style={detailBanner} className="banner">
                                    <div>
                                        <Image id="banner-logo" src={leagueLogo} fluid />
                                    </div>
                                </div>
                                : <div id="optional-banner" className="banner">
                                    <div>
                                        <Image id="banner-logo" src={leagueLogo} fluid />
                                    </div>
                                </div>
                        }
                    </div>
                    : <div id="home-banner" className="banner">
                        <div>
                            <h3 id="banner-text">Dream Sports</h3>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Header;