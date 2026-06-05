'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::train.train', ({ strapi }) => ({
  async search(ctx) {
    const { origin, destination, date, passengers = 1, class: travelClass = 'second' } = ctx.query;

    if (!origin || !destination || !date) {
      return ctx.badRequest('origin, destination, and date are required');
    }

    const trains = await strapi.entityService.findMany('api::train.train', {
      filters: {
        origin: { $containsi: origin },
        destination: { $containsi: destination },
        isActive: true,
      },
      populate: '*',
    });

    // Calculate pricing based on date, passengers, and class
    const results = trains.map(train => {
      const basePrice = train.classes?.[travelClass]?.price || 29.90;
      const totalPrice = basePrice * parseInt(passengers);
      const availableSeats = train.classes?.[travelClass]?.seats || 100;

      return {
        ...train,
        searchDate: date,
        passengers: parseInt(passengers),
        selectedClass: travelClass,
        pricing: {
          perPerson: basePrice,
          total: totalPrice,
          currency: 'EUR',
        },
        availability: {
          seats: availableSeats,
          status: availableSeats > 20 ? 'available' : availableSeats > 0 ? 'limited' : 'sold_out',
        },
      };
    });

    return ctx.send({ data: results, meta: { total: results.length } });
  },

  async stations(ctx) {
    const trains = await strapi.entityService.findMany('api::train.train', {
      filters: { isActive: true },
    });

    const stationSet = new Set();
    trains.forEach(t => {
      stationSet.add(t.origin);
      stationSet.add(t.destination);
      if (t.stops) t.stops.forEach(s => stationSet.add(s.name));
    });

    return ctx.send({ data: Array.from(stationSet).sort() });
  },
}));
