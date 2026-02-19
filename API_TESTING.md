# API Testing Guide - Extra Dollar Academy

## Test API Endpoints Using cURL

### Prerequisites
- Backend running on `http://localhost:5000`
- MongoDB connected and running
- cURL installed (or use Postman)

---

## 🔐 Authentication Endpoints

### 1. Register New User

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "phone": "+1234567890",
    "password": "TestPassword123!",
    "confirmPassword": "TestPassword123!"
  }'
```

Expected Response:
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "testuser",
    "email": "test@example.com"
  }
}
```

---

### 2. Login User

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123!"
  }'
```

**Save the token from response - you'll use it for other requests**

---

### 3. Forgot Password

```bash
curl -X POST http://localhost:5000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }'
```

Expected Response:
```json
{
  "message": "Reset token sent. Use this for password reset.",
  "resetToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

### 4. Reset Password

```bash
curl -X POST http://localhost:5000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "resetToken": "eyJhbGciOiJIUzI1NiIs...",
    "newPassword": "NewPassword123!",
    "confirmPassword": "NewPassword123!"
  }'
```

---

## 📚 Course Endpoints

### 1. Get All Courses

```bash
curl -X GET http://localhost:5000/api/courses
```

---

### 2. Create Course (Admin Only)

**Replace TOKEN with your jwt token**

```bash
curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "title": "Advanced Risk Management",
    "description": "Master the art of risk management in trading",
    "price": 99.99,
    "category": "Risk Management",
    "level": "Advanced",
    "duration": "6 weeks",
    "content": "Module 1: Introduction...",
    "instructorId": "507f1f77bcf86cd799439011"
  }'
```

---

### 3. Get Single Course

```bash
curl -X GET http://localhost:5000/api/courses/507f1f77bcf86cd799439012
```

---

### 4. Update Course

```bash
curl -X PUT http://localhost:5000/api/courses/507f1f77bcf86cd799439012 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "title": "Updated Course Title",
    "price": 149.99
  }'
```

---

### 5. Delete Course

```bash
curl -X DELETE http://localhost:5000/api/courses/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer TOKEN"
```

---

## 🤖 Product Endpoints

### 1. Get All Products

```bash
curl -X GET http://localhost:5000/api/admin/products
```

---

### 2. Create Product (Admin Only)

```bash
curl -X POST http://localhost:5000/api/admin/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "name": "Deriv Binary Master Bot",
    "description": "Advanced trading bot for binary options",
    "type": "Trading Bot XML",
    "price": 49.99,
    "compatibility": "Deriv Trading Platform",
    "documentation": "https://example.com/docs",
    "isPaid": true
  }'
```

---

### 3. Update Product

```bash
curl -X PUT http://localhost:5000/api/admin/products/507f1f77bcf86cd799439013 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "price": 59.99,
    "rating": 4.5
  }'
```

---

### 4. Delete Product

```bash
curl -X DELETE http://localhost:5000/api/admin/products/507f1f77bcf86cd799439013 \
  -H "Authorization: Bearer TOKEN"
```

---

## 👥 User Endpoints

### 1. Get User Profile

```bash
curl -X GET http://localhost:5000/api/users/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer TOKEN"
```

---

### 2. Update User Profile

```bash
curl -X PUT http://localhost:5000/api/users/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "username": "newusername",
    "email": "newemail@example.com",
    "phone": "+1987654321"
  }'
```

---

### 3. Enroll in Course

```bash
curl -X POST http://localhost:5000/api/users/507f1f77bcf86cd799439011/enroll/507f1f77bcf86cd799439012 \
  -H "Authorization: Bearer TOKEN"
```

---

## 💬 Support Endpoints

### 1. Create Support Ticket

```bash
curl -X POST http://localhost:5000/api/support \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "userId": "507f1f77bcf86cd799439011",
    "subject": "Cannot download trading bot",
    "message": "I purchased the bot but cannot find the download link..."
  }'
```

---

### 2. Get User Tickets

```bash
curl -X GET http://localhost:5000/api/support/user/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer TOKEN"
```

---

### 3. Get All Tickets (Admin)

```bash
curl -X GET http://localhost:5000/api/support \
  -H "Authorization: Bearer TOKEN"
```

---

### 4. Respond to Ticket

```bash
curl -X POST http://localhost:5000/api/support/507f1f77bcf86cd799439014/response \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "message": "We have sent you the download link via email",
    "status": "Resolved",
    "adminId": "507f1f77bcf86cd799439011"
  }'
```

---

## ⚙️ Admin Endpoints

### 1. Get Dashboard Statistics

```bash
curl -X GET http://localhost:5000/api/admin/dashboard/stats \
  -H "Authorization: Bearer TOKEN"
```

Expected Response:
```json
{
  "totalUsers": 15,
  "totalCourses": 8,
  "totalProducts": 12,
  "adminUsers": 2
}
```

---

### 2. Get All Users (Admin Only)

```bash
curl -X GET http://localhost:5000/api/admin/users \
  -H "Authorization: Bearer TOKEN"
```

---

## 🧪 Complete Test Workflow

### Step 1: Register User
```bash
# Save the token from response
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@test.com","phone":"+123","password":"Test123!","confirmPassword":"Test123!"}'
```

### Step 2: Login User
```bash
# Get fresh token
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123!"}'
```

### Step 3: View Profile
```bash
# Use token from login
curl -X GET http://localhost:5000/api/users/YOUR_USER_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Step 4: Get All Courses
```bash
curl -X GET http://localhost:5000/api/courses
```

### Step 5: Get All Products
```bash
curl -X GET http://localhost:5000/api/admin/products
```

### Step 6: Create Support Ticket
```bash
curl -X POST http://localhost:5000/api/support \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"userId":"YOUR_USER_ID","subject":"Test","message":"Test message"}'
```

---

## 📊 Using Postman

1. Download Postman from https://www.postman.com/downloads/
2. Create a new collection "Extra Dollar Academy"
3. Add requests for each endpoint above
4. Set up environment variable for `TOKEN` and `USER_ID`
5. Use `{{TOKEN}}` and `{{USER_ID}}` in headers and URLs

**Sample Postman Setup:**

```json
{
  "environment": {
    "name": "Extra Dollar Academy",
    "values": [
      {
        "key": "BASE_URL",
        "value": "http://localhost:5000/api",
        "type": "string"
      },
      {
        "key": "TOKEN",
        "value": "",
        "type": "string"
      },
      {
        "key": "USER_ID",
        "value": "",
        "type": "string"
      }
    ]
  }
}
```

---

## ⚠️ Important Notes

1. **Token**: Include in Authorization header: `Authorization: Bearer YOUR_TOKEN`
2. **Content-Type**: Always use `application/json` for POST/PUT requests
3. **Error Responses**: Check status code and error message in response
4. **Admin Only**: Some endpoints require `isAdmin: true` in user document
5. **Token Expiration**: Tokens expire after 7 days

---

## 🐛 Debugging Tips

### Check if Backend is Running
```bash
curl http://localhost:5000
```

### Enable CORS
The backend already enables CORS. If issues persist:
```javascript
// In server.js
const cors = require('cors');
app.use(cors());
```

### View Database
```bash
# Using MongoDB Compass
# Connect to: mongodb://localhost:27017
# View database: extra_dollar_academy
```

### Check Browser Console
- Open Developer Tools (F12)
- Go to Console tab
- Check for API errors

---

## 📝 Test Data

Use these credentials for testing after registration:

```
Email: test@example.com
Password: TestPassword123!
Phone: +1234567890
Username: testuser
```

---

## ✅ Success Indicators

- ✅ User registers successfully
- ✅ User can login with credentials
- ✅ Token is returned and stored
- ✅ Can view user profile
- ✅ Can browse courses and products
- ✅ Admin can create/edit/delete content
- ✅ Support tickets can be created
- ✅ Dashboard stats display correctly

---

For more help, check README.md and SETUP.md
