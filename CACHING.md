# Caching Strategy

## Endpoint Cached
GET /tasks

## How it Works
- Stores response in memory
- Valid for 60 seconds

## Cache Invalidation
- On create/update/delete

## Limitation
- Lost on server restart
- Not scalable