const login=async(username,password)=>{
const baseUrl=process.env.REACT_APP_BASE_URL
try{
    const response=await fetch(`${baseUrl}/auth/login`,{
      method:"POST",
      headers:{
        "Content type":"application/json",
        
      } ,
      body:JSON.stringify({ username,password}),

    }) 
    return response.json();

}catch(error){
    return `failed to login ${error.message}`
}
   
}

