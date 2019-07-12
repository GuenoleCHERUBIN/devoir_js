//blockRoute.js

module.exports = (app) => {
    const block = require('../controllers/hackathonController');

    app.route('/blocks')
    .get(block.list_all_blocks)
}