// import { createContext, useState } from "react";

// const UserContext = createContext();

// export function UserProvider({ children }) {
  
//   const [users, setUsers] = useState([
//     { name: "xyz", email: "xyz@gmail.com", password: "xyz", amount: 1000 },
//   ]);

//   return (
//     <UserContext.Provider value={{ users, setUsers }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserContext;

import {createContext} from 'react';
const UserContext = createContext();
export default UserContext ;