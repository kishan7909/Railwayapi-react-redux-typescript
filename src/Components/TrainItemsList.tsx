import React from 'react'

const TrainItemsList = (props : any) => {
    const {number,name,scharr,schdep,actarr,actdep,delayarr,delaydep} = props.train
    return (
        <tr>
            <td onClick={() => props.handleSearchTrain(number)} className="text-primary" style={{cursor: "pointer"}}>{number}</td>
            <td>{name}</td>
            <td>{scharr}</td>
            <td>{schdep}</td>
            <td>{actarr}</td>
            <td>{actdep}</td>
            <td>{delayarr}</td>
            <td>{delaydep}</td>
        </tr>
    )
}

export default TrainItemsList
