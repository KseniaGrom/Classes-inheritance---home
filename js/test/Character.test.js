import Character from '../Character.js';

test('Короткое имя вызывает ошибку', () => {
  expect(() => new Character('А')).toThrow('Ошибка имени персонажа');
});

test('Длинное имя вызывает ошибку', () => {
  expect(() => new Character('ОченьДлинноеИмя')).toThrow('Ошибка имени персонажа');
});

test('Нестроковое имя', () => {
  expect(() => new Character(123, 'Bowman')).toThrow('Ошибка имени персонажа');
  expect(() => new Character(null, 'Bowman')).toThrow('Ошибка имени персонажа');
  expect(() => new Character(undefined, 'Bowman')).toThrow('Ошибка имени персонажа');
});

test('Создать Bowman с правильными характеристиками', () => {
  const character = new Character('Player', 'Bowman');
  const result = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
