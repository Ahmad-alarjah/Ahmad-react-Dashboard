import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard  from "../src/pages/Dashboard/Dashboard.jsx";
import Team from "./pages/Team/Team.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Invoices from "./pages/Invoices/Invoices.jsx";
import Form from "./pages/Form/Form.jsx";
import Calendar from "./pages/Calendar/Calendar.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import Bar from "./pages/barchart/Bar.jsx";
import Pie from "./pages/pieChart/Pie.jsx";
import Line from "./pages/lineChart/Line.jsx";
import Geography from "./pages/geography/Geography.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} >
    <Route index element={<Dashboard />} />
    <Route path="team" element={<Team />} />
    <Route path="contacts" element={<Contacts /> }  />
    <Route path="invoices" element={<Invoices /> }  />
    <Route path="/form" element={<Form /> }  />
    <Route path="/calendar" element={<Calendar /> }  />
    <Route path="/faq" element={<Faq /> }  />
    <Route path="/bar" element={<Bar /> }  />
    <Route path="/pie" element={<Pie /> }  />
    <Route path="/line" element={<Line /> }  />
    <Route path="/geography" element={<Geography /> }  />





  </Route>)
  );


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
