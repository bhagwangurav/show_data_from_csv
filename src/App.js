import React from "react";
import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
const App = () => {
  const [csvData, setCsvData] = useState({});
  useEffect(() => {
    fetch("https://enigmatic-ocean-08412.herokuapp.com/question")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCsvData(data.response);
      });
  }, []);

  console.log(csvData);
  const data = {
    columns: [
      {
        label: "Pri",
        field: "pri",
        sort: "asc",
        width: 150,
      },
      {
        label: "Question",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Teaming Stages",
        field: "teaming_stages_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Appears(Day)",
        field: "appears",
        sort: "asc",
        width: 100,
      },
      {
        label: "Frequency",
        field: "frequency",
        sort: "asc",
        width: 150,
      },
      {
        label: "Type",
        field: "q_type",
        sort: "asc",
        width: 100,
      },
      {
        label: "Role",
        field: "role_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Required",
        field: "required",
        sort: "asc",
        width: 100,
      },
      {
        label: "Conditions",
        field: "conditions",
        sort: "asc",
        width: 100,
      },
      {
        label: "Mapping",
        field: "mapping_name",
        sort: "asc",
        width: 100,
      },
    ],
    rows: csvData,
  };

  if (!csvData.length) {
    return null;
  } else {
    return (
      csvData.length && (
        <MDBDataTable
          striped
          bordered
          small
          hover
          entriesOptions={[10]}
          data={data}
          searching={false}
        />
      )
    );
  }
};

export default App;
