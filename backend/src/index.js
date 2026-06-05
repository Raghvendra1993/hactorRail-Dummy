'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    const trainCount = await strapi.entityService.count('api::train.train');
    if (trainCount > 0) {
      console.log(`✅ Database already has ${trainCount} trains — skipping seed.`);
      return;
    }

    console.log('🌱 Seeding train data...');

    const trains = [
      {
        trainNumber: 'IC-101', trainName: 'Midnight Express', trainType: 'IC',
        origin: 'Stockholm', destination: 'Gothenburg',
        departureTime: '06:30', arrivalTime: '09:00', duration: 150,
        stops: [{ name: 'Södertälje', time: '06:55' }, { name: 'Falköping', time: '08:20' }],
        classes: { first: { price: 89.9, seats: 40 }, second: { price: 49.9, seats: 120 } },
        amenities: ['wifi', 'restaurant', 'power_outlets', 'bike_storage'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'IC-102', trainName: 'Nordic Arrow', trainType: 'IC',
        origin: 'Gothenburg', destination: 'Stockholm',
        departureTime: '07:15', arrivalTime: '09:45', duration: 150,
        stops: [{ name: 'Falköping', time: '07:55' }, { name: 'Södertälje', time: '09:20' }],
        classes: { first: { price: 89.9, seats: 40 }, second: { price: 49.9, seats: 120 } },
        amenities: ['wifi', 'restaurant', 'power_outlets'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'EC-201', trainName: 'Scandinavian Star', trainType: 'EC',
        origin: 'Stockholm', destination: 'Oslo',
        departureTime: '08:00', arrivalTime: '14:30', duration: 390,
        stops: [{ name: 'Karlstad', time: '10:15' }, { name: 'Kongsvinger', time: '13:00' }],
        classes: { first: { price: 149.9, seats: 30 }, second: { price: 89.9, seats: 100 } },
        amenities: ['wifi', 'restaurant', 'bar', 'power_outlets', 'bike_storage'],
        operatingDays: ['Mon','Wed','Fri','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'IC-303', trainName: 'Coastal Flyer', trainType: 'IC',
        origin: 'Stockholm', destination: 'Malmö',
        departureTime: '09:45', arrivalTime: '13:15', duration: 210,
        stops: [{ name: 'Norrköping', time: '11:00' }, { name: 'Alvesta', time: '12:30' }],
        classes: { first: { price: 109.9, seats: 50 }, second: { price: 59.9, seats: 150 } },
        amenities: ['wifi', 'snack_bar', 'power_outlets'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'IC-304', trainName: 'Baltic Wind', trainType: 'IC',
        origin: 'Malmö', destination: 'Stockholm',
        departureTime: '14:30', arrivalTime: '18:00', duration: 210,
        stops: [{ name: 'Alvesta', time: '15:10' }, { name: 'Norrköping', time: '17:00' }],
        classes: { first: { price: 109.9, seats: 50 }, second: { price: 59.9, seats: 150 } },
        amenities: ['wifi', 'restaurant', 'power_outlets'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'ICE-401', trainName: 'Northern Light', trainType: 'ICE',
        origin: 'Stockholm', destination: 'Sundsvall',
        departureTime: '11:00', arrivalTime: '14:45', duration: 225,
        stops: [{ name: 'Uppsala', time: '11:40' }, { name: 'Gävle', time: '12:50' }],
        classes: { first: { price: 129.9, seats: 35 }, second: { price: 69.9, seats: 110 } },
        amenities: ['wifi', 'restaurant', 'bar', 'power_outlets', 'quiet_zone'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'NIT-501', trainName: 'Polar Night', trainType: 'Night',
        origin: 'Stockholm', destination: 'Kiruna',
        departureTime: '22:00', arrivalTime: '14:00', duration: 960,
        stops: [
          { name: 'Uppsala', time: '22:40' }, { name: 'Gävle', time: '23:50' },
          { name: 'Sundsvall', time: '01:30' }, { name: 'Östersund', time: '04:15' },
          { name: 'Boden', time: '10:30' },
        ],
        classes: { first: { price: 199.9, seats: 20 }, second: { price: 129.9, seats: 60 } },
        amenities: ['wifi', 'restaurant', 'sleeper_cabin', 'shower', 'luggage_storage'],
        operatingDays: ['Mon','Wed','Fri','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'REG-601', trainName: 'Lake Region Express', trainType: 'Regional',
        origin: 'Gothenburg', destination: 'Karlstad',
        departureTime: '10:15', arrivalTime: '13:00', duration: 165,
        stops: [{ name: 'Alingsås', time: '10:50' }, { name: 'Skövde', time: '11:55' }],
        classes: { second: { price: 39.9, seats: 180 } },
        amenities: ['wifi', 'power_outlets', 'bike_storage'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'IC-701', trainName: 'Fjord Runner', trainType: 'IC',
        origin: 'Oslo', destination: 'Bergen',
        departureTime: '08:05', arrivalTime: '14:55', duration: 410,
        stops: [{ name: 'Drammen', time: '08:35' }, { name: 'Voss', time: '13:50' }],
        classes: { first: { price: 159.9, seats: 30 }, second: { price: 99.9, seats: 120 } },
        amenities: ['wifi', 'restaurant', 'bar', 'power_outlets'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
      {
        trainNumber: 'IC-702', trainName: 'Atlantic Express', trainType: 'IC',
        origin: 'Bergen', destination: 'Oslo',
        departureTime: '15:35', arrivalTime: '22:25', duration: 410,
        stops: [{ name: 'Voss', time: '16:25' }, { name: 'Drammen', time: '22:00' }],
        classes: { first: { price: 159.9, seats: 30 }, second: { price: 99.9, seats: 120 } },
        amenities: ['wifi', 'restaurant', 'power_outlets'],
        operatingDays: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        isActive: true, publishedAt: new Date(),
      },
    ];

    for (const train of trains) {
      await strapi.entityService.create('api::train.train', { data: train });
    }

    console.log(`✅ Seeded ${trains.length} trains successfully!`);
  },
};
