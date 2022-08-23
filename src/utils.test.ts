import { isIterable } from './utils';
describe('utils', () => {
    describe('isIterable', () => {
        it('should return true if passed an object with an iterator ([1,2,3])', () => {
            expect(isIterable([1, 2, 3])).toBe(true);
        });
        it('should return true if passed an object with an iterator ("hello")', () => {
            expect(isIterable('hello')).toBe(true);
        });
        it('should return false if passed a non-iterable argument (1)', () => {
            expect(isIterable(1)).toBe(false);
        });
    });
});
