import React from 'react';
import PeopleGrid from '../components/PeopleGrid.jsx'
import TopRow from '../components/TopRow.jsx';
const People = () => {
    return (
        <div>
        <h1>People</h1>
        <TopRow />
        <PeopleGrid />
        </div>

    )
}

export default People;