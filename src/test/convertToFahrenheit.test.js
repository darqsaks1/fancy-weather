import {convertToFahrenheit} from '../js/main-block/current/formuls'
 
it('should reteurn number', () => {
    const value = convertToFahrenheit(0)
    expect(value).toBe(32)
  });
  