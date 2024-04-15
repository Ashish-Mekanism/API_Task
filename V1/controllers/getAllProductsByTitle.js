import { productData } from "../../utility/productData.js";

export const getAllProductsByTitle = (req, res) => {
  const { title } = req.params;

  if (title) {
    const filteredProduct = productData.find(
      (product) => product.title.toLowerCase() === title.toLowerCase()
    );

    if (!filteredProduct) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: filteredProduct,
    });
  }

  const productTitles = productData.map((product) => product.title);

  res.status(200).json({
    status: "success",
    data: productTitles,
  });
};
