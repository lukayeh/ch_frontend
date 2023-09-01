import React from 'react';
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";
import "./Indies.css";

const data = [
  { firstName: "jane", lastName: "doe", age: 20 },
  { firstName: "john", lastName: "smith", age: 21 }
];

const columns = [
  {
    Header: "Personal Details",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName",
        filter: "globalFilter"
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        filter: "text"
      }
    ]
  },
  {
    Header: "Information",
    columns: [
      {
        Header: "Age",
        accessor: "age",
        filter: "text"
      }
    ]
  }
];


const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) => {
  const count = preGlobalFilteredRows && preGlobalFilteredRows.length;

  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} records...`}
        style={{
          border: "5",
          margin: 3,
          fontSize: 15,
          boxSizing: 'border-box'
        }}
      />
    </span>
  );
};

const Table = ({ columns, data }) => {

  const filterTypes = React.useMemo(
    () => ({
      globalFilter: (rows, id, filterValue) => {
        
        console.log(rows)

        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      globalFilter: filterTypes,
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "right"
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th></thead>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
                  <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                      ? "desc"
                      : "asc"
                      : ""
                  }
                >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function Indies() {
  return (
    <div className="Indies">
      <Table columns={columns} data={data} />
    </div>
  );
}