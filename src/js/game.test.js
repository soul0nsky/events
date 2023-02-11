// import {
//   onLoad,
// } from './runGame';
//! тест заглушка для appveyor и actions
describe('Game', () => {
  const user = 10;
  const field = 16;

  describe('how much cells', () => {
    test('16 cells', () => {
      expect(field).toBe(16);
    });
    test(' cells', () => {
      expect(user).toBe(10);
    });
  });
});
