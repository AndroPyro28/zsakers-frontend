import { TableRow } from "./components"

function InventoryTableRow() {
  return (
    <TableRow>
      <th className="image">#</th>
      <th className="name">Name</th>
      <th className="category">Category</th>
      <th className="subcategory">Subcategory</th>
      {/* <th className="setcategory">Setcategory</th> */}
      <th className="price">Price</th>
      <th className="stock">Stock</th>
      <th className="action"></th>
    </TableRow>
  )
}

export default InventoryTableRow