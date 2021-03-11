import React, { useEffect, useState } from 'react';
import AllLeague from '../AllLeague/AllLeague';
import Header from '../Header/Header';

const Home = () => {
    const [league, setLeague] = useState([]);

    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    //fetch api for all leagues
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setLeague(data.leagues))
    }, [])
    const allLeagues = league.slice(0, 21);
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        allLeagues.map(leagues => <AllLeague leagues={leagues} key={leagues.idLeague}></AllLeague>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;