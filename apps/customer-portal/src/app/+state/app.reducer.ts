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
  cart?: ShoppingCart;
  loaded: boolean; // has the App list been loaded
  error?: any; // last none error (if any)
}

export interface ShoppingCart {
  id?: string; // cart id
  lineItems?: LineItem[]; // cart line items
}

/**
 * cart line item details
 */
export interface LineItem {
  id?: string; // line item id
  productName: string; // product name
  unitPrice?: string; // product variant unit price
  qty?: number;
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

const uuid = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
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
    case AppActionTypes.CreateCart: {
      state = {
        ...state,
        cart: {
          id: uuid(),
          lineItems: []
        }
      };
      break;
    }
    case AppActionTypes.CreateCart: {
      state = {
        ...state,
        cart: {
          id: uuid(),
          lineItems: []
        }
      };
      break;
    }
    case AppActionTypes.AddCartItem: {
      state = {
        ...state,
        cart: {
          lineItems: [...state.cart.lineItems, action.payload]
        }
      };
      break;
    }
    case AppActionTypes.UpdateCartItem: {
      state = Object.assign({}, state, {
        ...state,
        cart: {
          lineItems:
            state.cart.lineItems !== undefined
              ? state.cart.lineItems.map(lineItem => {
                  return lineItem.id === action.payload
                    ? Object.assign({}, lineItem, action.payload)
                    : lineItem;
                })
              : state
        }
      });
    }
  }
  return state;
}
