import React from 'react'
import {Table} from 'reactstrap'
import TrainItemsList from './TrainItemsList';


const TrainList = (props:any) => {
    return (
    <React.Fragment>
        <Table striped bordered>
            <thead className="bg-info text-white">
                <tr><td>Train Number</td>
                <td>Name</td>
                <td>Arrival</td>
                <td>Depa</td>
                <td>Actual Arrival</td>
                <td>Actual Depa</td>
                <td>Delay Arrival</td>
                <td>Delay Depa</td></tr>
            </thead>
            <tbody>
                {props.trains.map((item:any,index:number )=> <TrainItemsList handleSearchTrain={props.handleSearchTrain} key={index} train={item} />)}
            </tbody>
        </Table>
    </React.Fragment>
    )
}

export default TrainList
