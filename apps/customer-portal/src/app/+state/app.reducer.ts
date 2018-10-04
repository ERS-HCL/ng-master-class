import { AppAction, AppActionTypes } from './app.actions';

/**
 * Interface for the 'App' data used in
 *  - AppState, and
 *  - appReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AppState {
  // list: Entity[]; // list of App; analogous to a sql normalized table
  breeds: Map<string, any[]>;
  selectedId?: string; // which App record has been selected
  loaded: boolean; // has the App list been loaded
  error?: any; // last none error (if any)
}

export const initialState: AppState = {
  //  list: [],
  breeds: undefined,
  loaded: false
};

export function appReducer(
  state: AppState = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case AppActionTypes.AppLoaded: {
      state = {
        ...state,
        breeds: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
