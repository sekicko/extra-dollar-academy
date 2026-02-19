# EXTRA DOLLAR ACADEMY - Project Configuration

## Environment Setup

### Backend Configuration

1. Create `.env` file in the backend directory:
```
MONGODB_URI=mongodb://localhost:27017/extra_dollar_academy
JWT_SECRET=your_super_secret_jwt_key_change_in_production
PORT=5000
NODE_ENV=development
```

### Frontend Configuration

The frontend is configured to connect to:
- Backend API: `http://localhost:5000/api`
- Update in `frontend/js/api.js` if needed

## Running the Application

### Start Backend Server

```bash
cd backend
npm install
npm start
```

Server runs on: `http://localhost:5000`

### Start Frontend

Serve the frontend folder using any HTTP server:

```bash
# Option 1: Python
cd frontend
python -m http.server 8000

# Option 2: Node http-server
npm install -g http-server
cd frontend
http-server

# Option 3: Open directly in browser
# Open frontend/index.html in your browser
```

Frontend accessible at: `http://localhost:8000`

## MongoDB Setup

### Local MongoDB

```bash
# Windows
mongod

# macOS/Linux
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)

Update `MONGODB_URI` in `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/extra_dollar_academy?retryWrites=true&w=majority
```

## Default Admin Account

To create an admin account, you'll need to:

1. Register a user through the UI
2. Connect to MongoDB
3. Update the user document:

```javascript
// In MongoDB
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { isAdmin: true } }
)
```

## Testing the Application

### Test Accounts

Create test accounts through the registration page, or via API:

```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "phone": "+1234567890",
    "password": "Test123!",
    "confirmPassword": "Test123!"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!"
  }'
```

### Test Workflow

1. Open `http://localhost:8000` (frontend)
2. Click "Register" → Create new account
3. Click "Login" → Sign in with credentials
4. Explore "Dashboard" → View profile
5. Browse "Courses" → Enroll in courses
6. Check "Products" → View trading tools
7. Test "Support" → Create support ticket

## Deployment (Production)

### Backend Deployment (Heroku example)

```bash
# Install Heroku CLI
heroku login
heroku create extra-dollar-academy
git push heroku main
heroku config:set JWT_SECRET=your_production_secret
```

### Frontend Deployment (Netlify/Vercel)

1. Push frontend folder to GitHub
2. Connect to Netlify or Vercel
3. Update `API_BASE_URL` to production backend URL
4. Deploy

### Environment for Production

```
MONGODB_URI=mongodb+srv://prod-user:password@cluster.mongodb.net/extra_dollar_academy
JWT_SECRET=random_long_secret_key_here
PORT=5000
NODE_ENV=production
```

## Monitoring & Logs

### View Backend Logs

```bash
# In development
npm run dev  # Shows logs in console

# In production
heroku logs --tail
```

### MongoDB Monitoring

- Use MongoDB Atlas dashboard for cloud database
- Use MongoDB Compass for local database

## Updating Dependencies

### Backend

```bash
cd backend
npm update
npm outdated  # Check for outdated packages
```

### Frontend

No dependencies required - pure HTML/CSS/JavaScript

## Backup & Recovery

### Database Backup

```bash
# Local MongoDB
mongodump --db extra_dollar_academy --out ./backup

# Restore
mongorestore ./backup
```

### Code Backup

Use Git for version control:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repository>
git push -u origin main
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

### Clear Cache & Restart

```bash
# Clear node modules
rm -rf node_modules
npm install
npm start
```

### Reset Database

```bash
# Delete all data (BE CAREFUL!)
db.dropDatabase()

# Recreate indexes
# Restart server - indexes will be created automatically
```

---

For more information, see README.md
