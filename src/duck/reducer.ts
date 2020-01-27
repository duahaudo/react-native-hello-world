import { combineReducers, Action } from "redux";
import { IState, INote, IPicture } from "./type"
import { action as constant, moduleName } from "./action"
import { findIndex, uniqueId } from "lodash"
import { saveAsyncStore } from "./helper"

interface IAction {
  type: string,
  params: any
}

const reducer = (state: IState = {

  timestamps: Date.now(),
  view: constant.VIEW_NOTE,
  module: moduleName.CAMERA,
  notes: [],
  pictures: [],
  crudModalOpen: false,
  selectedNote: null,
  loaded: false,
  showLoadingIndicator: false

}, action: IAction): IState => {
  switch (action.type) {
    case constant.ACTION_INIT_DATA: {
      // AsyncStorage.setItem("Sti_pictures", JSON.stringify([]))
      const { notes, pictures } = action.params
      console.log("Note", notes ? notes.length : 0)
      console.log("Picture", pictures ? pictures.length : 0)
      return {
        ...state,
        crudModalOpen: false,
        selectedNote: null,
        loaded: true,
        notes: notes ? [...notes] : [],
        pictures: pictures ? [...pictures] : []
      }
    }
    case constant.ACTION_SET_VIEW: {
      return {
        ...state,
        view: action.params
      }
    }
    case constant.ACTION_SHOW_LOADING_INDICATOR: {
      return {
        ...state,
        showLoadingIndicator: action.params
      }
    }
    case constant.ACTION_SET_MODULE: {
      // console.log(action.params)
      return {
        ...state,
        module: action.params,
        loaded: false
      }
    }
    case constant.ACTION_OPEN_NOTE_MODAL: {
      return {
        ...state,
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
      let { notes } = state;
      let idx: number = findIndex(notes, (item: INote) => item.id === newNote.id);
      if (idx > -1) {
        notes.splice(idx, 1, newNote)
      } else {
        notes.push(newNote)
      }

      saveAsyncStore("note", notes)

      return {
        ...state,
        crudModalOpen: false,
        notes
      }
    }
    case constant.ACTION_DELETE_NOTE: {
      const noteId: string = action.params;
      let idx: number = findIndex(state.notes, (item: INote) => item.id === noteId);
      state.notes.splice(idx, 1)
      saveAsyncStore("Sti_note", state.notes)
      return {
        ...state,
        timestamps: Date.now()
      }
    }
    case constant.ACTION_SAVE_PICTURE: {
      const { fileName, base64 } = action.params;
      state.pictures.push({
        id: fileName,
        base64
      })

      return { ...state }
    }

    case constant.ACTION_DELETE_PICTURE: {
      const pictureId: string = action.params;
      let idx: number = findIndex(state.pictures, (item: IPicture) => item.id === pictureId);
      state.pictures.splice(idx, 1)
      return {
        ...state,
        timestamps: Date.now()
      }
    }
  }

  return state;
}

export default combineReducers({
  reducer
})