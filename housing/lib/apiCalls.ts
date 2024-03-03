import axios from "axios";





  export const log_in= async (email:string,password:string)=>{
    try
     {
        const res= await axios.post(`http://localhost:3000/nour2/Login`,{user_password:password,email:email})
        return res.data
    }
    catch (error) {
        console.error('Error in login (service) => ', error);
        throw error; 
 }
}

export const register_me= async (email:string,password:string,fname:string,lname:string)=>{ 
    try
    {
       const res= await axios.post(`http://localhost:3000/nour2/CreateUser`,{fname:fname,
       lname:lname,
       user_password:password,
       email:email,
       doc1:"doc1",
       doc2:"doc2",
       doc3:"doc3",
       doc4:"doc4",
       status:"pending"})
       return res.data
   }
   catch (error) {
       console.error('Error in register (service) => ', error);
       throw error; 
}}

export const updateUser= async (userId:number,obj:any)=> {
     try
    {
       const res= await axios.put(`http://localhost:3000/nour2/Update/${userId}`,obj)
       return res.data
   }
   catch (error) {
       console.error('Error in updateUser (service) => ', error);
       throw error; 
}}


export const deleteUser= async (userId:number)=> {
     try
    {
       const res= await axios.delete(`http://localhost:3000/nour2/Delete/${userId}`)
       return res.data
   }
   catch (error) {
       console.error('Error in deleteUser (service) => ', error);
       throw error; 
}}

 export const SeeAllUser=async () =>{ 
    try
    {
       const res= await axios.get(`http://localhost:3000/nour2/AllUsers`)
       return res.data
   }
   catch (error) {
       console.error('Error in SeeAllUser (service) => ', error);
       throw error; 
} }


export const SeeOneUser=async (UserId:number)=>{ 
    try
    {
       const res= await axios.get(`http://localhost:3000/nour2/OneUser/${UserId}`)
       return res.data
   }
   catch (error) {
       console.error('Error in SeeOneUser (service) => ', error);
       throw error; 
}}

