import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import data from './data.js'

function App(){
  let [shoes] = useState(data);

  return (
    <div className="App">
      (생략)
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[0].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].price }</p>
          </div>
          <div className="row">
          {shoes.map(shoe => (
            <div className="col-md-4" key={shoe.id}>
              <img src={shoe.link} width="80%" />
              <h4>{shoe.title}</h4>
              <p>{shoe.price}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;
