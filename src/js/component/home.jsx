
import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//add en el array > concat
// borra del array > filter
// update > map

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>Todo List</h1>
			<ul>
				<li>
					<input 
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if(e.key === "Enter"){
							setTodos(todos.concat(inputValue));
						}
					}}
					placeholder="Que tienes que hacer ?" />
					</li>
	{todos.map((item, index) => (
		<li>
			{item}{" "}
			<i
			class="fas fa-trash-alt"
			onClick={() => 
				setTodos(
					todos.filter(
						(t, currenIndex) =>
						index != currenIndex
					)
				)
			}></i>
		</li>
	))}
			
			</ul>
		</div>
	);
};

export default Home;
