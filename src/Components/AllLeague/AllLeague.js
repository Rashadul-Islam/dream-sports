import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './AllLeague.css';

const AllLeague = (props) => {
    //object destructuring
    const { idLeague, strLeague, strSport } = props.leagues;

    //setting state
    const [logo, setLogo] = useState({});

    //fetching api and set dependency
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(response => response.json())
            .then(data => setLogo(data.leagues[0]))
    }, [idLeague])
    //destructuring object
    const { strBadge } = logo;

    return (
        <div className="d-flex justify-content-center col m-3">
            <Card id="cardStyle" style={{ width: '18rem', backgroundColor: 'tomato' }}>
                <Card.Img id='logo' variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sports type: {strSport}
                    </Card.Text>
                    <Link to={`/leagues/${idLeague}`}>
                        <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllLeague;