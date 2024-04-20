import React, { useState } from 'react'
import axios from 'axios'
import { useHttp } from "../service/httpRequest"


const Hujjatlar = () => {
  const {  $post,$get } = useHttp()
  const [fayl,setHujjat]=useState(null)
  const [yulash,setYuklash]=useState(false)
  const [faylsucces,faylsuccesSet]=useState('')
// const [progres,setProgres]=useState({statred:false,pc:0})
const [msg,setMSg]=useState(null)

const fileDown=async()=>{

   await $get(`file/dow_word/`,{
    responseType:'blob',

  })
  .then((res)=>{
    console.log(res)
     const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
        
        const link = document.createElement('a');

        link.href = downloadUrl;

        link.download=`folder` //any other extension

        document.body.appendChild(link);

        link.click();

        link.remove();
   window.URL.revokeObjectURL(downloadUrl)

  }).catch(error=>console.log(error))

  

  // try {
  //   resdown=await axios.post(`https://shaxobiddin20.pythonanywhere.com/api/v1/file/dow_word/`)
  // } catch (error){
  //   console.log(error);
  // }
}


  const HandleUpload=async()=>{

   if(!fayl){
    setMSg('No file selected!')
    return
   }


setMSg('Uploading...')

const fd=new FormData()
fd.append('excel_file',fayl)

try {
  const {  data} = await $post(`file/excel_to_word/`,fd)
  faylsuccesSet(data.output_papka)
  console.log(data);
  setYuklash(true)
  setMSg('Yulash muaffaqiyatli boldi!')
} catch (error) {
  setMSg('Yuklashda Xatolik! Internetni tekshiring')
      console.error(error)
}



  
  //  await axios.post('https://shaxobiddin20.pythonanywhere.com/api/v1/file/excel_to_word/',fayl,{
  //     onUploadProgress:(progresevent)=>{setProgres(prevstate=>{
  //       return {...prevstate,pc:progresevent.progress*100}
  //     })},
  //     headers:{
  //       'Content-Type': 'multipart/form-data',
  //        Authorization:`Token ${token}`,
  //     }
  //   }).then(res=>{
 
      // setYuklash(true)
      // setMSg('Upload Succesful!')
      // console.log(res.data);
  //   }).catch(error=>{

  //     setMSg('Upload Xatolik!')
  //     console.error(error)
  //   })


   

  }

  return (
    <div className='text-center mt-5'>
       <h1 className='mb-5'> Hujjatlardan online foydlalanish</h1>
       <input type="file" name='file' accept='.xlsx, .xls' className='form-control  m-auto w-mob' onChange={e=>setHujjat(e.target.files[0])}/>
       <button className='btn btn-primary mt-3' onClick={HandleUpload}>Upload</button>
   
      {
      msg && <span className='d-block my-3 fw-bold'>{msg}</span>
    }
    {
      yulash &&  <button className='btn btn-success' onClick={fileDown}>Tayyor faylni yuklash!</button>
    }
    </div>
  )
}

export default Hujjatlar