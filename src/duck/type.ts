export interface IState {
  timestamps: number,
  view: string,
  notes: INote[],
  crudModalOpen: boolean,
  selectedNote: INote,
  loaded: boolean,
  module: string
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