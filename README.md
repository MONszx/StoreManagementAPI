# StoreManagementAPI

Welcome to the Store Management API documentation. This API allows you to manage stores and their details. Please note that all endpoints require authentication and authorization, and different roles have different access levels.

Authentication
All endpoints require a valid JSON Web Token (JWT) to be included in the Authorization header of the HTTP request. The JWT is obtained by signing in as a user with the appropriate role.

Roles
There are two roles in this API:

Admin: Has full access to all API endpoints, including creating, updating, and deleting stores. <br>
User: Has read-only access to retrieve store details.
Endpoints <br>
Create User and Admin Role <br>
URL: /api/v1/store/userRegistration <br>
Method: POST <br>
Authentication: Required <br>
Roles: User, Admin <br>
Response <br>
200 OK: Returns an array of store objects. <br>

Get All Stores
Retrieves a list of all stores.

URL: /api/v1/store/allstore <br>
Method: GET <br>
Authentication: Required <br>
Roles: User, Admin <br>
Response <br>
200 OK: Returns an array of store objects. <br> 
Example Response: <br>

json
  { <br>
        "_id": "store_id", <br>
        "Name": "Sample Store", <br>
        "OwnerID": "user_id", <br>
        "Location": "Sample Location" <br>
  }, <br>
    // ...


Create Store
Creates a new store.

URL: /api/v1/store/createStore <br>
Method: POST <br>
Authentication: Required <br>
Roles: Admin <br>
Request Body <br>
Name (string): The name of the store. <br>
Location (string): The location of the store. <br>
Example Request Body: <br>

json <br>
{ <br>
    "Name": "New Store", <br>
    "Location": "New Location" <br>
} <br>
Response <br>
201 Created: Returns a success message. <br>
Example Response: <br>

json <br>
{ <br>
    "message": "Store created successfully" <br>
} <br>
Update Store Details <br>
Updates the details of a store. <br>

URL: /api/v1/store/update/:storeId <br>
Method: PUT <br>
Authentication: Required <br>
Roles: Admin <br>
URL Parameters <br>
storeId (string): The ID of the store to be updated. <br>
Request Body <br>
Name (string): The updated name of the store. <br>
Location (string): The updated location of the store. <br>
Example Request Body: <br>

json <br>
{ <br>
    "Name": "Updated Store Name", <br>
    "Location": "Updated Location" <br>
} <br>
Response <br>
200 OK: Returns a success message. <br>
Example Response: <br>

json <br>
{ <br>
    "message": "Store updated successfully" <br>
} <br>
Delete Store <br>
Deletes a store. <br>

URL: /api/v1/store/delete/:storeId <br>
Method: DELETE <br>
Authentication: Required <br>
Roles: Admin <br>
URL Parameters <br>
storeId (string): The ID of the store to be deleted. <br>
Response <br>
200 OK: Returns a success message. <br>
Example Response: <br>

json <br>
{ <br>
    "message": "Store deleted successfully" <br>
} <br>
