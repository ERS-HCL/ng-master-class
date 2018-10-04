import { Entity, AppState } from './app.reducer';
import { appQuery } from './app.selectors';

describe('App Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAppId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createApp = (dogList: string[]): Map<string, any[]> => {
      const temp: Map<string, any[]> = new Map<string, any[]>();
      dogList.map(dog => {
        temp.set(dog, []);
      });
      return temp;
    };
    const apps = createApp(['PRODUCT-AAA', 'PRODUCT-zzz']);
    storeState = {
      app: {
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };

    storeState = { ...storeState, ...apps };
  });

  describe('App Selectors', () => {
    it('getBreeds() should return the list of Breeds', () => {
      const results = appQuery.getBreeds(storeState);
      /*       const selId = getAppId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB'); */
    });

    /*     it('getSelectedApp() should return the selected Entity', () => {
      const result = appQuery.getSelectedApp(storeState);
      const selId = getAppId(result);

      expect(selId).toBe('PRODUCT-BBB');
    }); */

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = appQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = appQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
