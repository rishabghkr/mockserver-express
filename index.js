const express = require('express');
const {logInformation} = require("./lib/loggerUtils");
const {setResponseHeaders} = require("./lib/apiUtils");
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
    setResponseHeaders(res);
    next();
});

app.use((req, res, next) => {
    logInformation(req);
    next();
});

app.get('/promotions-planning/v1/promotions/search', (req, res) => {
    res.status(409).send("it's a conflict, sorry");
});

app.get('/promotions-planning/v1/promotion/:id', (req, res) => {
    const promotionId = req.params.id;
    res.status(409).send(`sorry it's a conflict for ${promotionId}`);
});

app.use((req, res) => {
    res.status(404).send('Error: Not found');
});

app.listen(PORT, () => {
    console.log(`Mock server is listening on port ${PORT}`);
});
