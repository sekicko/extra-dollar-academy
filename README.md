<<<<<<< HEAD
# EXTRA DOLLAR ACADEMY - Online Trading Course Platform

A comprehensive full-stack web application for selling online trading courses, trading bots, MT5 Expert Advisors, and trading education materials.

## Features

### User Features
✅ User Authentication (Register, Login, Forgot Password)
✅ User Dashboard with enrolled courses and products
✅ Browse and enroll in trading courses
✅ Purchase and download trading bots and EAs
✅ Support center for ticket management
✅ Profile management
✅ Dark blue themed interface with animated falling currencies

### Admin Features
✅ Dashboard with system statistics
✅ Manage courses (Create, Edit, Delete)
✅ Manage products (Trading Bots XML, MT5 EAs, Guides)
✅ Manage users and view registered members
✅ Support center management
✅ FAQ management

### Course Categories
- Risk Management
- Trading Strategies
- Psychology
- Technical Analysis
- Fundamental Analysis

### Product Types
- Trading Bot (XML for Deriv)
- MT5 Expert Advisor (EA)
- Strategy Guides
- Signal Services

## Tech Stack

### Frontend
- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- Dark blue gradient background with falling animated dollars

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt for password hashing

### Database
- MongoDB (NoSQL)

## Project Structure

```
eXtradollar_academy/
├── frontend/
│   ├── index.html                 # Home page
│   ├── css/
│   │   └── style.css              # Global styles with animations
│   ├── js/
│   │   ├── api.js                 # API calls helper
│   │   └── main.js                # Main functionality
│   ├── pages/
│   │   ├── login.html             # Login page
│   │   ├── register.html          # Registration page
│   │   ├── forgot-password.html   # Password reset page
│   │   ├── dashboard.html         # User dashboard
│   │   ├── courses.html           # Courses listing
│   │   ├── products.html          # Products listing
│   │   ├── support.html           # Support center
│   │   └── admin.html             # Admin panel
│   └── assets/                    # Images, icons, etc.
├── backend/
│   ├── server.js                  # Main server file
│   ├── package.json               # Dependencies
│   ├── .env.example               # Environment variables template
│   ├── models/
│   │   ├── User.js                # User model
│   │   ├── Course.js              # Course model
│   │   ├── Product.js             # Product model
│   │   └── SupportTicket.js       # Support ticket model
│   └── routes/
│       ├── auth.js                # Authentication routes
│       ├── courses.js             # Course routes
│       ├── admin.js               # Admin routes
│       ├── support.js             # Support routes
│       └── users.js               # User routes
└── README.md

```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
copy .env.example .env
```

4. Update `.env` with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/extra_dollar_academy
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

5. Start the server:
```bash
npm start
# or for development with nodemon
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. The frontend is pure HTML/CSS/JavaScript - no build process needed
2. Update the `API_BASE_URL` in `frontend/js/api.js` if your backend runs on a different port
3. Open `frontend/index.html` in your browser or serve via a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server frontend
```

## Configuration

### Environment Variables (.env)

```
MONGODB_URI=mongodb://localhost:27017/extra_dollar_academy
JWT_SECRET=change_this_to_a_strong_secret_in_production
PORT=5000
NODE_ENV=development
```

### API Base URL

Update in `frontend/js/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## Usage

### For Users

1. **Register**: Create a new account on the registration page
2. **Login**: Sign in with your credentials
3. **Browse Courses**: View available trading courses
4. **Enroll in Courses**: Purchase and enroll in courses
5. **Download Products**: Purchase trading bots and EAs
6. **Support Tickets**: Create support tickets for assistance

### For Admin

1. **Login** with admin account
2. **Dashboard**: View statistics about users, courses, and products
3. **Manage Courses**: Create, edit, and delete courses
4. **Manage Products**: Add trading bots and EAs to the store
5. **Support Center**: Respond to user support tickets and manage FAQs

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Products
- `GET /api/admin/products` - Get all products
- `POST /api/admin/products` - Create product (Admin)
- `PUT /api/admin/products/:id` - Update product (Admin)
- `DELETE /api/admin/products/:id` - Delete product (Admin)

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:userId/enroll/:courseId` - Enroll in course

### Support
- `POST /api/support` - Create support ticket
- `GET /api/support/user/:userId` - Get user's tickets
- `GET /api/support` - Get all tickets (Admin)
- `POST /api/support/:id/response` - Respond to ticket (Admin)

### Admin
- `GET /api/admin/dashboard/stats` - Get dashboard statistics
- `GET /api/admin/users` - Get all users

## Features Explanation

### Dark Blue Animated Background
The interface features:
- Dark blue gradient background (#0a1628 to #0f1f35)
- Falling animated dollar signs ($), currency symbols (💵, 💰, €, ¥, ₹)
- Smooth animation at 12-17 second intervals
- Golden accent color (#ffd700) for highlights

### Authentication Flow
1. User registers with username, email, phone, password
2. Password is hashed using bcryptjs
3. JWT token is created and stored in localStorage
4. Token is sent with all subsequent API requests
5. Admin users can access admin panel

### Course Management
- Create courses with title, description, price, category, level
- Categories: Risk Management, Trading Strategies, Psychology, etc.
- Users can enroll and access course materials
- Tracks enrollment count and ratings

### Product Management
- Support for trading bots (XML), MT5 EAs, strategy guides
- Track downloads and ratings
- Support for documentation and compatibility info
- Paid and free products

### Support System
- Users can create support tickets
- Track ticket status (Open, In Progress, Resolved, Closed)
- Priority levels (Low, Medium, High)
- Admin can respond to tickets
- FAQ section for common questions

## Security Considerations

- Passwords are hashed with bcryptjs (salt rounds: 10)
- JWT tokens expire after 7 days
- Password reset tokens expire after 1 hour
- CORS is enabled for frontend communication
- Environment variables for sensitive data
- Input validation on backend

## Future Enhancements

- Payment gateway integration (Stripe, PayPal)
- Email notifications
- Advanced analytics dashboard
- Certificate generation
- Live trading signals
- Webinar scheduling
- Community forum
- Trading journal tools
- Mobile app
- Video hosting integration

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or check Atlas connection string
- Verify connection string in `.env` file

### CORS Error
- Check if backend is running on correct port
- Verify `API_BASE_URL` in `js/api.js` matches backend URL

### Token Expiration
- Token expires after 7 days - user needs to login again
- Clear localStorage if having persistent issues

### Admin Panel Access
- User must be registered with `isAdmin: true` flag
- Edit user directly in MongoDB or ask existing admin

## Support

For support issues, users can:
1. Create tickets through support center
2. Email: support@extradollaracademy.com
3. Contact 24/7 support team

## License

© 2026 Extra Dollar Academy. All rights reserved.

## Contributing

Guidelines for contributing to this project:
1. Create feature branches
2. Follow code style guidelines
3. Test thoroughly before submitting
4. Document new features

---

**Built with ❤️ for traders worldwide** 💰📈
=======
# extra-dollar-academy
>>>>>>> 60e730b4ea012a8928743a18ef3ad2823421cbf7
