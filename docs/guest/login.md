# Authenticate user

## Description

Authenticate user.

<b>URL:</b> `/guest/auth`

<b>Method:</b> `POST`

<b>Authorized:</b> `NO`

## Data constraints

```json
{
  "uuid": "[string (uuid format)]"
}
```

## Data example

```json
{
  "uuid": "3e983551-2dd7-48b8-97a7-45af40ff7714"
}
```

## Success Response

Code: `200 OK`

Condition: If provided data is correct.

### Context example

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInA3cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IndvamNpZWNaIiwic3VybmFtZSI6Indvd28iLCJpc093bmVyIjpmYWxzZSwiaWF0IjoxNjczMjg1OTYwLCJleHAiOjd2NzMyODYyMTl9.LVXfeN7R2KuySSLUClWMqAQo4EzihBybYUJv-ejnvkg"
}
```
