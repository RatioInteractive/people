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
  }],

  // High-level goals with descriptions and deadlines
  goals: [{
    _id: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Lead the XP reading group',
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
  }]
};
