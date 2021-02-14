import {Time, timeToNumber} from "./songs"

test('時間文字列変換: ゼロの場合', () => {
    expect(timeToNumber("0:00")).toBe(0);
});

test.each([
    ["1:00", 60],
    ["1:30", 90],
    ["10:20", 620],
])("時間文字列変換: 分のみ指定 %i", (input, expected) => {
    expect(timeToNumber(input as Time)).toBe(expected);
})

test.each([
    ["1:00:00", 3600],
    ["2:32:45", 9165],
])("時間文字列変換: 時間と分指定 %i", (input, expected) => {
    expect(timeToNumber(input as Time)).toBe(expected);
})


