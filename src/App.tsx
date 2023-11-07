import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import AddEmployeePage from "./pages/AddEmployee";
import EditEmployeePage from "./pages/EditEmployee";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
          <Route path="/edit-employee/:id" element={<EditEmployeePage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}