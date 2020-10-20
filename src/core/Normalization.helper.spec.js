import NormalizationHelper from './Normalization.helper';

describe('NormalizationHelper Unit Tests', () => {

    it('should normalize an empty string', async () => {

        const initial = '';

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 0;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is an integer', async () => {

        const initial = 948;

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 94800;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is a float', async () => {

        const initial = 948.342;

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 94834;

        expect(actual).toEqual(expected);
    });

    it('should normalize when is a float (one decimal)', async () => {

        const initial = 948.3;

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 94830;

        expect(actual).toEqual(expected);
    });

    it('should normalize when is an integer (as string)', async () => {

        const initial = '948';

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 94800;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is a float (as string)', async () => {

        const initial = '948.342';

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 94834;

        expect(actual).toEqual(expected);
    });

    it('should normalize when is a float (one decimal) (as string)', async () => {

        const initial = '948.3';

        const actual = NormalizationHelper.normalizeGoalValue(initial);
        const expected = 94830;

        expect(actual).toEqual(expected);
    });

    it('should normalize an empty string with fullUnit on false', async () => {

        const initial = '';

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 0;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is an integer with fullUnit on false (as string)', async () => {

        const initial = '948';

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 948;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is a float with fullUnit on false (as string)', async () => {

        const initial = '948.342';

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 948;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is a float (one decimal) with fullUnit on false (as string)', async () => {

        const initial = '948.3';

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 948;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is an integer with fullUnit on false', async () => {

        const initial = 948;

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 948;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is a float with fullUnit on false', async () => {

        const initial = 948.342;

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 948;

        expect(actual).toEqual(expected);
    });
    it('should normalize when is a float (one decimal) with fullUnit on false', async () => {

        const initial = 948.3;

        const actual = NormalizationHelper.normalizeGoalValue(initial, false);
        const expected = 948;

        expect(actual).toEqual(expected);
    });
});
