import MainLayout from "@/layouts/MainLayout";
import { BigCalendar } from "@/pages/calendar";
import { Route, Routes } from "react-router-dom";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<BigCalendar />} />
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
