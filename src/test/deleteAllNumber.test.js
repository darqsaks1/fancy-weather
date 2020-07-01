import { deleteAllNumbers } from '../js/main-block/current/formuls'

  it('should return d', () => {
    const value = deleteAllNumbers('1463d643--4')
    expect(value).toBe('day')
  });
  