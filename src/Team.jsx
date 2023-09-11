import { useState } from "react"

const teamStyle = {
    border:'2px solid red',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px'
}
export default function Team(){
    const [team,setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team +1;
        setTeam(newTeam);
    }
const handleReduce = () => {
    setTeam(team-1);
}
    

    return(
        <div style={teamStyle}>
        <h2>Player:{team}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>  Reduce</button>
        </div>
    )
}

