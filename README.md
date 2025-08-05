# ScoreUP - Educational Platform for Preparation

ScoreUP is a comprehensive educational platform designed specifically for Entrance Examination preparation. It provides students with access to mock tests, practice questions, performance analytics, and free educational resources, while allowing teachers to create and manage tests.

## 🚀 Features

### For Students
- **Mock Tests**: Take comprehensive  mock tests with real-time scoring
- **Performance Analytics**: Track your progress with detailed performance charts and statistics
- **Test History**: View all your previous test attempts and scores
- **Favorite Tests**: Save and access your preferred tests easily
- **Free Resources**: Access a library of educational materials, study guides, and practice papers
- **Profile Management**: Update personal information and track academic progress
- **Real-time Test Interface**: Interactive test-taking experience with navigation and review features

### For Teachers
- **Test Creation**: Create custom tests with multiple sections and question types
- **Test Management**: Upload, edit, and manage your created tests
- **Student Analytics**: View student performance and test statistics
- **Resource Contribution**: Contribute educational resources to the platform
- **Profile Management**: Manage teacher profile and credentials

### Platform Features
- **User Authentication**: Secure login system for students and teachers
- **Responsive Design**: Modern, mobile-friendly interface
- **Real-time Scoring**: Instant score calculation and feedback
- **Search & Filter**: Find tests and resources easily with search and tag filtering
- **File Upload**: Support for image-based questions and resource files
- **Performance Tracking**: Comprehensive analytics and progress monitoring

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API communication
- **React Icons** - Icon library
- **Recharts** - Data visualization and charts
- **React Circular Progressbar** - Progress indicators
- **React Toastify** - Toast notifications
- **CSS Modules** - Scoped styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud image and file storage
- **Google Cloud Vision** - Image processing and OCR
- **CORS** - Cross-origin resource sharing

### External Services
- **Cloudinary** - File and image storage
- **Google OAuth** - Social authentication
- **Supabase** - Additional backend services
- **Firebase** - Real-time features

## 📁 Project Structure

```
ScoreUP/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   ├── Context/         # React context providers
│   │   └── assets/          # Static assets
│   ├── public/              # Public assets
│   └── package.json
├── Backend/                  # Node.js backend application
│   ├── Routes/              # API route handlers
│   ├── Models/              # MongoDB schemas
│   ├── Controller/          # Business logic controllers
│   ├── middleware/          # Custom middleware
│   ├── Config/              # Configuration files
│   ├── seed/                # Database seed data
│   └── server.js            # Main server file
├── package.json             # Root package.json
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database
- Cloudinary account (for file storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ScoreUP
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd Frontend
   npm install
   
   # Install backend dependencies
   cd ../Backend
   npm install
   ```

3. **Environment Setup**

   Create `.env` files in both Frontend and Backend directories:

   **Backend/.env:**
   ```env
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   GOOGLE_CLOUD_VISION_API_KEY=your_google_vision_api_key
   ```

   **Frontend/.env:**
   ```env
   VITE_BACKEND_URL=http://localhost:8080
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   ```

4. **Start the application**
   ```bash
   # From the root directory
   npm start
   ```

   This will start both the backend server (port 8080) and frontend development server (port 5173).

### Alternative: Run separately

**Backend:**
```bash
cd Backend
npm start
```

**Frontend:**
```bash
cd Frontend
npm run dev
```

## 📚 API Endpoints

### Authentication
- `POST /api/student/login` - Student login
- `POST /api/teacher/login` - Teacher login
- `POST /api/student/register` - Student registration

### Tests
- `GET /api/tests` - Get all tests
- `GET /api/tests/:id` - Get specific test
- `POST /api/tests` - Create new test
- `GET /api/tests/my-tests` - Get teacher's tests
- `POST /api/student/submit-test` - Submit test answers

### Students
- `GET /api/student/get-profile-data` - Get student profile
- `PUT /api/student/update-profile` - Update student profile
- `GET /api/student/test-history` - Get test history

### Teachers
- `GET /api/teacher/get-profile-data` - Get teacher profile
- `PUT /api/teacher/update-profile` - Update teacher profile

### Resources
- `GET /api/resources` - Get all resources
- `POST /api/resources` - Upload new resource
- `PUT /api/resources/:id/download` - Increment download count

## 🎯 Usage

### For Students
1. Register/Login with your credentials
2. Browse available tests in the test interface
3. Take tests and receive instant feedback
4. View your performance analytics and progress
5. Access free educational resources
6. Update your profile and preferences

### For Teachers
1. Register/Login with teacher credentials
2. Create and upload custom tests
3. Manage your test library
4. View student performance data
5. Contribute educational resources
6. Update your profile and credentials

## 🔧 Development

### Available Scripts

**Root directory:**
- `npm start` - Start both frontend and backend
- `npm run install-all` - Install all dependencies
- `npm run build` - Build frontend for production

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

**Backend:**
- `npm start` - Start server with nodemon
- `npm test` - Run tests (placeholder)

### Code Style
- ESLint configuration for consistent code style
- CSS Modules for component-scoped styling
- Functional components with React hooks
- ES6+ JavaScript features

## 🚀 Deployment

### Frontend Deployment
The frontend is configured for deployment on Vercel with:
- `vercel.json` - Vercel configuration
- `static.json` - Static file serving configuration

### Backend Deployment
The backend can be deployed on platforms like:
- Heroku
- Railway
- DigitalOcean
- AWS

Ensure to set up environment variables on your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Team

This is a group project developed for educational purposes.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**ScoreUP** - Empowering students to excel in their  preparation journey! 🎓
