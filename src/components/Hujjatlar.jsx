import React, { useState } from 'react'
import axios from 'axios'
const Hujjatlar = () => {
  const [fayl,setHujjat]=useState(null)
  const [yulash,setYuklash]=useState(false)
const [progres,setProgres]=useState({statred:false,pc:0})
const [msg,setMSg]=useState(null)
const fileDown=async()=>{

  try {
    resdown=await axios.post(`https://shaxobiddin20.pythonanywhere.com/api/v1/file/dow_word/`)
  } catch (error){
    console.log(error);
  }
}


  const HandleUpload=async()=>{

   if(!fayl){
    setMSg('No file selected!')
    return
   }

  
const token=localStorage.getItem('token')

   const fd=new FormData()
   fd.append('file',fayl)
   console.log(fayl);

   setMSg('Uploading...')
   setProgres(prevstate=>{
    return{...prevstate,statred:true}
   })
  
  
   await axios.post('https://shaxobiddin20.pythonanywhere.com/api/v1/file/excel_to_word/',fd,{
      onUploadProgress:(progresevent)=>{setProgres(prevstate=>{
        return {...prevstate,pc:progresevent.progress*100}
      })},
      headers:{
        'Content-Type': 'multipart/form-data',
         Authorization:`Token ${token}`,
      }
    }).then(res=>{
 
      setYuklash(true)
      setMSg('Upload Succesful!')
      console.log(res.data);
    }).catch(error=>{

      setMSg('Upload Xatolik!')
      console.error(error)
    })


   

  }

  return (
    <div className='text-center mt-5'>
       <h1> Hujjatlardan online foydlalanish</h1>
       <input type="file" name='file' accept='.xlsx, .xls' className='form-control w-50 m-auto' onChange={e=>setHujjat(e.target.files[0])} />
       <button className='btn btn-primary' onClick={HandleUpload}>Upload</button>
    {
      progres.statred && <progress max={'100'} value={progres.pc}>

      </progress>
    }
      {
      msg && <span>{msg}</span>
    }
    {
      yulash &&  <button className='btn btn-success' onClick={fileDown}>Tayyor faylni yuklash!</button>
    }
    </div>
  )
}

export default Hujjatlar