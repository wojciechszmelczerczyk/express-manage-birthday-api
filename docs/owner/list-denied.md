# Get list of guests

## Description

Get list of guests who have denied an invitation.

<b>URL:</b> `/owner/list/denied`

<b>Method:</b> `GET`

<b>Authorized:</b> `YES`

<b>Role:</b> `Admin`

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

API return list of users who have denied invitation.

```json
[
  {
    "name": "Wojciech",
    "surname": "Kowalski"
  },
  {
    "name": "John",
    "surname": "Novak"
  }
]
```

## Error Response

Code: `400 BAD REQUEST`

Condition: Condition: if user doesn't have admin role.

```json
{ "no_admin_error": "you don't have access to owner resources" }
```
