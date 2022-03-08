import React from 'react'

const StudentNextPage = ({ObjPassing,toggleFunc,Edit}) => {
 
  return (
    <>
   <div className="table">
     <div className="box">
        <div className='name for_left' >NAME</div>
        <div className='age for_margin'>AGE</div>
        <div className='course for_margin'>COURSE</div>
        <div className='batch for_margin'>BATCH</div>
       <span>Change</span>
    </div>
   {ObjPassing.map((ele,index)=>{
    return(

   <div className="box" key={ele.id}>
      <div className='name' >{ele.name}</div>
     <div className='age for_margin'>{ele.age}</div>
      <div className='course for_margin'>{ele.course}</div>
      <div className='batch for_margin'>{ele.batch}</div>
      <a href='student' onClick={Edit} >Edit</a>
                    </div>
                )
              })}
        </div>
    </>
  )
}

export default StudentNextPage