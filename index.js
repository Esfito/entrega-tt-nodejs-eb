import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/productsRouter.js";

const app = express();
app.use(express.json());

app.use("/api", productsRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Algo falló - Puede que no exista la ruta solicitada" });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));