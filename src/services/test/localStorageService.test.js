import { getData, storeData } from '../localStorageService';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('getData', () => {
  it('should return null if missing localStorage', () => {
    const expected = getData('key');

    expect(expected).toBe(undefined);
  });

  it('should call getItem function of localStorage', () => { 
    getData('key');

    expect(localStorageMock.getItem).toBeCalled();
    expect(localStorageMock.getItem).toHaveBeenCalledWith('key');
  });
});

describe('storeData', () => {
  it('should return null if missing localStorage', () => {
    const expected = storeData('key');

    expect(expected).toBe(undefined);
  });

  it('should call SetItem function of localStorage', () => { 
    storeData('key', "value");

    expect(localStorageMock.setItem).toBeCalled();
  });
});