// import { ReactNode } from "react";
// import { useAppSelector } from "../../redux/features/hooks";
// import { useCurrentToken } from "../../redux/features/auth/authSlice";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({children}:{children: ReactNode}) => {
//    const {token} = useAppSelector(useCurrentToken)
//    console.log(token)
//    if(!token){
//     return <Navigate to="/login" replace={true}/>
//    }
//    return (
//        children
//     );
// };

// export default ProtectedRoute;
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/features/hooks";
import { ReactNode } from "react";

const ProtectedRoute = ({children}:{children: ReactNode}) => {
   const token = useAppSelector(useCurrentToken); // Correct usage of useCurrentToken
   console.log(token);
   if (!token) {
      return <Navigate to="/login" replace={true} />;
   }
   return children;
};

export default ProtectedRoute;
