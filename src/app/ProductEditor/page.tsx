import React from "react";
import { Package } from "../models/Package";
import { Country } from "../models/Country";

interface ProductEditorProps {
  travelPackage: Package;
  country: Country;
}

function ProductEditor({ travelPackage, country }: ProductEditorProps) {
  return (
    <>
      <div>Product Editor page</div>
    </>
  );
}

export default ProductEditor;
