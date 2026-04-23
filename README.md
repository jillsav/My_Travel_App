# 🌍 Travel Memory App — Full Stack Deployment (MERN + DevOps)

## 🚀 Project Overview

Travel Memory is a full-stack MERN application that allows users to record and manage their travel experiences, including trip details, images, and personal stories.

This project demonstrates **end-to-end deployment of a production-grade application** using modern DevOps practices on AWS.

---

## 🧠 Tech Stack

### 🔹 Frontend

* React.js
* Axios
* CSS

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

### 🔹 DevOps & Infrastructure

* AWS EC2 (Compute)
* AWS Application Load Balancer (ALB)
* Nginx (Reverse Proxy + Static Hosting)
* PM2 (Process Manager)
* Cloudflare (DNS, CDN, SSL)

---

## 🏗️ Architecture

<img width="681" height="741" alt="My_Travelapp_Arch drawio" src="https://github.com/user-attachments/assets/14f8d5ae-45d0-43fb-8545-70bbe1134fbe" />


---

## 🔁 Request–Response Flow

1. User sends request via browser
2. Request goes through Cloudflare (DNS + CDN + SSL)
3. Forwarded to AWS Load Balancer
4. Load Balancer distributes traffic to EC2 instances
5. Nginx:

   * Serves React frontend
   * Proxies API calls to backend
6. Node.js backend processes request
7. Data fetched from MongoDB Atlas
8. Response flows back to user via same path

---

## ⚙️ Features

* Add travel experiences
* View trip history
* Store trip details (dates, cost, places, notes)
* Responsive UI
* Backend API with MongoDB integration
* Scalable deployment with load balancing

---

## 🖥️ Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/My_Travel_App.git
cd My_Travel_App
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

<img width="1413" height="190" alt="DB_connection_success" src="https://github.com/user-attachments/assets/c7977831-9762-43fd-ba92-1bee6fccb985" />
---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```
<img width="1827" height="816" alt="Travelapp_blog" src="https://github.com/user-attachments/assets/9396bc04-cdb9-45ff-b4a7-3e36cfd971f4" />

---

## ☁️ Deployment Steps (Summary)

### 🔹 Backend Deployment

* Hosted on EC2
* Managed using PM2
* Connected to MongoDB Atlas

<img width="972" height="182" alt="EC2_db_conn" src="https://github.com/user-attachments/assets/fd7354ab-63ba-43e4-8fe6-a62849f2c899" />

### 🔹 Frontend Deployment

* Built using `npm run build`
* Served via Nginx

### 🔹 Reverse Proxy
<img width="1607" height="758" alt="Nginx_installed_EC2" src="https://github.com/user-attachments/assets/9b1597dd-0e66-4195-8d59-97332514d22b" />

* Nginx routes:

  * `/` → React frontend
  * `/api` → Node backend
<img width="1788" height="763" alt="Travelapp_from_EC2IP" src="https://github.com/user-attachments/assets/67b560eb-4db0-4789-9881-b3747228be90" />

### 🔹 Load Balancing

* AWS Application Load Balancer
* Multiple EC2 instances for scalability
  <img width="1556" height="347" alt="Multiple_EC2_Instances" src="https://github.com/user-attachments/assets/5da307c0-99b5-46ca-9495-38f1cb152309" />

#### Testing Load Balancer.
  *Stoped an EC2 instance
  <img width="1566" height="660" alt="Instance_stopped" src="https://github.com/user-attachments/assets/36542c58-0d10-477d-a904-7ec155f12397" />

 * Browse the DNS of Load Balancer, The site should load fine.
   <img width="1587" height="835" alt="LB_working" src="https://github.com/user-attachments/assets/deff7838-60ea-4f4a-82c6-0c80857496cc" />

  

### 🔹 Domain & SSL

* Domain configured via Cloudflare
<img width="1823" height="872" alt="webapp_site" src="https://github.com/user-attachments/assets/b60a8b95-5c6f-42ad-9748-0420bf114608" />

  
* SSL enabled using:

  * Cloudflare (edge)
  * AWS ACM (origin)
<img width="1820" height="840" alt="webapp_with_https" src="https://github.com/user-attachments/assets/691c14fc-121b-4d66-b39a-0292d931f554" />


---

## 🌐 Live URL

```
https://jillsav.shop
```

## 📦 Key DevOps Concepts Demonstrated

* Infrastructure setup on AWS
* Reverse proxy using Nginx
* Load balancing with ALB
* Domain + DNS management
* SSL/TLS configuration
* Process management using PM2
* Production deployment of MERN stack

---

## 🔮 Future Improvements

* CI/CD pipeline (GitHub Actions)
* Auto Scaling Group
* Docker containerization
* Monitoring (CloudWatch / Prometheus)
* Logging improvements

---

## 👤 Author

**Jills Varghese**

---

## 💼 Project Summary

This project demonstrates the ability to:

* Deploy full-stack applications in production
* Design scalable cloud architecture
* Configure networking, DNS, and SSL
* Debug real-world infrastructure issues

---
