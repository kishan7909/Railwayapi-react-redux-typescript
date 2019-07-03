import {combineReducers} from 'redux'
import { TrainReducer } from './TrainReducer';

export const rootReducers  = combineReducers({
  trains : TrainReducer
})
