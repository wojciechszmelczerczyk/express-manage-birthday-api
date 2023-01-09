# Download invitation

## Description

Download invitation to txt file.

<b>URL:</b> `/guest/download-invitation`

<b>Method:</b> `GET`

<b>Authorized:</b> `YES`

<b>Role:</b> `Admin`

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

API return list of user who didn't submit their invitation status.

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

Condition: if user doesn't have admin role.

```json
{ "no_admin_error": "you don't have access to owner resources" }
```
