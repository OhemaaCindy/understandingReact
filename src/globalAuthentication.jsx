// import React, { useContext, useState } from "react";
// import { UserContext } from "./userContext";
// import { fetching } from "./index.js";

// const GlobalAuthentication = () => {
//   const [error, setError] = useState(null);
//   const { login } = useContext(UserContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetching.post("/blogs", {
//         title: "",
//         author: "",
//       });
//       console.log("🚀 ~ handleSubmit ~ res:", res);

//       login();
//     } catch (error) {
//       setError(error.message);
//       console.log("🚀 ~ handleSubmit ~ error:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="p-4">
//         {error && <span style={{ color: "red" }}>{error.message}</span>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" placeholder="Input blog title" />
//           <input type="text" placeholder="Input blog author" />

//           <button
//             type="submit"
//             className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GlobalAuthentication;
