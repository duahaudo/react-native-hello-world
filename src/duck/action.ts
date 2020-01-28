import {saveFile, deleteFile, loadFile, lsDirectory, getAsyncStore, saveAsyncStore} from "./helper"
import {uniqueId} from "lodash"

const createSimpleAction = (type: string) => (params: any) => (dispatch: any, getState: any) => dispatch({type, params});

export const action = {
  VIEW_HOME: 'VIEW_HOME',
  VIEW_DETAIL: 'VIEW_DETAIL',
  VIEW_NOTE: 'VIEW_NOTE',
  VIEW_CAMERA: 'VIEW_CAMERA',
  VIEW_CRUD_NOTE: 'VIEW_CRUD_NOTE',

  ACTION_INIT_DATA: 'INIT_DATA',
  ACTION_SET_VIEW: 'SET_VIEW',
  ACTION_SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
  ACTION_NEW_NOTE: 'ACTION_NEW_NOTE',
  ACTION_DELETE_NOTE: 'ACTION_DELETE_NOTE',
  ACTION_OPEN_NOTE_MODAL: 'ACTION_OPEN_NOTE_MODAL',
  ACTION_SAVE_NEW_NOTE: 'ACTION_SAVE_NEW_NOTE',
  ACTION_SAVE_PICTURE: 'ACTION_SAVE_PICTURE',
  ACTION_DELETE_PICTURE: 'ACTION_DELETE_PICTURE',

  ACTION_SHOW_LOADING_INDICATOR: 'ACTION_SHOW_LOADING_INDICATOR',

  ACTION_SET_MODULE: 'ACTION_SET_MODULE'
}

export const moduleName = {
  HOME: 'Home',
  NOTE: "Note",
  CAMERA: "Pictures",
  CHAT: "Chat",
  USER: "Config"
}

export const setView = createSimpleAction(action.ACTION_SET_VIEW);
export const setSelectedItem = createSimpleAction(action.ACTION_SET_SELECTED_ITEM);
export const showLoading = createSimpleAction(action.ACTION_SHOW_LOADING_INDICATOR);
export const newNote = createSimpleAction(action.ACTION_NEW_NOTE);
export const deleteNote = createSimpleAction(action.ACTION_DELETE_NOTE);
export const openNoteModal = createSimpleAction(action.ACTION_OPEN_NOTE_MODAL);
export const saveNewNote = createSimpleAction(action.ACTION_SAVE_NEW_NOTE);
export const setModule = createSimpleAction(action.ACTION_SET_MODULE);

// export const initData = createSimpleAction(action.ACTION_INIT_DATA);

export const initData = () => async (dispatch: any) => {
  dispatch(showLoading(true))
  const files: string[] = await lsDirectory()
  
  // await saveAsyncStore("note", [])

  const notes = await getAsyncStore("note")
  const pictures = await Promise.all(files.map((file: string) => loadFile(file).then((base64: string) => ({
    id: file,
    base64
  }))))

  dispatch({
    type: action.ACTION_INIT_DATA,
    params: {pictures, notes}
  })
  dispatch(showLoading(false))
}

export const savePicture = (params: string) => (dispatch: any) => {
  const fileName = uniqueId(`Sti_files_${Date.now()}`)
  saveFile(fileName, params).then(() => {
    dispatch({
      type: action.ACTION_SAVE_PICTURE,
      params: {fileName, base64: params}
    })
  })
};

export const deletePicture = (params: string) => (dispatch: any) => {
  deleteFile(params ).then(() => {
    dispatch({
      type: action.ACTION_DELETE_PICTURE,
      params
    })
  }).catch(() => {})
};