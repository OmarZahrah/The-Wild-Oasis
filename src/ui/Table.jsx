import { createContext, useContext } from "react";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media ${device.mobile} {
    .responsive-remove {
      display: none;
    }
    .block-span {
      display: block;
    }
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media ${device.mobile} {
    grid-template-columns: ${(props) => props.mobileColumns};
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  .header-box {
    display: flex;
    align-items: center;
    gap: 5px;
    .header-title {
      @media ${device.mobile} {
        display: none;
      }
    }
    .header-icon {
      font-size: 20px;
      @media ${device.tablet} {
        display: none;
      }
      @media ${device.mobile} {
        display: block;
      }
    }
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();
function useTableContext() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("TableContext was used outside the Table Provider");
  }
  return context;
}

function Table({ columns, mobileColumns, children }) {
  return (
    <TableContext.Provider value={{ columns, mobileColumns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns, mobileColumns } = useTableContext();
  return (
    <StyledHeader
      role="row"
      columns={columns}
      mobileColumns={mobileColumns}
      as="header"
    >
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns, mobileColumns } = useTableContext();
  return (
    <StyledRow role="row" columns={columns} mobileColumns={mobileColumns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment!</Empty>;
  return <StyledBody>{data?.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
