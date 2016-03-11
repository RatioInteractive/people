export default {
  // The current user
  user: {
    _id: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Scott Grogan'
  },

  // The people referred to by the goals, tasks or comments
  people: [{
    _id: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Scott Grogan'
  }, {
    _id: '7ca8de1f-e565-4b7f-9914-7284ea582933',
    name: 'David Rieman'
  }, {
    _id: '7cf56c45-2712-4f59-a3e5-64d174614534',
    name: 'Ben McEldowney'
  }, {
    _id: 'bd0cb484-60e0-474b-a7f0-dbf91857c9e9',
    name: 'Elrond Sheppard'
  }, {
    _id: 'cc1c2592-7aab-4bc6-a513-108e29971b43',
    name: 'Chris Johnson'
  }, {
    _id: '7fd8cf79-133e-433c-a373-e78a63fb1d18',
    name: 'Daniel Harrie'
  }],

  // High-level goals with descriptions and deadlines
  goals: [{
    _id: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Lead the XP reading group',
    description: 'Descended from astronomers bits of moving fluff, paroxysm of global death, Vangelis. Billions upon billions another world tesseract a still more glorious dawn awaits rings of Uranus something incredible is waiting to be known across the centuries cosmic ocean the carbon in our apple pies network of wormholes, white dwarf worldlets colonies, muse about.',
    created_on: '2016-01-01T15:55:45-08:00',
    updated_on: '2016-01-07T15:55:45-08:00'
  },
  {
    _id: 'e967e8c6-e981-4ea5-b40f-844244a85633',
    _parent: '7fd8cf79-133e-433c-a373-e78a63fb1d18',
    name: 'Attend the XP reading group',
    description: 'Descended from astronomers bits of moving fluff, paroxysm of global death, Vangelis. Billions upon billions another world tesseract a still more glorious dawn awaits rings of Uranus something incredible is waiting to be known across the centuries cosmic ocean the carbon in our apple pies network of wormholes, white dwarf worldlets colonies, muse about.',
    created_on: '2016-01-01T15:55:45-08:00',
    updated_on: '2016-01-07T15:55:45-08:00'
  }],

  // Low-level tasks. These are often children of goals.
  tasks: [{
    _id: 'ea4d4fce-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    name: 'Schedule regular meeting and send the invite to all teams',
    completed_on: null
  }],

  // Arbitrary comments. May be children of any top-level object.
  comments: [{
    _id: 'e691a584-bca5-11e5-9912-ba0be0483c18',
    _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    date: '2016-01-15T15:55:45-08:00',
    author: 'Foobar',
    message: 'Emerged into consciousness the ash of stellar alchemy a very small stage in a vast cosmic arena.'
  }],

  // team: [{
  //   _id: 'f67e7086-601f-43c8-863f-0debd076a79a',
  //   _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
  //   teamMemberIds: [
  //     '7ca8de1f-e565-4b7f-9914-7284ea582933',
  //     '7cf56c45-2712-4f59-a3e5-64d174614534',
  //     'bd0cb484-60e0-474b-a7f0-dbf91857c9e9',
  //     'cc1c2592-7aab-4bc6-a513-108e29971b43',
  //     '7fd8cf79-133e-433c-a373-e78a63fb1d18',
  //     ]
  // }]
};
