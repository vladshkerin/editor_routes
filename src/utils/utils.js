// Generate ID string from 9 symbols
const getId = () => Math.random().toString(36).substr(2, 9);

// Fake data generator
const getPoints = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: getId(),
    content: `Точка маршрута ${k + 1}`,
    coordinateX: getRandomInt(0, 350),
    coordinateY: getRandomInt(0, 350),
  }));

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export { getId, getPoints, getRandomInt };
