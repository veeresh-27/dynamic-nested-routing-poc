import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledProductsDisplay } from "./style";

export const products = [
  {
    id: 12,
    name: "HP Laptop",
    details: "wodh oido oeivjdo oevijd oi jwoi wij ijwo ii jwoi jwpo jwpij p",
    price: 46700,
  },
  {
    id: 13,
    name: "Lenovo Laptop",
    details: "wodh oido oeivjdo oevijd oi jwoi wij ijwo ii jwoi jwpo jwpij p",
    price: 49700,
  },
  {
    id: 14,
    name: "Lenovo Laptop",
    details: "wodh oido oeivjdo oevijd oi jwoi wij ijwo ii jwoi jwpo jwpij p",
    price: 49700,
  },
];

function DynamicRoutes() {
  const navigate = useNavigate();
  return (
    <div>
      {products.map((product, i) => (
        <StyledProductsDisplay
          key={product.id}
          onClick={() => navigate(`product/${product.id}`)}
        >
          {product.name}
        </StyledProductsDisplay>
      ))}
    </div>
  );
}

export default DynamicRoutes;
