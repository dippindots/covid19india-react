import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Level from './level';
import Minigraph from './minigraph';
import Table from './table';

function Summary(props) {
  const [states, setStates] = useState([]);
  const [deltas, setDeltas] = useState([]);
  const [timeseries, setTimeseries] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = () => {
    // axios
    //   .get('https://api.covid19india.org/data.json')
    //   .then((response) => {
    //     setStates(response.data.statewise);
    //     setDeltas(response.data.key_values[0]);
    //     setTimeseries(response.data.cases_time_series);
    //     setFetched(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const response = {
      "cases_time_series": [
        {
          "dailyconfirmed": "1",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "30 January ",
          "totalconfirmed": "1",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "31 January ",
          "totalconfirmed": "1",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "01 February ",
          "totalconfirmed": "1",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "1",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "02 February ",
          "totalconfirmed": "2",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "1",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "03 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "04 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "05 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "06 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "07 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "08 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "09 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "10 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "11 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "12 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "0"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "1",
          "date": "13 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "1"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "14 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "1"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "15 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "1"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "1",
          "date": "16 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "2"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "17 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "2"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "18 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "2"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "19 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "2"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "1",
          "date": "20 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "21 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "22 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "23 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "24 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "25 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "26 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "27 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "28 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "29 February ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "0",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "01 March ",
          "totalconfirmed": "3",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "2",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "02 March ",
          "totalconfirmed": "5",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "1",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "03 March ",
          "totalconfirmed": "6",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "22",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "04 March ",
          "totalconfirmed": "28",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "2",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "05 March ",
          "totalconfirmed": "30",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "1",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "06 March ",
          "totalconfirmed": "31",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "3",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "07 March ",
          "totalconfirmed": "34",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "5",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "08 March ",
          "totalconfirmed": "39",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "9",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "09 March ",
          "totalconfirmed": "48",
          "totaldeceased": "0",
          "totalrecovered": "3"
        },
        {
          "dailyconfirmed": "15",
          "dailydeceased": "0",
          "dailyrecovered": "1",
          "date": "10 March ",
          "totalconfirmed": "63",
          "totaldeceased": "0",
          "totalrecovered": "4"
        },
        {
          "dailyconfirmed": "7",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "11 March ",
          "totalconfirmed": "70",
          "totaldeceased": "0",
          "totalrecovered": "4"
        },
        {
          "dailyconfirmed": "12",
          "dailydeceased": "1",
          "dailyrecovered": "0",
          "date": "12 March ",
          "totalconfirmed": "82",
          "totaldeceased": "1",
          "totalrecovered": "4"
        },
        {
          "dailyconfirmed": "9",
          "dailydeceased": "0",
          "dailyrecovered": "6",
          "date": "13 March ",
          "totalconfirmed": "91",
          "totaldeceased": "1",
          "totalrecovered": "10"
        },
        {
          "dailyconfirmed": "16",
          "dailydeceased": "1",
          "dailyrecovered": "0",
          "date": "14 March ",
          "totalconfirmed": "107",
          "totaldeceased": "2",
          "totalrecovered": "10"
        },
        {
          "dailyconfirmed": "6",
          "dailydeceased": "0",
          "dailyrecovered": "3",
          "date": "15 March ",
          "totalconfirmed": "113",
          "totaldeceased": "2",
          "totalrecovered": "13"
        },
        {
          "dailyconfirmed": "14",
          "dailydeceased": "0",
          "dailyrecovered": "1",
          "date": "16 March ",
          "totalconfirmed": "127",
          "totaldeceased": "2",
          "totalrecovered": "14"
        },
        {
          "dailyconfirmed": "19",
          "dailydeceased": "1",
          "dailyrecovered": "1",
          "date": "17 March ",
          "totalconfirmed": "146",
          "totaldeceased": "3",
          "totalrecovered": "15"
        },
        {
          "dailyconfirmed": "25",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "18 March ",
          "totalconfirmed": "171",
          "totaldeceased": "3",
          "totalrecovered": "15"
        },
        {
          "dailyconfirmed": "28",
          "dailydeceased": "1",
          "dailyrecovered": "5",
          "date": "19 March ",
          "totalconfirmed": "199",
          "totaldeceased": "4",
          "totalrecovered": "20"
        },
        {
          "dailyconfirmed": "59",
          "dailydeceased": "0",
          "dailyrecovered": "3",
          "date": "20 March ",
          "totalconfirmed": "258",
          "totaldeceased": "4",
          "totalrecovered": "23"
        },
        {
          "dailyconfirmed": "76",
          "dailydeceased": "0",
          "dailyrecovered": "0",
          "date": "21 March ",
          "totalconfirmed": "334",
          "totaldeceased": "4",
          "totalrecovered": "23"
        },
        {
          "dailyconfirmed": "69",
          "dailydeceased": "3",
          "dailyrecovered": "0",
          "date": "22 March ",
          "totalconfirmed": "403",
          "totaldeceased": "7",
          "totalrecovered": "23"
        },
        {
          "dailyconfirmed": "102",
          "dailydeceased": "2",
          "dailyrecovered": "2",
          "date": "23 March ",
          "totalconfirmed": "505",
          "totaldeceased": "9",
          "totalrecovered": "25"
        },
        {
          "dailyconfirmed": "66",
          "dailydeceased": "1",
          "dailyrecovered": "15",
          "date": "24 March ",
          "totalconfirmed": "571",
          "totaldeceased": "10",
          "totalrecovered": "40"
        },
        {
          "dailyconfirmed": "86",
          "dailydeceased": "1",
          "dailyrecovered": "3",
          "date": "25 March ",
          "totalconfirmed": "657",
          "totaldeceased": "11",
          "totalrecovered": "43"
        },
        {
          "dailyconfirmed": "78",
          "dailydeceased": "5",
          "dailyrecovered": "7",
          "date": "26 March ",
          "totalconfirmed": "735",
          "totaldeceased": "16",
          "totalrecovered": "50"
        },
        {
          "dailyconfirmed": "151",
          "dailydeceased": "3",
          "dailyrecovered": "25",
          "date": "27 March ",
          "totalconfirmed": "886",
          "totaldeceased": "19",
          "totalrecovered": "75"
        },
        {
          "dailyconfirmed": "143",
          "dailydeceased": "5",
          "dailyrecovered": "10",
          "date": "28 March ",
          "totalconfirmed": "1029",
          "totaldeceased": "24",
          "totalrecovered": "85"
        },
        {
          "dailyconfirmed": "110",
          "dailydeceased": "3",
          "dailyrecovered": "17",
          "date": "29 March ",
          "totalconfirmed": "1139",
          "totaldeceased": "27",
          "totalrecovered": "102"
        }
      ],
      "key_values": [
        {
          "confirmeddelta": "22",
          "counterforautotimeupdate": "645",
          "deceaseddelta": "1",
          "lastupdatedtime": "30/03/2020 10:52:25",
          "recovereddelta": "0",
          "statesdelta": "0"
        }
      ],
      "statewise": [
        {
          "active": "1031",
          "confirmed": "1161",
          "deaths": "28",
          "delta": {
            "active": 22,
            "confirmed": 22,
            "deaths": 0,
            "recovered": 0
          },
          "lastupdatedtime": "30/03/2020 10:52:25",
          "recovered": "102",
          "state": "Total"
        },
        {
          "active": "183",
          "confirmed": "215",
          "deaths": "7",
          "delta": {
            "active": 12,
            "confirmed": 12,
            "deaths": 0,
            "recovered": 0
          },
          "lastupdatedtime": "30/03/2020 10:02:25",
          "recovered": "25",
          "state": "New York"
        },
      ],
    }
    setStates(response.statewise);
    setDeltas(response.key_values[0]);
    setTimeseries(response.cases_time_series);
    setFetched(true);
  };

  return (
    <div className="Summary">
      <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
        <h1>India COVID-19 Tracker</h1>
      </div>

      <Minigraph timeseries={timeseries} animate={false} />
      <Level data={states} deltas={deltas} />
      <Table states={states} summary={true} />

      <div className="summary-bottom">
        <div className="summary-bottom-left">
          <img
            src="icon.png"
            alt="https://www.covid19india.org | Coronavirus cases live dashboard"
          />
          <h5>We stand with everyone fighting on the frontlines</h5>
        </div>
        <div className="link">
          <a href="https://github.com/covid19india">covid19india.org</a>
        </div>
      </div>
    </div>
  );
}

export default Summary;
