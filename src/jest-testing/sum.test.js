import {sum} from "./sum";

test('1 + 2 equals to 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('Object assignment', () => {
    let data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2});
});