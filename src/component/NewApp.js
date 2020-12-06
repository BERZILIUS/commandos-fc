import React from 'react'
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const NewApp=()=> {
  return (
      <>
    <div className="container">
      <h1 className="text-center"> welcome</h1>
      <br/>
      <div className="text-center">
     
      <div class="card" style={{width: "18rem"}}>
          <img src="https://picsum.photos/id/237/150/150" class="card-img-top" alt="..."/>
           <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=NvmkaX5PTDE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=77" 
            class="btn btn-outline-success">Go somewhere</a>
      </div>
      </div>
   </div>
    </div>
    </>
  )
}

export default NewApp
