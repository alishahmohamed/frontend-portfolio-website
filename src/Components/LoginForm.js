import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div >{error}</div>}
    </form>
//   <>
// <section class=" text-center text-lg-start">
 
//   <div class="card mb-3">
//     <div class="row g-0 d-flex align-items-center">
//       <div class="col-lg-4 d-none d-lg-flex">
//         <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
//           class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
//       </div>
//       <div class="col-lg-8">
//         <div class="card-body py-5 px-md-5">

//           <form className="login" onSubmit={handleSubmit}>
            
//             <div class="form-outline mb-4">
//               <input type="email" id="form2Example1" class="form-control" 
//               onChange={(e) => setEmail(e.target.value)}
//             value={email}
//     />
//               <label class="form-label" for="form2Example1">Email address</label>
//             </div>

            
//             <div class="form-outline mb-4">
//               <input type="password" id="form2Example2" class="form-control"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password} />
//               <label class="form-label" for="form2Example2">Password</label>
//             </div>

            

          
//             <button disabled={isLoading} type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
//             {error && <div >{error}</div>}
//           </form>

//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </>
  );
};

export default LoginForm;  
