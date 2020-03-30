import React, {useState, useEffect, useMemo} from 'react';
import ChoroplethMap, {highlightRegionInMap} from './choropleth';
import {MAP_TYPES, MAPS_DIR} from '../constants';
import {formatDate} from '../utils/common-functions';
import {formatDistance} from 'date-fns';

const mapMeta = {
  US: {
    name: 'US',
    geoDataFile: `${MAPS_DIR}/us.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectName: 'us',
  },
  // 'Alabama': {
  //   name: 'Alabama',
  //   geoDataFile: `${MAPS_DIR}/alabama.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'alabama-distinct',
  // },
  // 'Alaska': {
  //   name: 'Alaska',
  //   geoDataFile: `${MAPS_DIR}/alaska.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'alaska-distinct',
  // },
  // 'Arizona': {
  //   name: 'Arizona',
  //   geoDataFile: `${MAPS_DIR}/arizona.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'arizona-distinct',
  // },
  // 'Arkansas': {
  //   name: 'Arkansas',
  //   geoDataFile: `${MAPS_DIR}/arkansas.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'arkansas-distinct',
  // },
  // 'California': {
  //   name: 'California',
  //   geoDataFile: `${MAPS_DIR}/california.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'california-distinct',
  // },
  // 'Colorado': {
  //   name: 'Colorado',
  //   geoDataFile: `${MAPS_DIR}/colorado.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'colorado-distinct',
  // },
  // 'Connecticut': {
  //   name: 'Connecticut',
  //   geoDataFile: `${MAPS_DIR}/connecticut.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'connecticut-distinct',
  // },
  // 'Delaware': {
  //   name: 'Delaware',
  //   geoDataFile: `${MAPS_DIR}/delaware.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'delaware-distinct',
  // },
  // 'Florida': {
  //   name: 'Florida',
  //   geoDataFile: `${MAPS_DIR}/florida.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'florida-distinct',
  // },
  // 'Hawaii': {
  //   name: 'Hawaii',
  //   geoDataFile: `${MAPS_DIR}/hawaii.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'hawaii-distinct',
  // },
  // 'Idaho': {
  //   name: 'Idaho',
  //   geoDataFile: `${MAPS_DIR}/idaho.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'idaho-distinct',
  // },
  // 'Illinois': {
  //   name: 'Illinois',
  //   geoDataFile: `${MAPS_DIR}/illinois.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'illinois-distinct',
  // },
  // 'Indiana': {
  //   name: 'Indiana',
  //   geoDataFile: `${MAPS_DIR}/indiana.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'indiana-distinct',
  // },
  // 'Iowa': {
  //   name: 'Iowa',
  //   geoDataFile: `${MAPS_DIR}/iowa.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'iowa-distinct',
  // },
  // 'Kansas': {
  //   name: 'Kansas',
  //   geoDataFile: `${MAPS_DIR}/kansas.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'kansas-distinct',
  // },
  // 'Kentucky': {
  //   name: 'Kentucky',
  //   geoDataFile: `${MAPS_DIR}/kentucky.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'kentucky-distinct',
  // },
  // 'Louisiana': {
  //   name: 'Louisiana',
  //   geoDataFile: `${MAPS_DIR}/louisiana.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'louisiana-distinct',
  // },
  // 'Maine': {
  //   name: 'Maine',
  //   geoDataFile: `${MAPS_DIR}/maine.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'maine-distinct',
  // },
  // 'Maryland': {
  //   name: 'Maryland',
  //   geoDataFile: `${MAPS_DIR}/maryland.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'maryland-distinct',
  // },
  // 'Massachusetts': {
  //   name: 'Massachusetts',
  //   geoDataFile: `${MAPS_DIR}/massachusetts.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'massachusetts-distinct',
  // },
  // 'Michigan': {
  //   name: 'Michigan',
  //   geoDataFile: `${MAPS_DIR}/michigan.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'michigan-distinct',
  // },
  // 'Minnesota': {
  //   name: 'Minnesota',
  //   geoDataFile: `${MAPS_DIR}/minnesota.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'minnesota-distinct',
  // },
  // 'Mississippi': {
  //   name: 'Mississippi',
  //   geoDataFile: `${MAPS_DIR}/mississippi.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'mississippi-distinct',
  // },
  // 'Missouri': {
  //   name: 'Missouri',
  //   geoDataFile: `${MAPS_DIR}/missouri.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'missouri-distinct',
  // },
  // 'Montana': {
  //   name: 'Montana',
  //   geoDataFile: `${MAPS_DIR}/montana.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'montana-distinct',
  // },
  // 'Nebraska': {
  //   name: 'Nebraska',
  //   geoDataFile: `${MAPS_DIR}/nebraska.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'nebraska-distinct',
  // },
  // 'Nevada': {
  //   name: 'Nevada',
  //   geoDataFile: `${MAPS_DIR}/nevada.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'nevada-distinct',
  // },
  // 'New Hampshire': {
  //   name: 'New Hampshire',
  //   geoDataFile: `${MAPS_DIR}/new-hampshire.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'new-hampshire-distinct',
  // },
  // 'New Jersey': {
  //   name: 'New Jersey',
  //   geoDataFile: `${MAPS_DIR}/new-jersey.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'new-jersey-distinct',
  // },
  // 'New Mexico': {
  //   name: 'New Mexico',
  //   geoDataFile: `${MAPS_DIR}/new-mexico.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'new-mexico-distinct',
  // },
  'New York': {
    name: 'New York',
    geoDataFile: `${MAPS_DIR}/new-york.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'new-york-distinct',
  },
  // 'North Carolina': {
  //   name: 'North Carolina',
  //   geoDataFile: `${MAPS_DIR}/north-carolina.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'north-carolina-distinct',
  // },
  // 'North Dakota': {
  //   name: 'North Dakota',
  //   geoDataFile: `${MAPS_DIR}/north-dakota.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'north-dakota-distinct',
  // },
  // 'Ohio': {
  //   name: 'Ohio',
  //   geoDataFile: `${MAPS_DIR}/ohio.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'ohio-distinct',
  // },
  // 'Oklahoma': {
  //   name: 'Oklahoma',
  //   geoDataFile: `${MAPS_DIR}/oklahoma.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'oklahoma-distinct',
  // },
  // 'Oregon': {
  //   name: 'Oregon',
  //   geoDataFile: `${MAPS_DIR}/oregon.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'oregon-distinct',
  // },
  // 'Pennsylvania': {
  //   name: 'Pennsylvania',
  //   geoDataFile: `${MAPS_DIR}/pennsylvania.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'pennsylvania-distinct',
  // },
  // 'Puerto Rico': {
  //   name: 'Puerto Rico',
  //   geoDataFile: `${MAPS_DIR}/puerto-rico.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'puerto-rico-distinct',
  // },
  // 'Rhode Island': {
  //   name: 'Rhode Island',
  //   geoDataFile: `${MAPS_DIR}/rhode-island.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'rhode-island-distinct',
  // },
  // 'South Carolina': {
  //   name: 'South Carolina',
  //   geoDataFile: `${MAPS_DIR}/south-carolina.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'south-carolina-distinct',
  // },
  // 'South Dakota': {
  //   name: 'South Dakota',
  //   geoDataFile: `${MAPS_DIR}/south-dakota.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'south-dakota-distinct',
  // },
  // 'Tennessee': {
  //   name: 'Tennessee',
  //   geoDataFile: `${MAPS_DIR}/tennessee.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'tennessee-distinct',
  // },
  // 'Texas': {
  //   name: 'Texas',
  //   geoDataFile: `${MAPS_DIR}/texas.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'texas-distinct',
  // },
  // 'Utah': {
  //   name: 'Utah',
  //   geoDataFile: `${MAPS_DIR}/utah.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'utah-distinct',
  // },
  // 'Vermont': {
  //   name: 'Vermont',
  //   geoDataFile: `${MAPS_DIR}/vermont.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'vermont-distinct',
  // },
  // 'Virginia': {
  //   name: 'Virginia',
  //   geoDataFile: `${MAPS_DIR}/virginia.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'virginia-distinct',
  // },
  // 'Washington': {
  //   name: 'Washington',
  //   geoDataFile: `${MAPS_DIR}/washington.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'washington-distinct',
  // },
  // 'West Virginia': {
  //   name: 'West Virginia',
  //   geoDataFile: `${MAPS_DIR}/west-virginia.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'west-virginia-distinct',
  // },
  // 'Wisconsin': {
  //   name: 'Wisconsin',
  //   geoDataFile: `${MAPS_DIR}/wisconsin.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'wisconsin-distinct',
  // },
  // 'Wyoming': {
  //   name: 'Wyoming',
  //   geoDataFile: `${MAPS_DIR}/wyoming.json`,
  //   mapType: MAP_TYPES.STATE,
  //   graphObjectName: 'wyoming-distinct',
  // },
};

export default function ({
  states,
  stateDistrictWiseData,
  stateHighlighted,
  districtHighlighted,
}) {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState({});
  const [currentMap, setCurrentMap] = useState(mapMeta.US);

  useEffect(() => {
    // setStates(props.states);
    // setCurrentHoveredRegion()
  }, [states]);

  useEffect(() => {
    const region = getRegionFromState(states[1]);
    setCurrentHoveredRegion(region);
  }, [states]);

  useEffect(() => {
    const newMap = mapMeta['US'];
    setCurrentMap(newMap);
    if (stateHighlighted === null) {
      highlightRegionInMap(null, currentMap.mapType);
    } else {
      if (stateHighlighted !== undefined) {
        const regionHighlighted = getRegionFromState(stateHighlighted.state);
        setCurrentHoveredRegion(regionHighlighted);
        highlightRegionInMap(regionHighlighted.name, currentMap.mapType);
        setSelectedRegion(regionHighlighted.name);
      }
    }
  }, [stateHighlighted]);

  useEffect(() => {
    if (districtHighlighted === null) {
      highlightRegionInMap(null, currentMap.mapType);
      return;
    }
    const newMap = mapMeta[districtHighlighted?.state.state];
    if (!newMap) {
      return;
    }
    setCurrentMap(newMap);
    setHoveredRegion(districtHighlighted?.district, newMap);
    highlightRegionInMap(districtHighlighted?.district, currentMap.mapType);
    setSelectedRegion(districtHighlighted?.district);
  }, [districtHighlighted]);

  if (!currentHoveredRegion) {
    return null;
  }

  const [statistic, currentMapData] = useMemo(() => {
    const statistic = {total: 0, maxConfirmed: 0};
    let currentMapData = {};

    if (currentMap.mapType === MAP_TYPES.COUNTRY) {
      currentMapData = states.reduce((acc, state) => {
        if (state.state === 'Total') {
          return acc;
        }
        const confirmed = parseInt(state.confirmed);
        statistic.total += confirmed;
        if (confirmed > statistic.maxConfirmed) {
          statistic.maxConfirmed = confirmed;
        }

        acc[state.state] = state.confirmed;
        return acc;
      }, {});
    } else if (currentMap.mapType === MAP_TYPES.STATE) {
      const districtWiseData = (
        stateDistrictWiseData[currentMap.name] || {districtData: {}}
      ).districtData;
      currentMapData = Object.keys(districtWiseData).reduce((acc, district) => {
        const confirmed = parseInt(districtWiseData[district].confirmed);
        statistic.total += confirmed;
        if (confirmed > statistic.maxConfirmed) {
          statistic.maxConfirmed = confirmed;
        }
        acc[district] = districtWiseData[district].confirmed;
        return acc;
      }, {});
    }
    return [statistic, currentMapData];
  }, [currentMap]);

  const setHoveredRegion = (name, currentMap) => {
    if (currentMap.mapType === MAP_TYPES.COUNTRY) {
      setCurrentHoveredRegion(
        getRegionFromState(states.filter((state) => name === state.state)[0])
      );
    } else if (currentMap.mapType === MAP_TYPES.STATE) {
      const state = stateDistrictWiseData[currentMap.name] || {
        districtData: {},
      };
      let districtData = state.districtData[name];
      if (!districtData) {
        districtData = {
          confirmed: 0,
          active: 0,
          deaths: 0,
          recovered: 0,
        };
      }
      setCurrentHoveredRegion(getRegionFromDistrict(districtData, name));
    }
  };

  const getRegionFromDistrict = (districtData, name) => {
    if (!districtData) {
      return;
    }
    const region = {...districtData};
    if (!region.name) {
      region.name = name;
    }
    return region;
  };

  const getRegionFromState = (state) => {
    if (!state) {
      return;
    }
    const region = {...state};
    if (!region.name) {
      region.name = region.state;
    }
    return region;
  };

  const switchMapToState = (name) => {
    const newMap = mapMeta[name];
    if (!newMap) {
      return;
    }
    setCurrentMap(newMap);
    if (newMap.mapType === MAP_TYPES.COUNTRY) {
      setHoveredRegion(states[1].state, newMap);
    } else if (newMap.mapType === MAP_TYPES.STATE) {
      const districtData = (stateDistrictWiseData[name] || {districtData: {}})
        .districtData;
      const topDistrict = Object.keys(districtData)
        .filter((name) => name !== 'Unknown')
        .sort((a, b) => {
          return districtData[b].confirmed - districtData[a].confirmed;
        })[0];
      setHoveredRegion(topDistrict, newMap);
    }
  };
  const {name, lastupdatedtime} = currentHoveredRegion;
  return (
    <div className="MapExplorer fadeInUp" style={{animationDelay: '1.2s'}}>
      <div className="header">
        <h1>{currentMap.name} Map</h1>
        <h6>
          Hover over a{' '}
          {currentMap.mapType === MAP_TYPES.COUNTRY ? 'state' : 'district'} for
          more details
        </h6>
      </div>

      <div className="map-stats">
        <div className="stats">
          <h5>Confirmed</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.confirmed}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-blue">
          <h5>Active</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.active || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-green">
          <h5>Recovered</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.recovered || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-gray">
          <h5>Deceased</h5>
          <div className="stats-bottom">
            <h1>{currentHoveredRegion.deaths || ''}</h1>
            <h6>{}</h6>
          </div>
        </div>
      </div>

      <div className="meta">
        <h2>{name}</h2>
        {lastupdatedtime && (
          <div
            className={`last-update ${
              currentMap.mapType === MAP_TYPES.STATE
                ? 'district-last-update'
                : 'state-last-update'
            }`}
          >
            <h6>Last Updated</h6>
            <h3>
              {isNaN(Date.parse(formatDate(lastupdatedtime)))
                ? ''
                : formatDistance(
                    new Date(formatDate(lastupdatedtime)),
                    new Date()
                  ) + ' Ago'}
            </h3>
          </div>
        )}

        {currentMap.mapType === MAP_TYPES.STATE &&
        currentMapData.Unknown > 0 ? (
          <h4 className="unknown">
            Districts unknown for {currentMapData.Unknown} people
          </h4>
        ) : null}

        {currentMap.mapType === MAP_TYPES.STATE ? (
          <div
            className="button back-button"
            onClick={() => switchMapToState('US')}
          >
            Back
          </div>
        ) : null}
      </div>

      <ChoroplethMap
        statistic={statistic}
        mapMeta={currentMap}
        mapData={currentMapData}
        setHoveredRegion={(region) => setHoveredRegion(region, currentMap)}
        changeMap={switchMapToState}
        selectedRegion={selectedRegion}
      />
    </div>
  );
}
