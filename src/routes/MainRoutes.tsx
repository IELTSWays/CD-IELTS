import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import IELTSRoutes from "./IELTSRoutes";
import ConfirmRoutes from "./ConfirmRoutes";

import Otp from "@/pages/Otp";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Books from "@/pages/Products/Books";
import Orders from "@/pages/Orders";
import Guide from "@/pages/Guide";
import Reports from "@/pages/Reports";
import Speaking from "@/pages/Speaking";
import Tickets from "@/pages/Tickets";
import SingleTeacher from "@/pages/SingleTeacher";
import NotFound from "@/pages/NotFound";
import File from "@/pages/File";
import Exams from "@/pages/Exams";
import DND from "@/pages/DND";
import ExaminerProfile from "@/pages/ExaminerProfile"

import Confirm from "@/pages/Confirm";

import IELTS from "@/pages/IELTS"

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Books />} path="/books" />
          <Route element={<Orders />} path="/orders" />
          <Route element={<Guide />} path="/guide" />
          <Route element={<Speaking />} path="/speaking" />
          <Route element={<Tickets />} path="/tickets" />
          <Route element={<Exams />} path="/exams" />
          <Route element={<SingleTeacher />} path="/teachers/:username" />
          <Route element={<Reports />} path="/reports/:id" />
          <Route element={<DND />} path="/dnd" />

          {/* TEACHERS PANEL */}
          <Route element={<ExaminerProfile />} path="/examinerProfile" />
        </Route>
        <Route element={<IELTSRoutes />}>
          <Route element={<IELTS />} path="/IELTS/reading" />
          <Route element={<IELTS />} path="/IELTS/writing" />
          <Route element={<IELTS />} path="/IELTS/listening" />
        </Route>

        <Route element={<ConfirmRoutes />}>
          <Route element={<Confirm />} path="/confirm/:id" />
        </Route>
        
        <Route path="*" element={<NotFound />} />
        <Route element={<Otp />} path="/otp" />
        <Route element={<File />} path="/pdf" />
      </Routes>
    </Router>
  );
};

export default MainRoutes;