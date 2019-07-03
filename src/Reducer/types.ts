export interface train {
  name: string,
}



export interface ItrainReducerState {
  trains: train[],
  loading: boolean,
  trainInfo: {
    route : []
  },
  loadingTrainInfo : boolean
}
