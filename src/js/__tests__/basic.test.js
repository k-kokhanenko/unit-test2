import status from '../basic';

test('getStatus check healthy', () => {
  const result = status({ name: 'Test', health: 90 });
  expect(result).toBe('healthy');
});

test('getStatus check critical', () => {
  const result = status({ name: 'Test', health: 10 });
  expect(result).toBe('critical');
});

test('getStatus check wounded', () => {
  const result = status({ name: 'Test', health: 45 });
  expect(result).toBe('wounded');
});
