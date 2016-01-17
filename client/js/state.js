export default {
  people: [{
    _id: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Scott Grogan'
  }],
  goals: [{
    _id: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Lead the XP reading group',
    description: 'Descended from astronomers bits of moving fluff, paroxysm of global death, Vangelis. Billions upon billions another world tesseract a still more glorious dawn awaits rings of Uranus something incredible is waiting to be known across the centuries cosmic ocean the carbon in our apple pies network of wormholes, white dwarf worldlets colonies, muse about.',
    created_on: '2016-01-01T15:55:45-08:00',
    updated_on: '2016-01-07T15:55:45-08:00'
  }],
  tasks: [{
    _id: 'ea4d4fce-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    name: 'Schedule regular meeting and send the invite to all teams', deadline: '2016-01-22T15:55:45-08:00',
    completed_on: null
  }],
  comments: [{
    _id: 'e691a584-bca5-11e5-9912-ba0be0483c18',
    _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    date: '2016-01-15T15:55:45-08:00',
    author: 'Foobar',
    message: 'Emerged into consciousness the ash of stellar alchemy a very small stage in a vast cosmic arena.'
  }]
};
