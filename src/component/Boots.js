import React from 'react'
import '/reacttut/newhtml/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Boots=()=> {
  return (
      <React.Fragment>
    <div>
     <h1 className="text-capitalize text-danger mt-n5">Welcome to my website</h1>

     <div className="container">
  <div className="row">
    <div className="col-sm"><div class="card">
  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."
      
      width="100px"
      height="200px"

  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>


    </div>
      <div classNameName="col-sm"><div className="card">
        <img src="https://picsum.photos/200/301" className="card-img-top" alt="..."
            
            width="100px"
            height="200px"
        />
           <div className="card-body">
            <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
</div>

    </div>
        <div classNameName="col-sm"><div className="card">
         <img src="https://picsum.photos/201/300" 
         className="card-img-top"
          alt="..."
         
         width="100px"
         height="200px"
         />
        <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>


    </div>
  </div>

      </div>
      </React.Fragment>
  )
}

export default Boots
