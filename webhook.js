
module.exports = (app) => {
    console.log('Web Hook is running...');
    app.post('/webhook', (req, res) => {
        console.log('Activate Web Hook');
        console.log(req.body);
        res.status(200).send();
    });
}
// Comment