import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PerfilSimple from "./pages/PerfilSimple";
import Perfil from "./pages/Perfil";
import Payment2 from "./pages/Payment2";
import Payment1 from "./pages/Payment1";
import WorkoutPlanDetail10 from "./pages/WorkoutPlanDetail10";
import Descanso5 from "./pages/Descanso5";
import Descanso4 from "./pages/Descanso4";
import Descanso3 from "./pages/Descanso3";
import Descanso2 from "./pages/Descanso2";
import Frame11 from "./pages/Frame11";
import Payment from "./pages/Payment";
import WorkoutPlanDetail2 from "./pages/WorkoutPlanDetail2";
import WorkoutPlanDetail1 from "./pages/WorkoutPlanDetail1";
import WorkoutPlanDetail from "./pages/WorkoutPlanDetail";
import Frame from "./pages/Frame1";
import Descanso1 from "./pages/Descanso1";
import Descanso from "./pages/Descanso";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/perfil":
        title = "";
        metaDescription = "";
        break;
      case "/payment1":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/ej1fin":
        title = "";
        metaDescription = "";
        break;
      case "/postpostmarip":
        title = "";
        metaDescription = "";
        break;
      case "/postmarip":
        title = "";
        metaDescription = "";
        break;
      case "/postdescpress":
        title = "";
        metaDescription = "";
        break;
      case "/descansopress":
        title = "";
        metaDescription = "";
        break;
      case "/calendario2":
        title = "";
        metaDescription = "";
        break;
      case "/payment2":
        title = "";
        metaDescription = "";
        break;
      case "/mariposa":
        title = "";
        metaDescription = "";
        break;
      case "/workout-plan-detail":
        title = "";
        metaDescription = "";
        break;
      case "/workout-plan-detail2":
        title = "";
        metaDescription = "";
        break;
      case "/calendario1":
        title = "";
        metaDescription = "";
        break;
      case "/descanso1":
        title = "";
        metaDescription = "";
        break;
      case "/descanso":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PerfilSimple />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/payment1" element={<Payment2 />} />
      <Route path="/payment" element={<Payment1 />} />
      <Route path="/ej1fin" element={<WorkoutPlanDetail10 />} />
      <Route path="/postpostmarip" element={<Descanso5 />} />
      <Route path="/postmarip" element={<Descanso4 />} />
      <Route path="/postdescpress" element={<Descanso3 />} />
      <Route path="/descansopress" element={<Descanso2 />} />
      <Route path="/calendario2" element={<Frame11 />} />
      <Route path="/payment2" element={<Payment />} />
      <Route path="/mariposa" element={<WorkoutPlanDetail2 />} />
      <Route path="/workout-plan-detail" element={<WorkoutPlanDetail1 />} />
      <Route path="/workout-plan-detail2" element={<WorkoutPlanDetail />} />
      <Route path="/calendario1" element={<Frame />} />
      <Route path="/descanso1" element={<Descanso1 />} />
      <Route path="/descanso" element={<Descanso />} />
    </Routes>
  );
}
export default App;
