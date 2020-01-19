import {combineReducers} from "redux";
import {IState, INote} from "./type"
import {action as constant, moduleName} from "./action"
import {findIndex, uniqueId} from "lodash"
import {AsyncStorage} from "react-native"

interface IAction {
  type: string,
  params: any
}

const reducer = (state: IState = {
  timestamps: Date.now(),
  view: constant.VIEW_NOTE,
  module: moduleName.HOME,
  notes: [],
  crudModalOpen: false,
  selectedNote: null,
  loaded: false
}, action: IAction): IState => {
  switch (action.type) {
    case constant.ACTION_INIT_DATA: {
      return {
        ...state,
        crudModalOpen: false,
        selectedNote: null,
        loaded: true,
        notes: [...action.params]
      }
    }
    case constant.ACTION_SET_VIEW: {
      return {...state,
        view: action.params
      }
    }
    case constant.ACTION_SET_MODULE: {
      console.log(action.params)
      return {...state,
        module: action.params
      }
    }
    case constant.ACTION_OPEN_NOTE_MODAL: {
      return {...state,
        crudModalOpen: true,
        selectedNote: action.params || {
          title: "",
          timestamp: Date.now(),
          content: "",
          id: uniqueId(`sti_note_${Date.now()}`)
        }
      }
    }
    case constant.ACTION_CLOSE_NOTE_MODAL: {
      const newNote: INote = action.params;
      let {notes} = state;
      let idx: number = findIndex(notes, (item: INote) => item.id === newNote.id);
      if (idx > -1) {
        notes.splice(idx, 1, newNote)
      } else {
        notes.push(newNote)
      }

      AsyncStorage.setItem("Sti_note", JSON.stringify(notes))

      return {...state,
        crudModalOpen: false,
        notes
      }
    }
    case constant.ACTION_DELETE_NOTE: {
      const noteId: string = action.params;
      let idx: number = findIndex(state.notes, (item: INote) => item.id === noteId);
      state.notes.splice(idx, 1)
      AsyncStorage.setItem("Sti_note", JSON.stringify(state.notes))
      return {...state,
        timestamps: Date.now()
      }
    }
  }

  return state;
}

export default combineReducers({
  reducer
})