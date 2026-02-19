# EXTRA DOLLAR ACADEMY - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
# Navigate to backend folder
MongoDB connected
Server running on port 5000

# Install all required packages
npm install
```

### Step 2: Configure Database

**Option A: Local MongoDB**

1. Download and install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. In `backend/.env`, keep: `MONGODB_URI=mongodb://localhost:27017/extra_dollar_academy`

**Option B: MongoDB Atlas (Cloud - Recommended)**

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. In `backend/.env`, update: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/extra_dollar_academy?retryWrites=true&w=majority`

### Step 3: Create Environment File

```bash
# In backend folder, create .env file
MONGODB_URI=mongodb://localhost:27017/extra_dollar_academy
JWT_SECRET=your_secret_key_change_in_production_12345
PORT=5000
NODE_ENV=development
```

### Step 4: Start Backend Server

```bash
# In backend folder
npm start

# You should see: "Server running on port 5000"
```

### Step 5: Start Frontend

In a NEW terminal window:

```bash
# Option 1: Using Python
cd frontend
python -m http.server 8000

# Option 2: Using Node http-server
npm install -g http-server
cd frontend
http-server

# Option 3: Just open in browser
# Open: c:\Users\Administrator\eXtradollar_academy\frontend\index.html
```

### Step 6: Access the Application

Open your browser and go to:
```
http://localhost:8000
```

---

## 📝 Testing the Platform

### Create Test Account

1. Click **"Register Now"** button
2. Fill in:
   - Username: `testuser`
   - Email: `test@email.com`
   - Phone: `+1234567890`
   - Password: `Test123!`
3. Click **"REGISTER NOW"**

### Test User Features

- ✅ Dashboard - View your profile
- ✅ Courses - Browse and enroll
- ✅ Products - View trading bots and EAs
- ✅ Support - Create support ticket

### Test Admin Features

To make user an admin:

1. Open MongoDB Compass or MongoDB Atlas
2. Find your database `extra_dollar_academy`
3. Go to `users` collection
4. Find your test user document
5. Edit and add: `"isAdmin": true`
6. Login again - you'll see **"Admin Panel"** button

### Admin Panel Features

- 📊 Dashboard Stats - View system statistics
- 👥 Manage Users - See all registered users
- 📚 Manage Courses - Create/Edit/Delete courses
- 🤖 Manage Products - Add trading bots and EAs
- 💬 Support Management - View and respond to support tickets

---

## 🎨 Key Features Included

### Dark Blue Animated Background
- Gradient dark blue background (#0a1628 to #0f1f35)
- Falling animated dollar signs ($, 💵, 💰, €, ¥, ₹)
- Golden (#ffd700) accent color throughout
- Smooth animations (12-17 seconds per cycle)

### Authentication
✅ User Registration
✅ User Login
✅ Password Reset
✅ JWT Token Management
✅ Password Hashing (bcryptjs)

### User Dashboard
✅ View enrolled courses
✅ Track purchased products
✅ Update profile information
✅ Manage account settings

### Course Management
✅ 5 Course Categories:
   - Risk Management
   - Trading Strategies
   - Psychology
   - Technical Analysis
   - Fundamental Analysis
✅ Enrollment tracking
✅ Price management
✅ Course descriptions

### Product Management
✅ 4 Product Types:
   - Trading Bot (XML)
   - MT5 Expert Advisor
   - Strategy Guides
   - Signal Services
✅ Download tracking
✅ Rating system
✅ Compatibility info

### Support Center
✅ User can create tickets
✅ Admin can respond to tickets
✅ Ticket status tracking
✅ FAQ section
✅ Priority levels

---

## 📂 Project Structure

```
eXtradollar_academy/
├── frontend/                    # Frontend (HTML/CSS/JS)
│   ├── index.html              # Home page
│   ├── css/style.css           # All styles
│   ├── js/
│   │   ├── api.js              # API calls
│   │   └── main.js             # Page logic
│   └── pages/                  # All page files
│       ├── login.html
│       ├── register.html
│       ├── dashboard.html
│       ├── courses.html
│       ├── products.html
│       ├── support.html
│       ├── admin.html
│       └── forgot-password.html
│
├── backend/                     # Backend (Node.js/Express)
│   ├── server.js               # Main server
│   ├── package.json            # Dependencies
│   ├── .env.example            # Environment template
│   ├── models/                 # Database schemas
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Product.js
│   │   └── SupportTicket.js
│   └── routes/                 # API endpoints
│       ├── auth.js
│       ├── courses.js
│       ├── products.js
│       ├── support.js
│       └── users.js
│
├── README.md                    # Full documentation
├── SETUP.md                     # Setup instructions
└── .gitignore                  # Git ignore rules
```

---

## 🔧 Common Commands

### Backend
```bash
# Install dependencies
npm install

# Start server (development)
npm start

# Start with auto-reload (requires nodemon)
npm run dev

# Stop server
Ctrl + C
```

### Frontend
```bash
# Serve with Python 3
python -m http.server 8000

# Serve with Node
npx http-server

# Stop server
Ctrl + C
```

### MongoDB
```bash
# Mac - Start MongoDB
brew services start mongodb-community

# Mac - Stop MongoDB
brew services stop mongodb-community

# Windows - MongoDB should start automatically
```

---

## 🆘 Troubleshooting

### "Cannot connect to MongoDB"
- ✅ Ensure MongoDB is running
- ✅ Check connection string in .env
- ✅ Verify MongoDB is accessible

### "Port 5000 already in use"
```bash
# Find and kill the process
lsof -i :5000
kill -9 <PID>
```

### "Frontend can't connect to backend"
- ✅ Check backend is running on port 5000
- ✅ Check `API_BASE_URL` in `js/api.js`
- ✅ Ensure CORS is enabled

### "Can't see Admin Panel"
- ✅ Make sure `isAdmin: true` in user document
- ✅ Refresh page after updating user
- ✅ Login again with admin account

---

## 📚 Next Steps

1. **Customize Colors**: Edit CSS variables in `frontend/css/style.css`
2. **Add Courses**: Use Admin Panel to create courses
3. **Upload Products**: Add trading bots and EAs via Admin Panel
4. **Setup Payment**: Integrate Stripe/PayPal (future feature)
5. **Email Setup**: Configure email notifications
6. **Deploy**: Deploy to Heroku/Vercel for production

---

## 💡 PRO TIPS

1. **Use MongoDB Compass** - Visual database management
2. **Test Incognito Mode** - Clear storage/cookies for testing
3. **Browser DevTools** - Check console for API errors
4. **Postman** - Test API endpoints directly
5. **Git** - Initialize repo and commit progress regularly

---

## 🎓 Learning Resources

- **Express.js**: https://expressjs.com/
- **MongoDB**: https://docs.mongodb.com/
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

---

## 📞 Support

For issues or questions:
1. Check README.md for detailed documentation
2. Review SETUP.md for configuration help
3. Check browser console for error messages
4. Verify backend is running
5. Confirm MongoDB connection

---

**Happy Trading! 💰📈**

*Built with ❤️ for Extra Dollar Academy*
