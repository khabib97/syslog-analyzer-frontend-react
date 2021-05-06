import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import config from "../../config.json";
import DateTimePicker from "react-datetime-picker";
import { Bar } from 'react-chartjs-2';

const SyslogHistogram = () => {
  
  const [data, setData] = useState([]);
  const [pharse, setParse] = useState("service");
  const [datetimeFrom, setDatetimeFrom] = useState(new Date(1619287644857));
  const [datetimeUntil, setDatetimeUntil] = useState(new Date(1619291220000));

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
      datetimeFrom: datetimeFrom.getTime(),
      datetimeUntil: datetimeUntil.getTime(),
      phrase: pharse
      }
    ),
  };

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(
        config.API_END_POINT + config.HISTOGRAM_URI,
        requestOptions
      );
      const body = await response.json();
      const data = body.histogram;
      setData(data);
      
    };
    doFetch();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      config.API_END_POINT + config.HISTOGRAM_URI,
      requestOptions
    );
    const body = await response.json();
    const data = body.histogram;
    setData(data);
  };

  const histomapper = {
    labels: data.map(singleDataObj=> new Date(singleDataObj.datetime).toLocaleString()),
    datasets: [
      {
        label: '# of counts',
        data: data.map(singleDataObj => singleDataObj.counts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  const onChange = (e) => {
    setParse(e.target.value);
  };

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
        <input type={Text} value={pharse} onChange={onChange} />
        <button className="fetch-button" onClick={fetchData}>
          Analyze
        </button>
      </div>
      <div className="histogram-canvas">
      <Bar data={histomapper} options={options} />
      </div>
    </Container>
  );
};

export default SyslogHistogram;
