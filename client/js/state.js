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
    _id: '4c658e60-f39f-427c-a5cd-95129b60e929',
    _parent: '7fd8cf79-133e-433c-a373-e78a63fb1d18',
    name: 'Collaboratively administrate empowered markets via plug-and-play networks',
    description: 'Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    created_on: '2016-03-23T14:52:26-07:00',
    updated_on: '2016-03-23T14:52:26-07:00'
  }, {
    _id: 'd3b8465e-084c-46d5-8582-8a97233a39ca',
    _parent: 'cc1c2592-7aab-4bc6-a513-108e29971b43',
    name: 'Efficiently unleash cross-media information without cross-media value',
    description: 'Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.',
    created_on: '2016-03-23T14:52:00-07:00',
    updated_on: '2016-03-23T14:52:00-07:00'
  }, {
    _id: 'cf59bbe3-da9e-4619-a5a7-5042f798a6a0',
    _parent: 'bd0cb484-60e0-474b-a7f0-dbf91857c9e9',
    name: 'Completely synergize resource taxing relationships via premier niche markets',
    description: 'Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    created_on: '2016-03-23T14:51:36-07:00',
    updated_on: '2016-03-23T14:51:36-07:00'
  }, {
    _id: 'a0d8f5a0-5df2-438f-b683-2f467907de9d',
    _parent: '7cf56c45-2712-4f59-a3e5-64d174614534',
    name: 'Holistically pontificate installed base portals after maintainable products',
    description: 'Light years something incredible is waiting to be known science, hearts of the stars colonies, with pretty stories for which there\'s little good evidence prime number globular star cluster star stuff harvesting star light cosmic ocean! As a patch of light quasar intelligent beings rich in mystery across the centuries, something incredible is waiting to be known billions upon billions a mote of dust suspended in a sunbeam extraordinary claims require extraordinary evidence birth astonishment! Sea of Tranquility another world a mote of dust suspended in a sunbeam. Courage of our questions network of wormholes the only home we\'ve ever known, preserve and cherish that pale blue dot emerged into consciousness and billions upon billions upon billions upon billions upon billions upon billions upon billions?',
    created_on: '2016-03-23T14:49:40-07:00',
    updated_on: '2016-03-23T14:49:40-07:00'
  }, {
    _id: '34282294-25ad-4d50-a043-b541f90010ef',
    _parent: '7ca8de1f-e565-4b7f-9914-7284ea582933',
    name: 'Holisticly predominate extensible testing procedures for reliable supply chains',
    description: 'Edam mascarpone cheesy grin goat camembert de normandie fromage hard cheese taleggio. Bavarian bergkase bocconcini cheese triangles cut the cheese cauliflower cheese manchego cheese and biscuits cheeseburger. Camembert de normandie bocconcini st. agur blue cheese stilton squirty cheese.',
    created_on: '2016-03-23T14:47:04-07:00',
    updated_on: '2016-03-23T14:47:04-07:00'
  }, {
    _id: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'c5c84f5a-bc9c-11e5-9912-ba0be0483c18',
    name: 'Lead the XP reading group',
    description: 'Descended from astronomers bits of moving fluff, paroxysm of global death, Vangelis. Billions upon billions another world tesseract a still more glorious dawn awaits rings of Uranus something incredible is waiting to be known across the centuries cosmic ocean the carbon in our apple pies network of wormholes, white dwarf worldlets colonies, muse about.',
    created_on: '2016-01-01T15:55:45-08:00',
    updated_on: '2016-01-07T15:55:45-08:00'
  }, {
    _id: 'e967e8c6-e981-4ea5-b40f-844244a85633',
    _parent: '7fd8cf79-133e-433c-a373-e78a63fb1d18',
    name: 'Attend the XP reading group',
    description: 'Circumnavigated, great turbulent clouds made in the interiors of collapsing stars at the edge of forever.',
    created_on: '2016-01-01T15:55:45-08:00',
    updated_on: '2016-01-07T15:55:45-08:00'
  }],

  // Low-level tasks. These are often children of goals.
  tasks: [{
    _id: 'ea4d4fce-bc9c-11e5-9912-ba0be0483c18',
    _parent: 'db184996-bc9c-11e5-9912-ba0be0483c18',
    name: 'Schedule regular meeting and send the invite to all teams',
    completed_on: null
  }, {
    _id: '6a596cfb-3a71-4890-b881-fdc080336888',
    _parent: '34282294-25ad-4d50-a043-b541f90010ef',
    name: 'Objectively innovate empowered manufactured products whereas parallel platforms.',
    completed_on: null
  }, {
    _id: '31c49425-aef2-4068-8060-c43c89c86d3d',
    _parent: '34282294-25ad-4d50-a043-b541f90010ef',
    name: 'Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
    completed_on: null
  }, {
    _id: 'ae69f7ba-a85f-4e6b-88da-fa586886ef13',
    _parent: '34282294-25ad-4d50-a043-b541f90010ef',
    name: 'Kindling the energy hidden in matter, of brilliant syntheses.',
    completed_on: null
  }, {
    _id: 'fb9e89a7-b4e5-46cf-979e-8aba9e1b7425',
    _parent: 'e967e8c6-e981-4ea5-b40f-844244a85633',
    name: 'Chapters 1-5',
    completed_on: '2016-03-23T14:49:25-07:00'
  }, {
    _id: '87915f32-7782-4d54-bac9-b43f9fbfd75a',
    _parent: 'e967e8c6-e981-4ea5-b40f-844244a85633',
    name: 'Chapters 5-8',
    completed_on: '2016-03-23T14:49:25-07:00'
  }, {
    _id: 'cd461506-06ad-446c-989a-f855947f5716',
    _parent: 'e967e8c6-e981-4ea5-b40f-844244a85633',
    name: 'Chapters 9-12',
    completed_on: null
  }, {
    _id: '45a23261-dd6f-49d6-a4c6-18c2fb63934b',
    _parent: 'a0d8f5a0-5df2-438f-b683-2f467907de9d',
    name: 'Hypatia take root and flourish. Encyclopaedia galactica the ash of stellar alchemy!',
    completed_on: '2016-03-23T14:51:25-07:00'
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
