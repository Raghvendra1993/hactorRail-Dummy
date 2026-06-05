'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { v4: uuidv4 } = require('uuid');

module.exports = createCoreController('api::booking.booking', ({ strapi }) => ({
  async create(ctx) {
    const { trainId, travelDate, passengers, selectedClass, seats, contactEmail, contactPhone, specialRequests } = ctx.request.body.data;

    // Generate unique booking reference
    const bookingReference = 'HR-' + uuidv4().split('-')[0].toUpperCase();

    // Get train details for price calculation
    const train = await strapi.entityService.findOne('api::train.train', trainId);
    if (!train) return ctx.notFound('Train not found');

    const pricePerPerson = train.classes?.[selectedClass]?.price || 29.90;
    const totalPrice = pricePerPerson * passengers.length;

    const booking = await strapi.entityService.create('api::booking.booking', {
      data: {
        bookingReference,
        train: trainId,
        user: ctx.state.user?.id,
        travelDate,
        passengers,
        selectedClass,
        seats,
        totalPrice,
        currency: 'EUR',
        status: 'confirmed',
        paymentStatus: 'paid',
        contactEmail,
        contactPhone,
        specialRequests,
        publishedAt: new Date(),
      },
    });

    return ctx.send({ data: booking });
  },

  async myBookings(ctx) {
    if (!ctx.state.user) return ctx.unauthorized();

    const bookings = await strapi.entityService.findMany('api::booking.booking', {
      filters: { user: ctx.state.user.id },
      populate: { train: true },
      sort: { createdAt: 'desc' },
    });

    return ctx.send({ data: bookings });
  },

  async cancel(ctx) {
    const { id } = ctx.params;
    if (!ctx.state.user) return ctx.unauthorized();

    const booking = await strapi.entityService.findOne('api::booking.booking', id, {
      populate: { user: true },
    });

    if (!booking) return ctx.notFound();
    if (booking.user?.id !== ctx.state.user.id) return ctx.forbidden();

    const updated = await strapi.entityService.update('api::booking.booking', id, {
      data: { status: 'cancelled' },
    });

    return ctx.send({ data: updated });
  },
}));
