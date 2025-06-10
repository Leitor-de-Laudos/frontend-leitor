import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "@/pages/SignUp/index";
import { ProfileInfo } from "./pages/ProfileInfo";
import { ProfileEditInfo } from "./pages/ProfileEditInfo";
import { ReaderReport } from "./pages/ReaderReport";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SummaryReader } from "./pages/SummaryReader";
import { HistoricReaderReport } from "./pages/HistoricReaderReport";
import { Reminder } from "./pages/Reminder";
import { Archives } from "./pages/Archives";
import { ReminderForm } from "./pages/ReminderForm";
import { PrivateRoute } from "./components/PrivateRoute"; // componente para proteção

export function Router() {
  return (
    <Routes>
      {/* Rotas públicas: Auth */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>


      <Route path="/" element={<PrivateRoute element={<MainLayout />} />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<ProfileInfo />} />
        <Route path="profile/edit" element={<ProfileEditInfo />} />
      </Route>

      <Route path="/" element={<PrivateRoute element={<DefaultLayout />} />}>
        <Route path="reader" element={<ReaderReport />} />
        <Route path="reader/summary/:id" element={<SummaryReader />} />
        <Route path="reader/historic" element={<HistoricReaderReport />} />
        <Route path="reminder" element={<Reminder />} />
        <Route path="reminder/create" element={<ReminderForm />} />
        <Route path="archives" element={<Archives />} />
      </Route>
    </Routes>
  );
}