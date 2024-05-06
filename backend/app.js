import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./utils/error.js";
import contactRoutes from "./routes/mail.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
  })
);

app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port number ${port}`);
});

app.use(errorHandler);
