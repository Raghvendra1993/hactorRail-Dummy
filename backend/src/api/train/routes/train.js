'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/trains',
      handler: 'train.find',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/trains/search',
      handler: 'train.search',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/trains/stations',
      handler: 'train.stations',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/trains/:id',
      handler: 'train.findOne',
      config: { auth: false },
    },
    {
      method: 'POST',
      path: '/trains',
      handler: 'train.create',
    },
    {
      method: 'PUT',
      path: '/trains/:id',
      handler: 'train.update',
    },
    {
      method: 'DELETE',
      path: '/trains/:id',
      handler: 'train.delete',
    },
  ],
};
