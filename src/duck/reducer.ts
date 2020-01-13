import {combineReducers} from "redux";
import {IState, INote} from "./type"
import {action as constant} from "./action"
import {assign, findIndex} from "lodash"

interface IAction {
  type: string,
  params: any
}

const reducer = (state: IState = {
  timestamps: Date.now(),
  view: constant.VIEW_NOTE,
  notes: []

}, action: IAction): IState => {
  switch (action.type) {
    case constant.ACTION_SET_VIEW: {
      return {...state,
        view: action.params
      }
    }
    case constant.ACTION_NEW_NOTE: {
      const newNote: INote = action.params;
      let {notes} = state;
      let idx: number = findIndex(notes, (item: INote) => item.id === newNote.id);
      if (idx > -1) {
        notes.splice(idx, 1, newNote)
      } else {
        notes.push(newNote)
      }
      return {...state,
        notes
      }
    }
  }

  return state;
}

export default combineReducers({
  reducer
})