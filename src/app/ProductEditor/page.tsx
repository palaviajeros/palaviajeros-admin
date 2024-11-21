import { Package } from "../models/Package"
import { Country } from "../models/Country"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ProductEditorProps {
  travelPackage: Package
  country: Country
}

function ProductEditor() {
  return (
    <>
      <div>Product Editor page</div>
    </>
  )
}

export default ProductEditor
