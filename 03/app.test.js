import randomNumber from './app';

describe('randomNumber', () => {
    it('returns 1 when range is 1 to 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });

    it('throws error when arguments are not numbers', () => {
        expect(() => randomNumber('a', 5)).toThrow();
        expect(() => randomNumber(1, null)).toThrow();
        expect(() => randomNumber(undefined, 10)).toThrow();
    });

    it('throws error when min is grater than max', () => {
        expect(() => randomNumber(10, 5)).toThrow();
    });

    it('returns number widthin provided range', () => {
        const min = 2;
        const max = 10;
        const result = randomNumber(min, max);

        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    })
});