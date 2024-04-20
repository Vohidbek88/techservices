import  axiosInstance from "./api"

 function useHttp (){
   async  function $get(url,params,config){
     return new Promise(async(resolve,reject)=>{
        axiosInstance.get(url,{params,...config})
        .then((response)=>resolve(response))
        .catch((err)=>reject(err));
     })    
  };

   async function $post(url,data,config){
    return new Promise(async(resolve,reject)=>{
       axiosInstance.post(url,data,config)
       .then((response)=>resolve(response))
       .catch((err)=>reject(err));
    })
    
   }
  return { $get , $post}
}

export { useHttp }