###live demo: https://goticket-bbzz.onrender.com/

# 🚌 GoTicket - Smart Bus Ticket Booking Assistant

GoTicket is an modern web platform where users can **search and book bus tickets** easily.  
It comes with an integrated **Rasa-powered chatbot** that helps users with queries like:

> 💬 “Show me buses from Kanpur to Delhi for tomorrow.”

---

### ✨ Features
- 🧠 Rasa chatbot for natural ticket queries  
- 🖥️ Modern React + Tailwind UI  
- 🔗 Integration-ready for RedBus / MakeMyTrip APIs  
- 🧾 Dynamic bus search and booking form  
- 🔍 Real-time chatbot + backend connection  

---

### 🏗️ Tech Stack
| Layer | Technology |
|-------|-------------|
| Frontend | React, TailwindCSS |
| Backend | Python (Flask or FastAPI) |
| Chatbot | Rasa Open Source |
| APIs | RedBus, MakeMyTrip (integration ready) |

---

### ⚙️ Setup Guide
```bash
# Clone repo
git clone https://github.com/<your-username>/GoTicket.git
cd GoTicket

# Run frontend
cd go-ticket-frontend
npm install
npm run dev

# Run Rasa chatbot
cd ../rasa_backend
rasa train
rasa run actions &
rasa shell
