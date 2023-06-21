import React, { useEffect, useState } from "react";
import { products } from "../../pages'/dynamicRoutes";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    products.forEach((element) => {
      if (element.id === parseInt(id)) {
        //console.log(element)
        setProduct(element);
      }
    });
  }, [id]);

  return (
    <div>
      {product?.name} <br /> Detals: {product?.details} <br /> Price:{" "}
      {product?.price}
    </div>
  );
}

export default Product;
