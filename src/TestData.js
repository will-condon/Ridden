export const mockRoute = {
  id: 'route1',
  name: 'Cambodia Loop',
  date: '2026-09-01',
  allRouteTags: ['MTB', 'Cash Only', 'Patchy'],

  description: {
    description: 'A scenic gravel loop through central Cambodia, passing rice paddies and small riverside towns.',
    image: null,
  },

  connectivity: {
    tags: ['Patchy', 'Cash Only'],
    description: 'ATMs are rare outside Phnom Penh, bring enough cash for 3-4 days.',
    image: null,
  },

  bikeAndTyres: {
    tags: ['MTB'],
    description: 'Ran 45mm gravel tyres, would recommend at least 40mm for the rougher sections.',
    image: null,
  },

  climate: {
    tags: ['Hot', 'Humid', 'Wet season risk'],
    description: 'Very hot in the afternoons, best to ride early morning and rest midday.',
    image: null,
  },

  stops: [
    {
      id: 'stop1',
      lat: 11.99,
      long: 105.46,

      sleepType: {
        tags: ['Camp'],
        description: 'Camped near a temple, locals let us use their water pump.',
        image: null,
      },

      foodType: {
        tags: ['Cooked'],
        description: 'Cooked over a fire, no shops nearby.',
        image: null,
      },

      extras: [
        {
          id: 'extra1',
          category: 'Hazard',
          tags: ['Terrain'],
          description: 'Steep descent with loose gravel right before the river crossing.',
          image: null,
        },
      ],
    },

    {
      id: 'stop2',
      lat: 11.56,
      long: 104.92,

      sleepType: {
        tags: ['Hostel'],
        description: 'Cheap hostel in town, $8 a night.',
        image: null,
      },

      foodType: {
        tags: ['Restaurant'],
        description: 'Plenty of street food options near the market.',
        image: null,
      },

      extras: [
        {
          id: 'extra2',
          category: 'Activity',
          tags: ['Swimming/Water'],
          description: 'Good swimming spot near the bridge, watch for current after rain.',
          image: null,
        },
        {
          id: 'extra3',
          category: 'Logistics',
          tags: ['Bike shop/Repair'],
          description: 'Small bike shop in town for basic repairs and tube swaps.',
          image: null,
        },
      ],
    },

    {
      id: 'stop3',
      lat: 11.02,
      long: 105.01,

      sleepType: {
        tags: ['Homestay'],
        description: 'Stayed with a local family, arranged on the day.',
        image: null,
      },

      foodType: {
        tags: ['Shop'],
        description: 'Small shop with basic supplies, no restaurant nearby.',
        image: null,
      },

      extras: [],
    },
  ],
};