import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDistance} from 'date-fns';
import {formatDate} from '../utils/common-functions';
import Table from './table';
import Level from './level';
import MapExplorer from './mapexplorer';
import TimeSeries from './timeseries';
import Minigraph from './minigraph';

function Home(props) {
  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [graphOption, setGraphOption] = useState(1);
  const [lastUpdated, setLastUpdated] = useState('');
  const [timeseries, setTimeseries] = useState([]);
  const [deltas, setDeltas] = useState([]);
  const [timeseriesMode, setTimeseriesMode] = useState(true);
  const [stateHighlighted, setStateHighlighted] = useState(undefined);
  const [districtHighlighted, setDistrictHighlighted] = useState(undefined);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
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




      const stateDistrictWiseResponse = {
        "Kerala": {
          "districtData": {
            "Queens": {
              "confirmed": 7,
              "lastupdatedtime": ""
            },
            "Kings": {
              "confirmed": 2,
              "lastupdatedtime": ""
            },
            "Broome": {
              "confirmed": 90,
              "lastupdatedtime": ""
            },
          }
        },
      }
      // const [response, stateDistrictWiseResponse] = await Promise.all([
      //   axios.get('https://api.covid19india.org/data.json'),
      //   axios.get('https://api.covid19india.org/state_district_wise.json'),
      // ]);
      // setStates(response.data.statewise);
      // setTimeseries(response.data.cases_time_series);
      // setLastUpdated(response.data.statewise[0].lastupdatedtime);
      // setDeltas(response.data.key_values[0]);
      // setStateDistrictWiseData(stateDistrictWiseResponse.data);
      setStates(response.statewise);
      setTimeseries(response.cases_time_series);
      setLastUpdated(response.statewise[0].lastupdatedtime);
      setDeltas(response.key_values[0]);
      setStateDistrictWiseData(stateDistrictWiseResponse);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onHighlightState = (state, index) => {
    if (!state && !index) setStateHighlighted(null);
    else setStateHighlighted({state, index});
  };
  const onHighlightDistrict = (district, state, index) => {
    if (!state && !index && !district) setDistrictHighlighted(null);
    else setDistrictHighlighted({district, state, index});
  };

  return (
    <div className="Home">
      <div className="home-left">
        <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="header-mid">
            <div className="titles">
              <h1>US COVID-19 Tracker</h1>
              <h6>A Crowdsourced Initiative</h6>
            </div>
            <div className="last-update">
              <h6>Last Updated</h6>
              <h3>
                {isNaN(Date.parse(formatDate(lastUpdated)))
                  ? ''
                  : formatDistance(
                      new Date(formatDate(lastUpdated)),
                      new Date()
                    ) + ' Ago'}
              </h3>
            </div>
          </div>
        </div>

        <Level data={states} deltas={deltas} />
        <Minigraph timeseries={timeseries} animate={true} />

        <Table
          states={states}
          summary={false}
          onHighlightState={onHighlightState}
          stateDistrictWiseData={stateDistrictWiseData}
          onHighlightDistrict={onHighlightDistrict}
        />
      </div>

      <div className="home-right">
        {fetched && (
          <React.Fragment>
            <MapExplorer
              states={states}
              stateDistrictWiseData={stateDistrictWiseData}
              stateHighlighted={stateHighlighted}
              districtHighlighted={districtHighlighted}
            />

            <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1.5s'}}
            >
              <h1>Spread Trends</h1>
              <div className="tabs">
                <div
                  className={`tab ${graphOption === 1 ? 'focused' : ''}`}
                  onClick={() => {
                    setGraphOption(1);
                  }}
                >
                  <h4>Cumulative</h4>
                </div>
                <div
                  className={`tab ${graphOption === 2 ? 'focused' : ''}`}
                  onClick={() => {
                    setGraphOption(2);
                  }}
                >
                  <h4>Daily</h4>
                </div>
              </div>

              <div className="timeseries-mode">
                <label htmlFor="timeseries-mode">Scale Uniformly</label>
                <input
                  type="checkbox"
                  className="switch"
                  aria-label="Checked by default to scale uniformly."
                  checked={timeseriesMode}
                  onChange={(event) => {
                    setTimeseriesMode(!timeseriesMode);
                  }}
                />
              </div>
            </div>

            <TimeSeries
              timeseries={timeseries}
              type={graphOption}
              mode={timeseriesMode}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Home;
