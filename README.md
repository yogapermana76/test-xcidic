# Test Xcidic
## Usage
```javascript
$ npm install
$ node app.js
$ npm run serve
```
Access server via `http://localhost:3000`<br>
Access client via `http://localhost:8080`

##  User Routes
| Routes | HTTP | Header(s) | Body | Response | Description |
| :--: | :--: | :--: | :--: | :--: | :--: |
| /users/register/manager | POST | none | name: String (**required**), email: String (**required**),  password: String (**required**) | **Success**: Register a user for manager, **Error**: Internal server error (Validation) | Register a user for manager |
| /users/register/employee | POST | none | name: String (**required**), email: String (**required**),  password: String (**required**) | **Success**: Register a user for employee, **Error**: Internal server error (Validation) | Register a user for employee |
| /users/login | POST | none | email: String (**required**), password: String (**required**) |**Success**: Login as a user, **Error**: Internal server error (Validation) | Login as a user |

## TASK ROUTES
| Routes | HTTP | Header(s) | Body | Response | Description |
| -- | -- | -- | -- | -- | -- |
| /tasks | POST | token | title: String, description: String, date: Date | **Success**: create new task, **Error**: Internal server error (Validation) | create new task |
| /tasks | GET | token | none | **Success**: Show all tasks to manager, **Error**: Internal server error (Validation) |Show all tasks to user manager |
| /tasks/userId | GET | token | none | **Success**: Show all tasks to employee, **Error**: Internal server error (Validation) |Show all tasks to user employee |
| /tasks/edit/:id | GET | token | none | **Success**: Show a task to, **Error**: Internal server error (Validation) |Show a task to user |
| /tasks/:id | PUT | token | none | **Success**: change task, **Error**: Internal server error (Validation) |change task|
| /tasks/:id | DELETE | token | none | **Success**: delete selected task, **Error**: Internal server error (Validation) | delete task |

