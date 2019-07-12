//hackathonRoute.js

module.exports = (app) => {
    const hackathon = require('../controllers/blockController');

    app.route('/hackathonValidation')
        .post(hackathon.add_in_bdd)

}