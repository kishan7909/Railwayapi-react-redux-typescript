import {all,takeEvery,call,delay,put} from "redux-saga/effects";
import axios from 'axios'
import * as TrainActionTypes from '../Actions/ActionTypes'

export function* trainSagaWatcher() {
  yield all([
    takeEvery(TrainActionTypes.REQUEST_GET_ALL_TRAINS,GET_ALL_TRAIN_WORKER),
    takeEvery(TrainActionTypes.REQUEST_GET_TRAIN,GET_TRAIN_WORKER)
  ]);
}

function* GET_ALL_TRAIN_WORKER(action:any){
  try{
    const response = yield call(get_All_Trains,action.station)
    const {trains} = response.data
    console.log(response.data)
    yield delay(800)
    yield put({type : TrainActionTypes.REQUEST_GET_ALL_TRAINS_SUCCESS,trains})
  }catch(e){}
}

function* GET_TRAIN_WORKER(action:any){
  try{
    const response = yield call(get_Train,action.number)
    console.log(response.data)
    const train = response.data
    yield delay(800)
    yield put({type : TrainActionTypes.REQUEST_GET_TRAIN_SUCCESS,train})
  }catch(e){}
}

// =================== API Call ========================

const get_All_Trains = (station:any) => {
  return axios.get("https://api.railwayapi.com/v2/arrivals/station/"+station+"/hours/2/apikey/a1xdpaxxew/")
}

const get_Train = (number:number) => {
  return axios.get("https://api.railwayapi.com/v2/route/train/"+number+"/apikey/a1xdpaxxew/")
}
