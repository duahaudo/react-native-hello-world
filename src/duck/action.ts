const createSimpleAction = (type: string) => (params: any) => (dispatch: any, getState: any) => dispatch({type, params});

export const action = {
  VIEW_HOME: 'VIEW_HOME',
  VIEW_DETAIL: 'VIEW_DETAIL',
  VIEW_NOTE: 'VIEW_NOTE',
  VIEW_CRUD_NOTE: 'VIEW_CRUD_NOTE',

  ACTION_INIT_DATA: 'INIT_DATA',
  ACTION_SET_VIEW: 'SET_VIEW',
  ACTION_SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
  ACTION_SHOW_LOADDING: 'ACTION_SHOW_LOADDING',
  ACTION_NEW_NOTE: 'ACTION_NEW_NOTE',
  ACTION_DELETE_NOTE: 'ACTION_DELETE_NOTE',
  ACTION_OPEN_NOTE_MODAL: 'ACTION_OPEN_NOTE_MODAL',
  ACTION_CLOSE_NOTE_MODAL: 'ACTION_CLOSE_NOTE_MODAL',

  ACTION_SET_MODULE: 'ACTION_SET_MODULE'
}

export const moduleName = {
  HOME: 'Home',
  NOTE: "Note",
  CHAT: "Chat",
  USER: "Config"
}

export const setView = createSimpleAction(action.ACTION_SET_VIEW);
export const initData = createSimpleAction(action.ACTION_INIT_DATA);
export const setSelectedItem = createSimpleAction(action.ACTION_SET_SELECTED_ITEM);
export const showLoading = createSimpleAction(action.ACTION_SHOW_LOADDING);
export const newNote = createSimpleAction(action.ACTION_NEW_NOTE);
export const deleteNote = createSimpleAction(action.ACTION_DELETE_NOTE);
export const openNoteModal = createSimpleAction(action.ACTION_OPEN_NOTE_MODAL);
export const closeNoteModal = createSimpleAction(action.ACTION_CLOSE_NOTE_MODAL);

export const setModule = createSimpleAction(action.ACTION_SET_MODULE);