const express = require('express');
const router = express.Router();
const urlModel = require('./db')

const validUrl = require('valid-url');

const middleWareUrl = function (req, res, next) {
    if (!validUrl.isWebUri(req.body.url)) {
        res.json({error: 'invalid url'});
        return false;
    }

    next();
};

router.get('/shorturl/:short_url', async function (req, res) {

    const found = await urlModel.findOne({short_url: req.params.short_url});

    if (!found) {
        res.json({error: 'No short URL found for the given input'});
        return false;
    }

    res.redirect(found.original_url);
});

const {nanoid} = require("nanoid");
router.post('/shorturl', middleWareUrl, async function (req, res) {

    const data = {original_url: req.body.url, short_url: nanoid(5)}

    const found = await urlModel.findOneAndUpdate({original_url: data.original_url},
        {short_url: data.short_url}
    );

    if (!found) {
        const newUrl = await new urlModel(data);
        newUrl.save();
    }

    res.json(data);
});

module.exports = router;
