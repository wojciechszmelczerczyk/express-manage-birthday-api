# Change invitation status

## Description

Change invitation status.

<b>URL:</b> `/guest/change-status`

<b>Method:</b> `PUT`

<b>Authorized:</b> `YES`

## Data constraints

```json
{
  "status": "[string ('accepted' or 'denied')]"
}
```

## Data example

```json
{
  "status": "accepted"
}
```

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

```json
{
  "status_updated_to": "accepted"
}
```

## Error Response

Code: `400 BAD REQUEST`

Condition: if guest has changed invitation status later than 5 hours before party date.

```json
{
  "change_too_late": "guest changed invitation status too late",
  "party_date": "2022-05-25 12:00:00.000",
  "your_invitation_change": "2023-01-09T17:40:24.105Z"
}
```

Code: `400 BAD REQUEST`

Condition: if provided jwt is invalid.

```json
token is invalid
```
