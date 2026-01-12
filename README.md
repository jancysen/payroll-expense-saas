# Expense & Reimbursement Management System (SaaS)

A backend-driven SaaS application for managing employee expense submissions and administrative approval workflows. This project demonstrates secure authentication, role-based access control, and real-world expense approval logic.

---

## 🚀 Features

- Secure user authentication using **JWT** and **bcrypt**
- Role-based access control (**Admin / User**)
- Users can:
  - Register and log in
  - Create expense records
  - View their own expenses
- Admins can:
  - View all submitted expenses
  - Approve or reject expense claims
- Protected REST APIs using authentication middleware
- MongoDB data modeling with Mongoose
- Clean and modular backend architecture using TypeScript

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express, TypeScript  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT, bcrypt  
- **Tools:** Git, GitHub, Thunder Client / Postman  

---

## 📂 Project Structure

```
backend/
├── src/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic
│   ├── middleware/      # Authentication & role-based middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── server.ts        # Application entry point
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

1. User registers with email and password
2. Password is hashed using bcrypt before storing in MongoDB
3. User logs in and receives a JWT token
4. Token is sent in request headers:
   ```
   Authorization: Bearer <JWT_TOKEN>
   ```
5. Middleware verifies the token and user role before granting access

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and receive JWT |

### User (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/expenses | Create a new expense |
| GET | /api/expenses | View logged-in user’s expenses |

### Admin (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/admin/expenses | View all expenses |
| PUT | /api/admin/expenses/:id | Approve or reject an expense |

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/payroll-expense-saas.git
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Compile TypeScript
```bash
npx tsc
```

### 4. Run the server
```bash
node dist/server.js
```

Server runs on:
```
http://localhost:5000
```

---

## 🧪 Testing APIs

Use **Thunder Client** or **Postman**.

For protected routes, include this header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 What This Project Demonstrates

- Secure backend authentication and authorization
- Role-based access control implementation
- RESTful API design
- MongoDB relational data modeling
- Real-world SaaS approval workflows
- Clean and maintainable TypeScript backend structure

---

## 📈 Future Enhancements

- Frontend UI using React
- Environment variables for secrets
- Pagination and filtering for expenses
- Deployment to cloud platforms (Render / Railway)
- Payroll module integration

---

## 👤 Author

**Jancy Sen**  
GitHub: https://github.com/<your-username>

---

