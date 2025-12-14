import { Router } from "express";

const router = Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productsController.js";

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

export default router;