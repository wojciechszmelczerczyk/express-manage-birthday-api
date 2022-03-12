# Manage birthday app

## Description

Simple app to manage your birthday party!

## Techstack

- `JavaScript`
- `Express.js`
- `PostgreSQL`

## Env setup

Create `.env` file and setup variables

```
DB_USER=your_db_user_name
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_PORT=your_db_port
```

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
