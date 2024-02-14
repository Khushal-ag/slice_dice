<div align="center">

# slice-dice-api

</div>

## 🛠️ Getting Started

🚧 **Create `.env` file & add your own `ENV_VARIABLES` as mentioned in `.env.example` file.**

```bash
PORT=3000
MONGODB_URI = <Your MongoDB URI>
JWT_SECRET = <Your JWT Secret>
```

- 💻 **Run Project Locally(pnpm should be installed):**

```bash
pnpm i

pnpm dev
```

- 🐋 **Run with Docker:**

```bash
docker build -t slice-dice .

docker compose up
```

## APIs

```bash
Base URL: http://localhost:3000
```

### 1. Authentication

- An API to register a new user.

```json
Endpoint : /auth/register or /auth/signup
Method : POST
```

```json
Request Body :
{
    "name": "John Doe",
    "email": "J@test.com",
    "password": "password"
}
```

```json
Response :
{
  "message": "User created successfully",
  "data": {
    "name": "John Doe",
    "email": "J@test.com",
    "password": "$2b$12$dW7FT0Bssr93RsAz3rIyPeSfdFqiFu6mWU/jNSFSyEf7JL.EdOH6e",
    "_id": "65ccca8008279c0ab1db2beb",
    "__v": 0
  }
}
```

- An API to login a user.

```json
Endpoint : /auth/login or /auth/signin
Method : POST
```

```json
Request Body :
{
    "email": "J@test.com",
    "password": "password"
}
```

```json
Response :
{
  "message": "Login successful",
  "data": {
    "_id": "65ccca8008279c0ab1db2beb",
    "name": "John Doe",
    "email": "J@test.com",
    "password": "$2b$12$dW7FT0Bssr93RsAz3rIyPeSfdFqiFu6mWU/jNSFSyEf7JL.EdOH6e",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2NjYTgwMDgyNzljMGFiMWRiMmJlYiIsImlhdCI6MTcwNzkyMDIwNSwiZXhwIjoxNzA4NTI1MDA1fQ.wW4dCE749FlszNnYGJALlMdrsdgMT60A9vvH3Wj59l8"
}
```

### 2. Employees Record

- An API to upload all records from the sample **data.ts** dataset.

```json
Endpoint : /employee/upload
Method : GET
```

```json
Response :
{
  "message": "Data uploaded successfully",
    "data": "<Uploaded data>"
}
```

- An API to get all records from the dataset.

```json
Endpoint : /employee
Method : GET
```

```json
Response :
{
  "data": "<All records>"
}
```

- An API to add a new record to the dataset.

```json
Endpoint : /employee/add
Method : POST
```

```json
Request Body :
{
    "currency": "USD",
    "department": "Banking",
    "name": "John Doe",
    "on_contract (optional)": true,
    "salary": 908000,
    "sub_department": "Loan"
}
```

```json
Response :
{
  "message": "Employee added successfully",
  "data": {
    "currency": "USD",
    "department": "Banking",
    "name": "John Doe",
    "on_contract": true,
    "salary": 908000,
    "sub_department": "Loan",
    "_id": "65cccd9908279c0ab1db2bfa",
    "__v": 0
  }
}
```

- An API to delete a record from the dataset.

```json
Endpoint : /employee/delete/:id
Method : DELETE
```

```json
Response :
{
  "message": "Employee deleted successfully",
  "data": {
    "_id": "65cccd9908279c0ab1db2bfa",
    "currency": "USD",
    "department": "Banking",
    "name": "John Doe",
    "on_contract": true,
    "salary": 908000,
    "sub_department": "Loan",
    "__v": 0
  }
}
```

### 3. Summary Statistics

- An API to fetch Summary Statistics for salary over the entire dataset.

```json
Endpoint : /stats/all
Method : GET
```

```json
Response :
{
  "_id": null,
  "mean": 22295010,
  "min": 30,
  "max": 200000000
}
```

- An API to fetch Summary Statistics for salary for records which satisfy "on_contract": "true".

```json
Endpoint : /stats/contract
Method : GET
```

```json
Response :
{
  "_id": null,
  "mean": 100000,
  "min": 90000,
  "max": 110000
}
```

- An API to fetch Summary Statistics for salary for each department..

```json
Endpoint : /stats/department
Method : GET
```

```json
Response :
[
  {
    "_id": "Banking",
    "mean": 90000,
    "min": 90000,
    "max": 90000
  },
  {
    "_id": "Administration",
    "mean": 30,
    "min": 30,
    "max": 30
  },
  {
    "_id": "Engineering",
    "mean": 40099006,
    "min": 30,
    "max": 200000000
  },
  {
    "_id": "Operations",
    "mean": 35015,
    "min": 30,
    "max": 70000
  }
]
```

- An API to fetch Summary Statistic for salary for each department and sub-department combination.

```json
Endpoint : /stats/sub
Method : GET
```

```json
Response :
[
  {
    "_id": {
      "department": "Operations",
      "sub_department": "CustomerOnboarding"
    },
    "mean": 35015,
    "min": 30,
    "max": 70000
  },
  {
    "_id": {
      "department": "Engineering",
      "sub_department": "Platform"
    },
    "mean": 40099006,
    "min": 30,
    "max": 200000000
  },
  {
    "_id": {
      "department": "Banking",
      "sub_department": "Loan"
    },
    "mean": 90000,
    "min": 90000,
    "max": 90000
  },
  {
    "_id": {
      "department": "Administration",
      "sub_department": "Agriculture"
    },
    "mean": 30,
    "min": 30,
    "max": 30
  }
]
```
