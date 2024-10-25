const fetch = require('../src/index');

test('fetch returns data', () => {
    return fetch().then(data => {
        expect(data).toEqual({"tets": "test"}); 
    });
});