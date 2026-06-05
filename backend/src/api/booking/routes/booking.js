'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/bookings',
      handler: 'booking.find',
    },
    {
      method: 'GET',
      path: '/bookings/my-bookings',
      handler: 'booking.myBookings',
    },
    {
      method: 'GET',
      path: '/bookings/:id',
      handler: 'booking.findOne',
    },
    {
      method: 'POST',
      path: '/bookings',
      handler: 'booking.create',
    },
    {
      method: 'PUT',
      path: '/bookings/:id/cancel',
      handler: 'booking.cancel',
    },
  ],
};
