import {
  formattedData,
  dateComparator,
  numberComparator,
  textComparator,
} from '../../lib/dataHelpers';

describe('dataHelpers', () => {
  test('formattedData', () => {
    const data = [
      { discovery_date: '2010-01-01T00:00:00.000', pha: 'n/a' },
      { discovery_date: '2022-01-02T00:00:00.000', pha: 'N' },
    ];
    const result = formattedData(data);
    expect(result[0].discovery_date).toBe('January 1, 2010');
    expect(result[0].pha).toBe('');
    expect(result[1].discovery_date).toBe('January 2, 2022');
    expect(result[1].pha).toBe('No');
  });

  test('dateComparator', () => {
    expect(
      dateComparator('2022-01-01T00:00:00.000', '2022-01-02T00:00:00.000')
    ).toBeLessThan(0);
    expect(
      dateComparator('2022-01-02T00:00:00.000', '2022-01-01T00:00:00.000')
    ).toBeGreaterThan(0);
    expect(
      dateComparator('2022-01-01T00:00:00.000', '2022-01-01T00:00:00.000')
    ).toBe(0);
    expect(dateComparator('2022-01-01T00:00:00.000', null)).toBe(1);
    expect(dateComparator(null, null)).toBe(0);
    expect(dateComparator(null, '2022-01-01T00:00:00.000')).toBe(-1);
  });

  test('numberComparator', () => {
    expect(numberComparator('1', '2')).toBeLessThan(0);
    expect(numberComparator('2', '1')).toBeGreaterThan(0);
    expect(numberComparator('1', '1')).toBe(0);
    expect(numberComparator('', '1')).toBe(-1);
    expect(numberComparator('1', '')).toBe(1);
  });

  test('textComparator', () => {
    expect(textComparator('a', 'b')).toBeLessThan(0);
    expect(textComparator('b', 'a')).toBeGreaterThan(0);
    expect(textComparator('a', 'a')).toBe(0);
    expect(textComparator('a', null)).toBe(1);
    expect(textComparator(null, null)).toBe(0);
    expect(textComparator(null, 'a')).toBe(-1);
  });
});
