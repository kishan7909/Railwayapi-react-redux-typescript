import React from "react";
import TrainForm from "../Components/TrainForm";
import TrainList from "../Components/TrainList";
import {Row,Col,Container, Table} from 'reactstrap'
import {connect} from 'react-redux'
import { REQUEST_GET_ALL_TRAIN, REQUEST_GET_TRAIN } from "../Actions/action";
import Modal from "../helper/Modal";

interface Props {
    getAllTrains : any,
    getTrain: any,
    trains: [],
    loading: boolean,
    train: any,
    loadingTrainInfo : boolean
}

interface State {
    stationCode:string,
    isModal:boolean,
    destination_station:string,
    sourcestation:string,

}

class Home extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {
        stationCode:'',
        isModal: false,
        sourcestation : '',
        destination_station: ''
    };
  }
  handelChange = ({target:{name,value}}:any) => {
      let newState:any = this.state
      newState[name] = value
      this.setState({...newState})
  }
  onSubmit = (e:any) => {
      e.preventDefault()
      this.props.getAllTrains(this.state.stationCode)
  }

  onSubmitStation = (e:any) => {
      e.preventDefault()
      console.log(this.state.sourcestation,this.state.destination_station)
  }

  toggle = () => {
      this.setState({isModal : !this.state.isModal})
  }
  handleSearchTrain = (number:any) => {
      console.log(number)
      this.props.getTrain(number)
       this.toggle()
  }
  render() {
      const {trains,loading,loadingTrainInfo,train} = this.props
        const trainInfo = {...train['train']}

            const modalBody = (
      <React.Fragment>
        <p>Train Name :  <span className="text-muted">{ trainInfo.number }</span></p>
        <p>Name : <span className="text-muted">{ trainInfo.name }</span></p>

        <div className="loader">
                { loadingTrainInfo && <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
        </div>

        <div className={loadingTrainInfo ? "loading-spnner" : ""}>
            <Table responsive bordered>
                <thead className="bg-info text-white">
                <tr>
                    <td>Station No</td>
                    <td>Name</td>
                    <td>Arrival</td>
                    <td>Depa</td>
                </tr>
                </thead>
                <tbody>
                {!loadingTrainInfo && this.props.train.route.map((item:any,index:number) => <tr key={index}>
                    <td>{item.no}</td>
                    <td>{item.station.name}</td>
                    <td>{item.scharr}</td>
                    <td>{item.schdep}</td>
                </tr>)}
                </tbody>
            </Table>
       </div>
      </React.Fragment>
      )
    return (
    <React.Fragment>
        <Container>

            <Modal header="Train Information" toggle={this.toggle} size="lg" isOpen={this.state.isModal} body={modalBody} />
            <div className="loader">
                { loading && <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
            </div>
            <Row>
                <Col md="12">
                    <h3 className="mt-5 mb-3">Search Train</h3>
                    <TrainForm onSubmit={this.onSubmit} stationCode={this.state.stationCode} handelChange={this.handelChange} destination_station={this.state.destination_station} sourcestation={this.state.sourcestation} onSubmitStation={this.onSubmitStation} />
                </Col>
                <Col md="12 mt-5">
            <div className={loading ? "loading-spnner" : ""}>
                    <TrainList trains={trains} handleSearchTrain={this.handleSearchTrain}/>
            </div>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state:any) => ({
    trains : state.trains.trains,
    loading : state.trains.loading,
    train: state.trains.trainInfo,
    loadingTrainInfo: state.trains.loadingTrainInfo
})

const mapDispatchToProps = (dispatch:any) => ({
    getAllTrains: (station: any) => {
        const action = REQUEST_GET_ALL_TRAIN(station)
        dispatch(action)
    },
    getTrain : (number:number) => {
        const action = REQUEST_GET_TRAIN(number)
        dispatch(action)
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);
