import React from 'react';
import './Peoples.css'

const Peoples = ({peoples, deletPeople})=>{
    const listPeoples = peoples.map((people,index)=>{
        return(
            <p key={index}>{index} - {people.name} -- {people.lastname} -- <button onClick={()=>{deletPeople(people.name, people.lastname)}}>Delete</button></p>
        )
    })
    return(
        <div>
            {listPeoples}
        </div>
    )
}

export default Peoples;