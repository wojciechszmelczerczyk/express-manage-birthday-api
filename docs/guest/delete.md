# Logout user

## Description

Logout user.

<b>URL:</b> `/guest/logout`

<b>Method:</b> `DELETE`

<b>Authorized:</b> `YES`

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

jwt deleted

## Error Response

Code: `400 BAD REQUEST`

Condition: if provided jwt is invalid.

```json
token is invalid
```
