import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import { MdBedroomParent } from "react-icons/md";
import { MdReduceCapacity } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

function CabinTable() {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Spinner />;
  }

  // Filter
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  else if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  else if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : "-1";
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!cabins.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table
        columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"
        // mobileColumns=" 1.8fr 2.2fr 1fr 1fr 1fr"
        mobileColumns=" 1fr 2fr 1fr 1fr 1fr"
      >
        <Table.Header>
          <div className="responsive-remove"></div>
          <div className="header-box">
            <span className="header-icon">
              <MdBedroomParent />
            </span>
            <span className="header-title">Cabin</span>{" "}
          </div>
          <div className="header-box">
            <span className="header-icon">
              <MdReduceCapacity />
            </span>
            <span className="header-title">Capacity</span>{" "}
          </div>
          <div className="header-box">
            <span className="header-icon">
              <MdAttachMoney />
            </span>
            <span className="header-title">Price</span>{" "}
          </div>
          <div className="header-box">
            <span className="header-icon">
              <BiSolidOffer />
            </span>
            <span className="header-title">Discount</span>{" "}
          </div>

          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
