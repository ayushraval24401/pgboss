require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import orderRoutes from "./routes/orderRoutes";
import userRoutes from "./routes/userRoutes";

app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is listening on port ", PORT);
});
