/* eslint-disable */

//

const sampleResponse = {
  jsonapi: {
    version: '1.0',
  },
  meta: {
    count: 3,
    total: 3,
  },
  links: {
    self: '/v1/warehouse/flight_plan',
  },
  data: [
    {
      type: 'Any',
      attributes: {
        temporal_entity_id: '67151bea-a136-4168-b690-aa298d6ebd01',
        active_range: [
          {
            value: '2019-04-25T04:24:45.102Z',
            inclusive: true,
          },
          {
            value: null,
            inclusive: true,
          },
        ],
        updated_by: 'dpadmin',
        protected_data_tags_read: ['nsrigbigp'],
        protected_data_tags_upsert: [],
        protected_data_tags_delete: [],
        flight_plan_id: '9BDF314',
        aircraft_id: '0E640B',
        departure_station_icao_id: 'KDFW',
        arrival_station_icao_id: 'KSEA',
        alternate_station_icao_id: null,
        flight_plan_timestamp: '2019-04-09T16:04:42.225Z',
        flight_time_range: [
          {
            value: '2019-04-09T16:29:00.000Z',
            inclusive: true,
          },
          {
            value: '2019-04-09T20:17:00.000Z',
            inclusive: false,
          },
        ],
        flight_plan_route: 'HRPER3 HULZE DCT PNH DCT KD48U DCT MTU DCT OGD/N0447F340 DCT PDT CHINS3',
      },
    },
    {
      type: 'Any',
      attributes: {
        temporal_entity_id: 'f18275a4-c161-484a-a739-d45e11761933',
        active_range: [
          {
            value: '2019-04-25T04:24:45.102Z',
            inclusive: true,
          },
          {
            value: null,
            inclusive: true,
          },
        ],
        updated_by: 'dpadmin',
        protected_data_tags_read: ['nsrigbigp'],
        protected_data_tags_upsert: [],
        protected_data_tags_delete: [],
        flight_plan_id: '9BDF754',
        aircraft_id: '0E640B',
        departure_station_icao_id: 'KSEA',
        arrival_station_icao_id: 'KDFW',
        alternate_station_icao_id: null,
        flight_plan_timestamp: '2019-04-09T16:05:40.000Z',
        flight_time_range: [
          {
            value: '2019-04-09T20:59:00.000Z',
            inclusive: true,
          },
          {
            value: '2019-04-10T00:47:00.000Z',
            inclusive: false,
          },
        ],
        flight_plan_route: 'HRPER3 HULZE DCT PNH DCT KD48U DCT MTU DCT OGD/N0447F340 DCT PDT CHINS3',
      },
    },
    {
      type: 'Any',
      attributes: {
        temporal_entity_id: '365d3c89-e03f-428c-87fa-8431d8f6ce82',
        active_range: [
          {
            value: '2019-04-26T17:50:33.009Z',
            inclusive: true,
          },
          {
            value: null,
            inclusive: true,
          },
        ],
        updated_by: 'dpadmin',
        protected_data_tags_read: ['nsrigbigp'],
        protected_data_tags_upsert: [],
        protected_data_tags_delete: [],
        flight_plan_id: '8C47211',
        aircraft_id: '0E640B',
        departure_station_icao_id: 'KSFO',
        arrival_station_icao_id: 'KDFW',
        alternate_station_icao_id: null,
        flight_plan_timestamp: '2019-04-09T13:25:38.403Z',
        flight_time_range: [
          {
            value: '2019-04-09T13:25:00.000Z',
            inclusive: true,
          },
          {
            value: '2019-04-09T16:12:00.000Z',
            inclusive: false,
          },
        ],
        flight_plan_route: 'HRPER3 HULZE DCT PNH DCT KD48U DCT MTU DCT OGD/N0447F340 DCT PDT CHINS3',
      },
    },
  ],
};
