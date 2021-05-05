import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "./TableContainer";
import { Container } from "reactstrap";
import config from "./config.json";
import DateTimePicker from "react-datetime-picker";

const SyslogTable = () => {
  const [data, setData] = useState([]);
  const [pharse, setParse] = useState("service");
  const [datetimeFrom, setDatetimeFrom] = useState(new Date(1619287644857));
  const [datetimeUntil, setDatetimeUntil] = useState(new Date(1619291220000));

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      datetimeFrom: datetimeFrom.getTime(),
      datetimeUntil: datetimeUntil.getTime(),
      phrase: pharse,
    }),
  };

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(
        config.API_END_POINT + "/api/data",
        requestOptions
      );
      const body = await response.json();
      const data = body.data;
      setData(data);
    };
    doFetch();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      config.API_END_POINT + "/api/data",
      requestOptions
    );
    const body = await response.json();
    const data = body.data;
    setData(data);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Date Time",
        accessor: "datetime",
      },
      {
        Header: "Message",
        accessor: "message",
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <Container>
    <div className="custom-data-filter">
          <span>From:</span>
          <DateTimePicker
            className="date-time-picker"
            disableClock={true}
            onChange={setDatetimeFrom}
            value={datetimeFrom}
          />
          <span>Until:</span>
          <DateTimePicker
            className="date-time-picker"
            disableClock={true}
            onChange={setDatetimeUntil}
            value={datetimeUntil}
          />
          <span>Pharse:</span>
          <input value={pharse} onChange={setParse} />
          <button className="fetch-button" onClick={fetchData}>
            Analyze
          </button>
        </div>
  <TableContainer columns={columns} data={data} />
  </Container>
  )
  
};

export default SyslogTable;
