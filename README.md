# Lead Management System

This project is a simplified **Lead Management System** built with **Next.js 14**, **Prisma**, and **MongoDB**. It provides a basic admin panel for assigning leads to salespeople and a frontend for lead submission using a multi-step form.

---

## Features

### 1. **Lead Collection Form**

- **Multi-Step Form:**
  - Step 1: Collect Name and Email.
  - Step 2: Collect Inquiry Source (e.g., Google, Social Media, Friends).
- Form validation for all fields.
- Backend API integration to store leads in the database.

### 2. **Admin Interface**

- **Leads Table:**
  - Displays all leads with the following columns:
    - Name
    - Email
    - Source
    - Assigned Salesperson
- **Assign Salesperson:**
  - Dropdown to assign salespeople to leads.
  - Changes are reflected instantly in the UI.

### 3. **Backend API**

- `/api/leads`: Manage leads (GET, POST, PUT).
- `/api/salespeople`: Fetch all salespeople.

---

## Technology Stack

### **Frontend**

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS

### **Backend**

- **Database:** MongoDB with Prisma ORM
- **API:** RESTful endpoints for leads and salespeople management

---

## Installation and Setup

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/lead-management-system.git
cd lead-management-system
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Configure Environment Variables**

Create a `.env` file in the root directory and add the following:

```bash
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority"
```

Replace `<username>`, `<password>`, and `<database>` with your MongoDB credentials.

### 4. **Generate Prisma Client**

```bash
npx prisma generate
```

### 5. **Run the Application**

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

### **Frontend Pages**

- **`/leads`**:
  - Submit a lead using the multi-step form.
- **`/admin`**:
  - View all leads and assign salespeople.

### **API Endpoints**

- **`GET /api/leads`**: Fetch all leads.
- **`POST /api/leads`**: Add a new lead.

---

## Prisma and MongoDB Setup

1. **Set up MongoDB:**

   - Use a local MongoDB instance or create a cluster on [MongoDB Atlas](https://www.mongodb.com/atlas).
   - Whitelist your IP address in the Atlas dashboard.

2. **Prisma Configuration:**

   - Update `prisma/schema.prisma` with the MongoDB connection.
   - Generate the Prisma client:
     ```bash
     npx prisma generate
     ```

3. **Test Database Connection:**
   - Ensure the `DATABASE_URL` in `.env` is valid and accessible.

---

## Deployment

To deploy this application:

1. Deploy your MongoDB database (e.g., MongoDB Atlas).
2. Update the `DATABASE_URL` environment variable in your production environment.
3. Use a deployment platform like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
4. Run migrations and generate the Prisma client:
   ```bash
   npx prisma migrate deploy
   ```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---
## Potential Improvements

### 1. **Enhanced Form Validation**
- **Current Issue:** The form currently lacks robust validation and error handling.
- **Improvement:** Use a validation library to ensure input accuracy.
- **Suggested Libraries:**  
  - [`react-hook-form`] → Lightweight and performant form handling.  
  - [`yup`] → Schema-based validation with extensive rule support.  

---

### 2. **Better Error Handling**
- **Current Issue:** API responses are not handled efficiently, leading to unclear error messages.
- **Improvement:** Implement global error handling with notifications.
- **Suggested Libraries:**  
  - [`react-toastify`] → User-friendly toast notifications for error handling.  
  - [`sentry`] → Error tracking and logging for better debugging.  

---

### 3. **Salesperson Assignment Optimization**
- **Current Issue:** Assigning salespeople is a manual selection process.
- **Improvement:** Implement an AI-based recommendation system to assign salespeople dynamically.
- **Suggested Libraries & Tools:**  
  - [`tensorflow.js`] → Machine learning-based lead assignment.  
  - [`lodash`] → Efficient data manipulation and filtering.  

---

### 4. **Lead Filtering and Sorting**
- **Current Issue:** Leads are displayed in a basic table without filtering options.
- **Improvement:** Add advanced filters for sorting and searching leads.
- **Suggested Libraries:**  
  - [`react-table`] → Lightweight and powerful data tables.  
  - [`fuse.js`] → Fuzzy search for better lead filtering.  

---

### 5. **UI/UX Improvements**
- **Current Issue:** Basic styling and limited interactivity.
- **Improvement:** Use modern UI libraries for a more engaging experience.
- **Suggested Libraries:**  
  - [`tailwindcss`] → Utility-first CSS framework for rapid UI building.  
  - [`framer-motion`] → Smooth animations and interactions.  
  - [`radix-ui`] → Accessible and customizable UI components.  

---

### 6. **State Management for Better Performance**
- **Current Issue:** State is managed with `useState`, which can cause performance issues in large applications.
- **Improvement:** Implement global state management to optimize performance.
- **Suggested Libraries:**  
  - [`redux-toolkit`] → Efficient and scalable state management.  
  - [`recoil`] → Simple and flexible state management for React.  
  - [`zustand`] → Lightweight state management alternative.  

---

### 7. **Backend Improvements & API Enhancements**
- **Current Issue:** API endpoints may lack optimization and error handling.
- **Improvement:** Use better backend technologies for scalability.
- **Suggested Technologies:**  
  - [`Next.js API Routes`] → Efficient serverless API handling.  
  - [`NestJS`] → Scalable and structured backend framework for enterprise applications.  
  - [`Prisma`] → ORM for database interactions with TypeScript support.  

---

By implementing these improvements, the lead management system can be optimized for better performance, user experience, and scalability.
