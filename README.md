# ScoreUp

## Description

**ScoreUp** is an interactive test-taking web application built to streamline learning and assessment for students and teachers. It allows teachers to create, manage, and share tests, while students can take tests, save progress, and view their scores in real time. Designed for efficiency and ease of use, ScoreUp bridges the gap between teaching and performance tracking through an intuitive interface and a scalable architecture.

---

## Features

* **Role-based access:** Separate dashboards for teachers and students.
* **Test creation and management:** Teachers can upload and manage tests easily.
* **Dynamic question navigation:** Each question has its own state (unseen, seen, saved, review, current).
* **Auto score calculation:** Students receive instant feedback and scores after submission.
* **Responsive UI:** Clean, adaptive design for desktop and mobile devices.
* **Secure authentication:** JWT-based user login and protected routes.
* **Real-time data handling:** Efficient communication between frontend and backend for seamless user experience.

---

## Tech Stack

**Frontend:** React.js, HTML, CSS, Bootstrap, JavaScript
**Backend:** Node.js, Express.js
**Database:** MongoDB (via Mongoose)
**Authentication:** JWT (JSON Web Token)
**Styling:** CSS Modules, Bootstrap

---

## Getting Started

### Prerequisites

* Node.js (v14 or later)
* npm or yarn
* MongoDB (local or cloud)

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Perspectfaiz/ScoreUp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ScoreUp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and add:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

---

### Running the Application

**Development Mode:**

```bash
npm start
```

or

```bash
yarn start
```

**Production Build:**

```bash
npm run build
```

or

```bash
yarn build
```

---

## Usage

* Teachers can sign up, log in, and upload tests from the teacher dashboard.
* Students can browse available tests, take them, mark questions for review, and submit answers.
* Results are stored securely in MongoDB and displayed in real time.
* Each question maintains its own state for a smoother test-taking experience.

---

## Contributing

1. Fork the repository
2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## Contact

**Md Faiz**
Email: [faizmd.work@gmail.com](mailto:faizmd.work@gmail.com)
GitHub: [@Perspectfaiz](https://github.com/Perspectfaiz)

Project Link: [https://github.com/Perspectfaiz/ScoreUp](https://github.com/Perspectfaiz/ScoreUp)
