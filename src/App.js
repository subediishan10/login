import { useForm } from "react-hook-form";
import './App.css';

function App() {
  
  const {register,
         handleSubmit, 
         formState: { errors }} =useForm();
    const onSubmit = (data) => {
     const userData =JSON.parse(localStorage.getItem(data.email));
     if(userData){
      if(userData.password==data.password){
        console.log(userData.name + "You are successfully Logged In");
      }else{
        console.log(userData.name +"Email or Password is not matching with our record");
      }
    }else{
         console.log("Email or password is not matching with our record")
      } 
    };
  return (
    <>
     <h1 className="title">  Registration form</h1>

    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")}/>
      <input type="email" {...register("email",{required:true})}/>
  
       {errors.email&& <span style={{color: "red"}}>
       *Email* is mandatory
     </span>
       }
      <input type="password" {...register("password")}/>
      <button className="btn">Submit</button>
    </form>
    </>
  );
}
export default App;


