const app = require('./api/app');


app.use('/api', require('./api/index'));

app.get("/", function (req, res) {
    res.render('index');
});

const listener = app.listen(process.env.port || 3000, function () {
    console.log("sever started on port " + listener.address().port)
});
