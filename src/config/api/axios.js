import axios from "axios";

export default axios.create({
  baseURL:
   // "https://eedusys-backend.onrender.com",
     //"http://localhost:3500",
     "eedusys-backend-production.up.railway.app",

  headers: { "Content-Type": "application/json" },
});
