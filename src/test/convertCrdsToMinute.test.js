import {convertCrdsToMinute} from '../js/main-block/map/convertMap'

  it('should reteurn nwumber', () => {
    const value = convertCrdsToMinute('234151')
    expect(value).toBe("234151 ° NaN'")
  });
  