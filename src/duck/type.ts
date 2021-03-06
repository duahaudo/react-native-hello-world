export interface IState {
  timestamps: number,
  view: string,
  notes: INote[],
  selectedNote: INote,
  loaded: boolean,
  module: string,
  pictures: IPicture[],
  showLoadingIndicator: boolean
}

export interface IPicture {
  id: string,
  base64: string
}

export interface IStoreState {
  reducer: IState
}

export interface INote {
  title: string,
  content: string,
  timestamp: number,
  id: string
}