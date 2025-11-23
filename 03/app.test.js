import randomNumber from './app';

describe('randomNumber', () => {
    test('returns 1 when range is 1 to 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });
});