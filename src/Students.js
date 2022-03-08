import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import StudentNextPage from './SudentNextPage'


const Students = () => {
  const[myData]=useState(
    [
      { 
          id:1,
          name:'John',
          age: '26',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:2,
          name:'Biden',
          age: '25',
          course: 'MERN',
          batch: 'November'
      },
      {
          id:3,
          name:'Doe',
          age: '26',
          course: 'MERN',
          batch: 'September'
      },
      {
          id:4,
          name:'Barar',
          age: '26',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:5,
          name:'John',
          age: '22',
          course: 'MERN',
          batch: 'September'
      },
      {
          id:6,
          name:'christ',
          age: '23',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:7,
          name:'Elent',
          age: '24',
          course: 'MERN',
          batch: 'November'
      },
  
  ]
  )
    
  const [data,setData]=useState({
    toggleShow: true,
  });



  const [objState,setObjState]=useState({
    id:'',
    name:'',
    age : '',
    course : '',
    batch : '',
  })


const HandleData=(e)=>{
  setObjState({...objState,[e.target.name]:e.target.value})
}

const HandleSubmit=(e)=>{
  e.preventDefault()
  // console.log(objState);
  var ObjData={
    name:objState.name,
    age:objState.age,
    course:objState.course,
    batch:objState.batch,
  }
  // console.log(ObjData);
  ObjData=myData;
  ObjData.id=myData.length;
  // console.log(ObjData);
  ObjData=objState;
  myData.push(ObjData)
  // console.log(myData);
  setObjState({id:'',name:'',age:'',course:'',batch:''})
  setData({toggleShow:!data.toggleShow})
}

  const toggleFunc=(e)=>{
    setData({toggleShow:!data.toggleShow})
    
  }
   
  const editFunc=(e)=>{
    console.log(myData);
    setData({toggleShow:!data.toggleShow})
  }

  return (
    <>
      {data.toggleShow ?
        <div>
          <div className="header">
            <div className="head">
              Student Details
            </div>
            <div className="head_btn">
              <Link to='/students-desc' ><button className='h_btn' onClick={toggleFunc} >Add Student</button></Link>
            </div>
          </div>
          <StudentNextPage ObjPassing={myData}  toggleFunc={toggleFunc} editFunc={editFunc} />
        </div>:
        <div className='container'>
          <form onSubmit={toggleFunc} className='form_submit'>
            <input type="text" className='inpt' name='name' onChange={HandleData} value={objState.name} placeholder='Enter Your Name' />
            <input type="text" className='inpt' name='age' onChange={HandleData} value={objState.age} placeholder='Enter Your Age' />
            <br /><br />
            <input type="text" className='inpt' name='course' onChange={HandleData} value={objState.course} placeholder='Enter Fav Course' />
            <input type="text" className='inpt' name='batch' onChange={HandleData} value={objState.batch}  placeholder='Your Batch'/>
            <br /><br />
            <button onClick={toggleFunc} className='simplebtns'>CANCEL</button>
            <button type='submit' onClick={HandleSubmit} className='form_btn simplebtns' >SUBMIT</button>
          </form>
        </div>
      }
    </>
  )
}

export default Students