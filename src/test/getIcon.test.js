import {getIcon} from '../js/main-block/current/icon'; 

  it('should reteurn drizzle', () => {
  const value = getIcon(353)
    expect(value).toBe('drizzle.svg')
  });

  it('should reteurn clear', () => {
    const value = getIcon(800)
      expect(value).toBe('clear-day.svg')
    });