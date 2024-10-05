import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "No Discount", value: "no-discount" },
          { label: "with Discount", value: "with-discount" },
        ]}
      />
      <SortBy
        options={[
          { label: "Sort By Name (A-Z)", value: "name-asc" },
          { label: "Sort By Name (Z-A)", value: "name-desc" },
          { label: "Sort By Price (low first)", value: "regularPrice-asc" },
          { label: "Sort By Capacity (low first)", value: "maxCapacity-asc" },
          { label: "Sort By Capacity (high first)", value: "maxCapacity-desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
