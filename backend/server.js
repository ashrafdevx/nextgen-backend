import { configDotenv } from "dotenv";
import express from "express";
// import { authRouter } from "./routes/auth.routes.js";
// import { connect } from "./libs/dbConfig.js";
// import cookieParser from "cookie-parser";
// import { productRouter } from "./routes/product.routes.js";
const app = express();

configDotenv();

// meddlewares
// app.use(cookieParser());
app.use(express.json());
// app.use("/api/auth", authRouter);
// app.use("/api/product", productRouter);

const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
  //   connect();
  console.log(`app running on http://localhost:${PORT}`);
});
