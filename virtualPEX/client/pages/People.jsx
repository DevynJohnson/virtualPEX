import React from 'react';
import PeopleGrid from '../components/PeopleGrid.jsx'
import TopRow from '../components/TopRow.jsx';
const People = () => {
    return (
        <div>
        <h1>Common Words</h1>
        <TopRow />
        <h1>People</h1>
        <PeopleGrid />
        </div>

    )
}

export default People;