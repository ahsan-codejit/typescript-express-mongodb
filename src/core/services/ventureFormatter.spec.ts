import VentureFormatter from './ventureFormatter';

describe(`#VentureFormatter`, () => {
    let ventureFormatter: VentureFormatter;
    beforeAll(() => {
        ventureFormatter = new VentureFormatter();
    });

    it(`should return ventur entity`, () => {
        let params = {
            name: 'formatter',
            owner: { 'id': 'test' },
            participants: []
        }
        let venture = ventureFormatter.format(params);
        expect(venture).toHaveProperty('status');
        expect(venture.name).toBe(params.name);
        expect(venture.owner).toBe(params.owner);
        expect(venture.participants).toBe(params.participants);
    });

    it(`should return entity update options`, () => {
        let params = {
            name: 'formatter',
            owner: { 'id': 'test' },
            status: 'Active',
            participants: []
        }
        let venture = ventureFormatter.formatUpdateData(params);
        expect(venture).toHaveProperty('name');
        expect(venture.owner).toBe(undefined);
        expect(venture.participants).toBe(params.participants);
    });
});