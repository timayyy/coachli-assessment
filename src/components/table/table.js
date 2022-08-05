import DataTable from "react-data-table-component";
// import { Spinner } from "components/spinner";

const customStyles = {
  tableWrapper: {
    style: {
      overflowX: "visible",
      overflowY: "visible",
      // border: "1px solid black",
    },
  },
  table: {
    style: {
      position: "relative",
      overflowX: "visible",
      overflowY: "visible",
    },
  },
  header: {
    style: {
      display: "none",
    },
  },
  subHeader: {
    style: {
      border: "none",
      boxShadow: "none",
    },
  },
  head: {
    style: {
      border: "none",
      boxShadow: "none",
    },
  },
  headRow: {
    style: {
      fontSize: "1.2rem",
      boxShadow: "none",
      marginBottom: "5px",
      textAlign: "center",
      color: "black",
      padding: "0 1rem",
      backgroundColor: "#F9F9F9",
    },
  },
  rows: {
    style: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      color: "#979797",
      minHeight: "6.6rem",
      padding: "0 1rem",
      textTransform: "capitalize",
    },
    selectedHighlightStyle: {
      "&:nth-of-type(n)": {
        backgroundColor: "#3577e51f",
      },
    },
  },
  headCells: {
    style: {
      fontSize: "1.45rem",
      fontWeight: 700,
    },
  },
  cells: {
    style: {
      wordBreak: "break-word",

      "&:first-child": {
        color: "#3B3B42",
        fontWeight: "bold",

        "&:first-child": {
          whiteSpace: "unset !important",
          textOverflow: "unset !important",
        },
      },
    },
  },
};

export const Table = ({ columns, data }) => {
  return (
    <DataTable
      customStyles={customStyles}
      selectableRows
      data={data}
      columns={columns}
      responsive
    />
  );
};
