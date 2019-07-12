//hackathonRoute.js

module.exports = (app) => {
    const hackathon = require('../controllers/hackathonController');

    app.route('/hackathonValidation')
        .get(hackathon.hello)
        .post(hackathon.add_in_bdd) //call to function add_in_bdd located in controllers/hackathonController

}