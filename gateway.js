const express = require('express')
const axios = require('axios')

const app = express()

const CMAX_DATA_URL = "http://pogodynka.pl/api/radars/v1/list/cmax"
const URL_PREFIX = "api"

app.get(`/${URL_PREFIX}/cmax`, async (req, res) => {
    res.send(
        await axios
          .get(CMAX_DATA_URL)
          .then(r => r.data.cmax.list)
    )
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
