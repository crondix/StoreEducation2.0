import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";

export const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="row-cols-auto">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3 "
          style={{ cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "#dee2e6"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
