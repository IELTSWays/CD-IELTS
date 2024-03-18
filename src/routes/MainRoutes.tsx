import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import IELTSRoutes from "./IELTSRoutes";
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

// Book14 Test 1
import Book14_Test_1_Writing from "@/pages/IELTS/14/01/IELTSWriting";
import Book14_Test_1_Reading from "@/pages/IELTS/14/01/IELTSReading";
import Book14_Test_1_Listening from "@/pages/IELTS/14/01/IELTSListening";

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
          
          <Route element={<ExaminerProfile />} path="/examinerProfile" />

        </Route>
        <Route element={<IELTSRoutes />}>
          {/* 14-01 */}
          <Route element={<Book14_Test_1_Reading />} path="/IELTS/Reading" />
          <Route element={<Book14_Test_1_Writing />} path="/IELTS/Writing" />
          <Route element={<Book14_Test_1_Listening />} path="/IELTS/Listening" />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route element={<Otp />} path="/otp" />
        <Route element={<File />} path="/pdf" />
      </Routes>
    </Router>
  );
};

export default MainRoutes;