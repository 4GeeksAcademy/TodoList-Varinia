import React,{useState} from "react";

//include images into your bundle

//create your first component
const Home = () => {
	let[tarea, setTarea]=useState("")
	let [lista, setLista]=useState([])

const escribirTarea = (event) =>{
	setTarea (event.target.value)
}
const agregar = (event) =>{
	if (event.key==="Enter") {
		setLista ([...lista, tarea])
		setTarea ("")
	}
	
}
const eliminarTarea = (posicion) =>{
	setLista (lista.filter((item, index)=>index!==posicion))
}

	return (
		<div id="todoList" className="p-3 mb-5 bg-body-tertiary rounded border-bottom">
			<h1>todos</h1>
			<div className="paper bg-body text-body">
				<input type="text" placeholder="What needs to be done?" onChange={escribirTarea} value={tarea} onKeyDown={agregar}/>
					<ul className="list-unstyled text-start ">
						{lista.map((item,index)=>(<li key={index}>{item} <span onClick={()=>eliminarTarea(index)}> χ</span></li>))}				
					</ul>
					<p>{lista.length} item left</p>            		
			</div>
		</div>
	);
};

export default Home;