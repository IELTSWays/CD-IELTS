import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Otp from "@/pages/Otp";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Books from "@/pages/Books";
import Orders from "@/pages/Orders";
import Guide from "@/pages/Guide";
import Reports from "@/pages/Reports";
import Speaking from "@/pages/Speaking";
import Tickets from "@/pages/Tickets";
import SingleTeacher from "@/pages/SingleTeacher";
import NotFound from "@/pages/NotFound";
import IELTSReading from "@/pages/IELTSReading";

import DD from "@/pages/IELTS/14/01/DragDrop";

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
          <Route element={<Reports />} path="/reports" />
          <Route element={<Speaking />} path="/speaking" />
          <Route element={<Tickets />} path="/tickets" />
          <Route element={<SingleTeacher />} path="/teachers/:username" />
          {/* <Route element={<IELTSReading />} path="/IELTS/Reading" /> */}

          {/* 14-01 */}
          <Route element={<Book14_Test_1_Reading />} path="/IELTS/Reading" />
          <Route element={<Book14_Test_1_Writing />} path="/IELTS/Writing" />
          <Route element={<Book14_Test_1_Listening />} path="/IELTS/Listening" />



          <Route element={<DD />} path="/DD" />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route element={<Otp />} path="/otp" />
      </Routes>
    </Router>
  );
};

export default MainRoutes;