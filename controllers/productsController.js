import asyncHandler from "express-async-handler";

const getAllProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Products route" });
});

export { getAllProducts };
