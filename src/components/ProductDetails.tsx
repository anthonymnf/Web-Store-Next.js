import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { ProductType } from "../services/products";
import SuccessToast from "./SuccessToast";
import { useCart } from "@/hooks/useCart";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  return (
    <Row>
      <Col lg={6}>
        <Image
          className="align-middle"
          src={product.imageUrl}
          alt={product.name}
          height={400}
          width={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">R$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product);
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
          }}
        >
          Compre agora
        </Button>

        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        />
      </Col>
    </Row>
  );
};

export default ProductDetails;
