// import uuid from 'uuid';

const initialState = {

  resorts: [
    {
      id: '81e32949-79e7-43ff-a677-38c1c27c1fe6',
      name: 'Squaw Valley',
      location: 'Olympic Valley, CA 96146',
      status: 'Open',
      weather: {
        condition: 'snow',
        temprature: 28,
        base: 'Powder',
        newSnow: 8,
        snowDepth: 180,
      },
      lifts: {
        total: 10,
        open: 5,
      },
      trails: {
        total: 23,
        open: 18,
      },
      routes: {
        hw50: {
          status: 'Closed',
          chains: 'R1',
        },
        hw80: {
          status: 'Open',
          chains: 'R2',
        },
        hw88: {
          status: 'Closed',
          chains: 'R1',
        },
      },
    },
    {
      id: '81e32949-79e7-43ff-a678-38c1c27c1fe6',
      name: 'Sierra-at-Tahoe',
      location: 'Twin Bridges, CA 96146',
      status: 'Closed',
      weather: {
        condition: 'thunderstorm',
        temprature: 40,
        base: 'Slush',
        newSnow: 12,
        snowDepth: 130,
      },
      lifts: {
        total: 8,
        open: 5,
      },
      trails: {
        total: 40,
        open: 16,
      },
      routes: {
        hw50: {
          status: 'Open',
          // chains: 'R1',
        },
        hw80: {
          status: 'Closed',
          // chains: 'R1',
        },
        hw88: {
          status: 'Closed',
          // chains: 'R1',
        },
      },
    },
  ],
};

function reducer(state = initialState, action) {
  return state;
}

export default reducer;
