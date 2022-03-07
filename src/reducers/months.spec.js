import months from './months';

describe('months reducer', () => {
    it('should make a filter of months', () => {
        expect(
            months([], {
                type: 'ULTIMATE_MONTH',
            })
        ).toEqual([
            {
                month: 'ultimate',
            },
        ]);
        )
    })
})