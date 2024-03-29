const express = require("express");
const app = express();
const cors = require('cors')
const connectDB = require("./configuration/db.js");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const order = require("./routes/Order.js");
const user = require("./routes/user.js");
const products = require("./routes/products.js");
const bodyParser = require("body-parser");

app.use(cors());
// 50dedec0a831924cafcd473f4b248d1a749a4873

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/uploads', express.static('./uploads'));

dotenv.config();
connectDB();
app.use("/order", order);
app.use("/user", user);
app.use("/products", products);

dotenv.config();
connectDB();

app.listen(port, () => console.log(`Server started on port: ${port}`));
