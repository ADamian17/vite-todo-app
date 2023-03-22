import { AppTypes } from './appTypes';

export const appReducer = (state: App.AppState, action: App.Action) => {
  switch (action.type) {
    case AppTypes.UPDATE_TODO:
      return state;
    default:
      return state;
  }
};
