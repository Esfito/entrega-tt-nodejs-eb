import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";

const router = Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productsController.js";

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", auth, createProduct);
router.delete("/products/:id", auth, deleteProduct);

export default router;