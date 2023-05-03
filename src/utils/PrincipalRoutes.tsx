import { Navigate, Outlet } from "react-router-dom";

const PrincipalRoute = () => {
    const isPrincipal = localStorage.getItem("is_principal") == "true";
    return isPrincipal ? <Outlet /> : <Navigate to="/login" />;
};

export default PrincipalRoute;
