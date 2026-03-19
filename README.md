A responsive Meeting Management Dashboard built with React, Redux Toolkit, and Material UI.
It allows users to view, manage, and organize meetings by date sections like Past, Today, and This Week.

🚀 Features

📊 Dashboard with grouped meetings

➕ Add / 📝 Edit / ❌ Delete meetings

🔍 Tooltip & hover actions

📱 Fully responsive (mobile + desktop)

⚡ Lazy loading with Skeleton UI

🎯 Splash screen on initial load

🧠 State management using Redux Toolkit

🛠️ Tech Stack

React

Redux Toolkit

Material UI (MUI)

CSS3

📂 Project Structure
src/
│── components/
│   ├── MeetingTable.js
│   ├── Section.js
│
│── features/
│   ├── meetings/
│       ├── meetingSlice.js
│
│── pages/
│   ├── Dashboard.js
│
│── styles/
│   ├── style.css
│
│── App.js
│── index.js
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/your-username/meeting-dashboard.git
cd meeting-dashboard
2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm start

👉 App will run at:

http://localhost:3000
4️⃣ Build for production
npm run build