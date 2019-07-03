import React from "react";
import {Input} from 'reactstrap'

interface Props {
    handelChange: any,
    onSubmit: any,
    onSubmitStation: any,
    stationCode: string
    sourcestation: string
    destination_station: string
}

interface State {}

class TrainForm extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <React.Fragment>


    <form id="1" onSubmit={this.props.onSubmit}>


      <div className="input-group">

        <input type="text" name="stationCode" className="form-control" id="validationTooltipUsername" value={this.props.stationCode} onChange={this.props.handelChange}  placeholder="Enter Station Code" aria-describedby="validationTooltipUsernamePrepend" required />
        <div className="input-group-prepend">
          <button className="btn btn-info">Search</button>
        </div>
        <div className="invalid-tooltip">
          Please enter valid station code
        </div>
      </div>
    </form>

    <p className="mt-3">Search By Station </p>
    <form id="2" onSubmit={this.props.onSubmitStation}>
        <div className="form-inline">
        <label className="mr-2">Source : </label>
        <Input type="text" name="sourcestation" value={this.props.sourcestation} onChange={this.props.handelChange} placeholder="Enter Station Code" className="mr-2" />
        <label className="mr-2">Destination : </label>
        <Input type="text" name="destination_station" value={this.props.destination_station} onChange={this.props.handelChange} placeholder="Enter Station Code" />
        <div className="input-group-prepend">
          <button className="btn btn-info rounded-0">Search</button>
        </div>
        </div>
    </form>
    </React.Fragment>
    );
  }
}

export default TrainForm;
