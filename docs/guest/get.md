# Download invitation

## Description

Download invitation to txt file.

<b>URL:</b> `/guest/download-invitation`

<b>Method:</b> `GET`

<b>Authorized:</b> `YES`

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

[Invitation file](../../example/invitation.txt)

## Error Response

Code: `400 BAD REQUEST`

Condition: if provided jwt is invalid.

```json
token is invalid
```
