import {combineReducers} from "redux";
import {IState} from "./type"
import {action as constant} from "./action"

interface IAction {
  type: string,
  params: any
}

const reducer = (state: IState = {
  timestamps: Date.now(),
  view: constant.VIEW_HOME

}, action: IAction): IState => {
  switch (action.type) {

  }

  return state;
}

export default combineReducers({
  reducer
})