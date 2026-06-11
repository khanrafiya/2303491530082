# Stage 1 - Campus Notification System

## Priority Calculation

Notifications are prioritized based on type:

- Placement = 3
- Result = 2
- Event = 1

Higher priority notifications appear before lower priority notifications.

If two notifications have the same type, the newer notification should be shown first based on timestamp.

## Approach

1. Fetch notifications from the provided API.
2. Assign priority weights.
3. Sort notifications using:
   - Priority weight
   - Recency (timestamp)
4. Display top 10 notifications.

## Maintaining Top 10 Efficiently

A Min Heap of size 10 can be used.

Steps:

1. Insert incoming notifications into the heap.
2. If heap size exceeds 10, remove the lowest priority notification.
3. Heap always contains the top 10 most important notifications.
4. Time Complexity: O(log n) per insertion.

## Logging Middleware

Logging middleware is used to log:

- Incoming requests
- API calls
- Notification fetch events
- Errors
- Response status

This helps in monitoring and debugging the application.