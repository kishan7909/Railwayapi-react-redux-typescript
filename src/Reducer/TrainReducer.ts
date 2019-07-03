import { ItrainReducerState } from "./types";
import * as TrainActionTypes from '../Actions/ActionTypes'

const initialState: ItrainReducerState = {
  trains : [],
  loading: false,
  trainInfo: {
    route: []
  },
  loadingTrainInfo: false
}

export const TrainReducer = (state : ItrainReducerState  = initialState,action:any) => {
  switch (action.type) {
    case TrainActionTypes.REQUEST_GET_ALL_TRAINS:
        return {...state,loading:true,trains: []}
    case TrainActionTypes.REQUEST_GET_ALL_TRAINS_SUCCESS:
        return {...state,trains: action.trains,loading: false}
    case TrainActionTypes.REQUEST_GET_ALL_TRAINS_ERROR:
        return {...state,loading:false}

    case TrainActionTypes.REQUEST_GET_TRAIN :
        return {...state,loadingTrainInfo:true,trainInfo:{}}
    case TrainActionTypes.REQUEST_GET_TRAIN_SUCCESS :
        return {...state,trainInfo: action.train,loadingTrainInfo:false}
    case TrainActionTypes.REQUEST_GET_TRAIN_ERROR :
        return {...state,loadingTrainInfo:false}
    default:
        return state
  }
}
