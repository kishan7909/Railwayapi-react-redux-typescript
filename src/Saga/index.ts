import {all} from "redux-saga/effects";
import { trainSagaWatcher } from "./TrainSaga";

export function* rootSaga() {
  yield all([trainSagaWatcher()]);
}
