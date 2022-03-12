# Manage birthday app

## Description

Simple app to manage your birthday party!

## Techstack

- `JavaScript`
- `Express.js`
- `PostgreSQL`

## Env setup

Create `.env` file and setup variables.

```
DB_USER=your_db_user_name
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_PORT=your_db_port
```

## Application Architecture

[![](https://mermaid.ink/img/pako:eNo1zj0OgkAQBeCrTKaGC1CYQLCwM2rHUozsIERgcZg1IcDdXf-mesX38mbBylnGBG9CYwOX3AwQLi1OPGntO0iPhxLieAfrKO7ZWoaHZ5lXyIqclK40cfnpZF8lrF4GEJ58pyukGGHP0lNrw8jylga14Z4NJiFakrtBM2zB-dGS8t626gSTmrqJIySv7jwPFSYqnv8obyk83P_U9gIlREJ4)](https://mermaid.live/edit#pako:eNo1zj0OgkAQBeCrTKaGC1CYQLCwM2rHUozsIERgcZg1IcDdXf-mesX38mbBylnGBG9CYwOX3AwQLi1OPGntO0iPhxLieAfrKO7ZWoaHZ5lXyIqclK40cfnpZF8lrF4GEJ58pyukGGHP0lNrw8jylga14Z4NJiFakrtBM2zB-dGS8t626gSTmrqJIySv7jwPFSYqnv8obyk83P_U9gIlREJ4)

## Database Architecture

[![](https://mermaid.ink/img/pako:eNptj8EKwzAIhl8leO4T5LyxB-iOgSHVdmFNUow5jNJ3X7q2jI150d_vV3SGLhGDhW7EnE8eB8Hgoqnx7phL4ayrNFt309a0Kj4OJmLgvyAX-WEfpKglf5GrDzVjmExI5HvPdDtc0EBgCeipXjmvUw70znU12FoSysOBi0v1lYlQ-Uxek4DtcczcABZN7TN2YFUKH6b90921vADHO1kM)](https://mermaid.live/edit#pako:eNptj8EKwzAIhl8leO4T5LyxB-iOgSHVdmFNUow5jNJ3X7q2jI150d_vV3SGLhGDhW7EnE8eB8Hgoqnx7phL4ayrNFt309a0Kj4OJmLgvyAX-WEfpKglf5GrDzVjmExI5HvPdDtc0EBgCeipXjmvUw70znU12FoSysOBi0v1lYlQ-Uxek4DtcczcABZN7TN2YFUKH6b90921vADHO1kM)

## Endpoints

### Guest

| Endpoint                     | Method | Authenticated | Action                   |
| :--------------------------- | :----- | :-----------: | ------------------------ |
| `/guest/register`            | POST   |       -       | Register guest           |
| `/guest/auth`                | POST   |       -       | Authenticate guest       |
| `/guest/change-status`       | GET    |      \*       | Change invitation status |
| `/guest/download-invitation` | GET    |      \*       | Download invitation      |

### Owner

| Endpoint                           | Method | Authenticated | Action                             |
| :--------------------------------- | :----- | :-----------: | ---------------------------------- |
| `/owner/list/accepted`             | GET    |      \*       | List users who accepted invitation |
| `/owner/list/denied`               | GET    |      \*       | List users who denied invtiation   |
| `/owner/list/accepted-then-denied` | GET    |      \*       | List users who change their mind   |

## Register

### Save new guest in the database.

```javascript
// add guest to database
const { name, surname, status, modified_status } = req.body;

// add guest query
const addGuestQuery =
  "INSERT INTO guest (name, surname, status, modified_status) VALUES ($1, $2, $3, $4) RETURNING *";

const queryValues = [name, surname, status, modified_status];

// add guest to database
const guest = await pool.query(addGuestQuery, queryValues);
```
