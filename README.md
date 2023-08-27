# StoreManagementAPI

Welcome to the Store Management API documentation. This API allows you to manage stores and their details. Please note that all endpoints require authentication and authorization, and different roles have different access levels.

Authentication
All endpoints require a valid JSON Web Token (JWT) to be included in the Authorization header of the HTTP request. The JWT is obtained by signing in as a user with the appropriate role.

Roles
There are two roles in this API:

Admin: Has full access to all API endpoints, including creating, updating, and deleting stores.
User: Has read-only access to retrieve store details.
Endpoints
Get All Stores
Retrieves a list of all stores.

URL: /api/v1/store/allstore
Method: GET
Authentication: Required
Roles: User, Admin
Response
200 OK: Returns an array of store objects.
