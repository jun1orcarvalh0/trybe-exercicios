beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// ordem:
// beforeeach 1
// test 1
// aftereach 1
// beforeeach 1
// beforeeach 2
// test 2
// aftereach 2
// aftereach 1