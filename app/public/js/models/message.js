var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        username: ['string', true, ''],
        message: ['string', true, '']
    },
    session: {
    },
    derived: {
    }
});
