# API_Bloging
Blog API

### Signup User

- Route: /signup
- Method: POST
- Body: 
```
{
  "password": "Password1",
  "firstName": "Jame",
  "lastName": "Bond",
  "email": "test@test.com",
  
}
```
RESPONSE
{
  "message": "Signup successful",
  "user": {
    "firstName": "Jame",
    "lastName": "Bond",
    "email": "test@test.com",
    "password": "$2b$10$k7boDIdyVejyYcqyzcRkieFTfp/jfBHJaZu1EIshbThXd7quzPLp.",
    "posts": [],
    "_id": "636bf97d04a0d205cbd00960",
    "__v": 0
  }
}

### Login User

- Route: /login
- Method: POST
- Body: 
```
{
    "email": "user@example.com",
    "password": "Password123"  
}
```
RESPONSE
{
  "message": "Logged in Successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNmMxMWMyMGIwODg4ZjFmYzIyNjE2NSIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSJ9LCJpYXQiOjE2NjgwMzE3NDIsImV4cCI6MTY2ODAzNTM0Mn0.z1KxiWZ8wOczj-iVghmObi62QKXj5tud_kGqDZ2QwQo"
}

=====
#### CREATING A POST
- Route: /post
- Method: POST
- Header
    - Authorization: Bearer {token}
- Body: 
```
{
  "title": "The Invisible2 ",
  "description": "We begin to edit with the variables tab. We add a new variable called token. We plan to update this variable automatically, once a user is authenticated and a",
  "tags": ["ALT-School"],
  "body": "We begin to edit with the variables tab. We add a new variable called token. We plan to update this variable automatically, once a user is authenticated and a"
}
```

- Responses

Success
```
{
  "message": "Post saved successfully",
  "savedPost": {
    "created_at": "2022-11-10T09:10:31.197Z",
    "title": "The Invisible2 ",
    "description": "We begin to edit with the variables tab. We add a new variable called token. We plan to update this variable automatically, once a user is authenticated and a",
    "author": "636caf4ad706dff3667ab532",
    "state": "draft",
    "read_count": 0,
    "reading_time": 1,
    "tags": [
      "ALT-School"
    ],
    "body": "We begin to edit with the variables tab. We add a new variable called token. We plan to update this variable automatically, once a user is authenticated and a",
    "_id": "636cc007e0cb4c16ea712f6d",
    "__v": 0
  }
}
### Get All Published Blogs

- Route: /post
- Method: GET
- Header
    - Authorization: Bearer {token}
- Query params: 
    - page (default: 0)
    - skip (default: 20)
    - order_by (options: timestamp| read_count)

- Responses

Success
```

```
---
