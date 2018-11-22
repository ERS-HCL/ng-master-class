import { AppLoaded } from './app.actions';
import { AppState, Entity, initialState, appReducer } from './app.reducer';

describe('App Reducer', () => {
  const getAppId = it => it['id'];
  let createApp;

  beforeEach(() => {
    createApp = (dogList: string[]): Map<string, any[]> => {
      const temp: Map<string, any[]> = new Map<string, any[]>();
      dogList.map(dog => {
        temp.set(dog, []);
      });
      return temp;
    };
  });

  describe('valid App actions ', () => {
    it('should return set the list of known App', () => {
      const apps = createApp(['PRODUCT-AAA', 'PRODUCT-zzz']);
      const action = new AppLoaded(apps);
      const result: AppState = appReducer(initialState, action);
      //  const selId: string = getAppId(result);

      expect(result.loaded).toBe(true);
      // expect(result.breeds).isNot()
      // expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = appReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
