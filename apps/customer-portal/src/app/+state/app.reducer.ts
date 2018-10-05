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
  breeds?: Map<string, any[]>;
  breedImages?: string[]; // main breed images
  hasSubBreed?: boolean;
  subBreedImages?: string[]; // main breed images
  selectedId?: string; // which App record has been selected
  breedImagesLoaded: boolean;
  subBreedImagesLoaded: boolean;
  loaded: boolean; // has the App list been loaded
  error?: any; // last none error (if any)
}

export const initialState: AppState = {
  //  list: [],
  breeds: undefined,
  hasSubBreed: false,
  breedImages: undefined,
  subBreedImages: undefined,
  breedImagesLoaded: false,
  subBreedImagesLoaded: false,
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
    case AppActionTypes.HasSubBreeds: {
      state = {
        ...state,
        hasSubBreed: action.payload
      };
      break;
    }
    case AppActionTypes.BreedImagesLoaded: {
      state = {
        ...state,
        breedImages: action.payload,
        breedImagesLoaded: true
      };
      break;
    }
    case AppActionTypes.SubBreedImagesLoaded: {
      state = {
        ...state,
        subBreedImages: action.payload,
        subBreedImagesLoaded: true
      };
      break;
    }
    case AppActionTypes.AppLoadError: {
      state = {
        ...state,
        error: action.payload
      };
      break;
    }
  }
  return state;
}
