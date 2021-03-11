import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import Male from '../Image/male.png';
import FeMale from '../Image/female.png';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag,faFutbol,faVenus,faMars,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';

const LeagueDetails = () => {

    //destructuring route parameter
    const { leagueId } = useParams();
    const [details, setDetails] = useState({});

    //fetch api for league details and setting the dependency
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(response => response.json())
            .then(data => setDetails(data.leagues[0]))
    }, [leagueId])
    //destructuring object for getting all the info
    const { strLeague, dateFirstEvent, strCountry, strSport, strGender, strBanner, strBadge,strDescriptionFR,strDescriptionEN } = details;

    //setting condition for image changing according to gender
    const image = strGender === "Male" ? Male:FeMale;

    //condition for icon changing according to gender
    const icon=strGender==="Male"?<FontAwesomeIcon icon={faMars} />:<FontAwesomeIcon icon={faVenus} />;

    return (
        <div>
            <div>
                <Header leagueLogo={strBadge} leagueBanner={strBanner}></Header>
            </div>
            <div id='details-container' className="row">
                <div id='details-text' className="col-md-7">
                    <h5>{strLeague}</h5>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {dateFirstEvent}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}</p>
                    <p>{icon} Gender: {strGender}</p>
                </div>
                <div className='col'>
                   <img  id='gender-img' src={image} alt=""/>
                </div>
            </div>
            <div id='description-container'>
                <p>{strDescriptionEN}</p>
                <br/>
                <p>{strDescriptionFR}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LeagueDetails;