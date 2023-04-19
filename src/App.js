import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import data from './data.js'
import Detail from './detail.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App(){
  let [shoes] = useState(data); 
  let navigate = useNavigate()


  return (
    <div className="App">
      (생략)
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <button onClick={() => navigate('/detail')}>이동버튼</button>
      <Routes>
        <Route path="/detail" element={ <Detail shoes={shoes}/> }/> 
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
      </Routes>
      <div className="container">
        <div className="row">
         <Card shoes={shoes[1]} i={2}/>
         <Card shoes={shoes[2]} i={2}/>
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

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>120000원</p>
    </div>
  )
}


export default App;
