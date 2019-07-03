import * as TrainActionTypes from './ActionTypes'

export const REQUEST_GET_ALL_TRAIN = (station:any) => {
  return {
    type : TrainActionTypes.REQUEST_GET_ALL_TRAINS,
    station
  }
}

export const REQUEST_GET_TRAIN = (number:any) => {
  return {
    type : TrainActionTypes.REQUEST_GET_TRAIN,
    number
  }
}
