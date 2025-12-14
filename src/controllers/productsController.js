import * as dataLayer from "../data/productsData.js";

export const getAllProducts = async (req, res) => {
  res.json(await dataLayer.getAllProducts());
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await dataLayer.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.json(product);
};

export const createProduct = async (req, res) => {
  if (typeof req.body.name == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const { name, price, categories } = req.body;

  const product = await dataLayer.createProduct({ name, price, categories });

  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await dataLayer.deleteProduct(id);

  if (!deleted) {
    return res.status(404).json({ error: "Not Found" });
  }

  res.json({ message: "Product deleted" });
};