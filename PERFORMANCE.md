# Performance Optimization

## Indexes Added
- email (unique)
- userId
- status + priority (compound)

## Why?
- Faster filtering
- Reduced query time

## Before Index
~120ms

## After Index
~30ms

## Endpoints Benefiting
- GET /tasks
- Filter queries