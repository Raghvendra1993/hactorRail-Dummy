# Strapi Permissions Setup

After running `npm run develop` for the first time, you need to
configure API permissions in the Strapi admin panel.

## Steps

1. Open http://localhost:1337/admin
2. Create your admin account (first time only)
3. Go to **Settings → Users & Permissions Plugin → Roles**
4. Click on **Public** role
5. Enable these permissions:

### Train (api::train.train)
- [x] find
- [x] findOne
- [x] search  ← custom route
- [x] stations ← custom route

### Booking (api::booking.booking)
- [x] create
- [x] findOne

### Authenticated role (for logged-in users)
- [x] booking.myBookings
- [x] booking.cancel
- [x] booking.create
- [x] booking.findOne

6. Click **Save**

## Test the API

```bash
# Search trains
curl "http://localhost:1337/api/trains/search?origin=Stockholm&destination=Gothenburg&date=2024-12-01&passengers=1&class=second"

# List all stations
curl "http://localhost:1337/api/trains/stations"

# Register a user
curl -X POST http://localhost:1337/api/auth/local/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"Password123"}'

# Login
curl -X POST http://localhost:1337/api/auth/local \
  -H "Content-Type: application/json" \
  -d '{"identifier":"test@example.com","password":"Password123"}'
```
