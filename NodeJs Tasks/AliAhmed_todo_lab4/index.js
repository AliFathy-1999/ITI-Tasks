const app = require("./app.js")
require("dotenv").config();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
})