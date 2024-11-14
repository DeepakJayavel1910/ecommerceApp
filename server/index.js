const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
require("dotenv").config()

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("MongoDb connected");
  });


const app = express();
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin : process.env.CLIENT_BASE_URL,
        methods : ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    })
)


app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/cart", shopCartRouter);


app.listen(PORT, () => console.log(`Server is running on http://localhost:5000`))