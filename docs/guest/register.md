# Create User

## Description

Create user.

<b>URL:</b> `/guest/register`

<b>Method:</b> `POST`

<b>Authorized:</b> `NO`

## Data constraints

```json
{
  "name": "[string]",
  "surname": "[string]"
}
```

## Data example

```json
{
  "name": "Wojciech",
  "surname": "Kowalski"
}
```

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

```json
{
  "copy_uuid": "3e983551-2dd7-48b8-97a7-45af40ff7714"
}
```
