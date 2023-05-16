import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function AddList() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState([]);

  //Menambahkan List baru
  const addTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      title: inputTodo,
      isDone: false,
    };
    if (inputTodo === "") {
      console.log(newTodo);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add todo, check your input again",
      });
    } else {
      axios
        .post("https://644e64ed1b4567f4d5866c65.mockapi.io/todo", newTodo)
        .then(() => {
          setTodos([...todos, newTodo]);
          setInputTodo("");
        });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Todo has been added Successfully",
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  //mengambil data dari API
  useEffect(() => {
    axios("https://644e64ed1b4567f4d5866c65.mockapi.io/todo").then((result) =>
      setTodos(result.data)
    );
  }, []);

  //menghapus list todo
  const deleteTodo = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this todo?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://644e64ed1b4567f4d5866c65.mockapi.io/todo/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "", "success");
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
          });
      }
    });
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-44">
        <form onSubmit={addTodo} className="flex mt-20 mb-10">
          <input
            type="text"
            value={inputTodo}
            onChange={(event) => setInputTodo(event.target.value)}
            className="placeholder:text-slate-300 block bg-tm-primary w-96 rounded-md py-3 pl-5 shadow-md focus:outline-none  focus:ring-tm-fourth focus:ring-2 sm:text-md text-white text-lg"
            placeholder="What Todo"
          />
          <button className="rounded-md bg-tm-fourth ml-4 px-3 font-semibold text-white hover:bg-black text-lg">
            Add
          </button>
        </form>
        <div className="space-x-5 font-medium text-lg text-white">
          <button className="rounded-full bg-tm-third bg-opacity-75 px-5 py-1 hover:bg-tm-third">
            <NavLink>All</NavLink>
          </button>
          <button className="rounded-full bg-tm-third bg-opacity-75 px-5 py-1 hover:bg-tm-third">
            <NavLink>Active</NavLink>
          </button>
          <button className="rounded-full bg-tm-third bg-opacity-75 px-5 py-1 hover:bg-tm-third">
            <NavLink>Completed</NavLink>
          </button>
        </div>
        {todos.map((item) => (
          <div key={item.id}>
            <div className="max-w-md my-10 rounded-md p-5 shadow-lg border border-slate-200 flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  name="CekTodo"
                  id=""
                  className="checked:bg-blue-500 w-5 h-5"
                  checked={item.isDone ? item.isDone : false}
                />
                <p className="font-semibold text-lg">{item.title}</p>
              </div>
              <div className="space-x-4">
                <button onClick={() => deleteTodo(item.id)}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="hover:text-tm-fourth w-5 h-5"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faPen}
                    className="hover:text-tm-fourth w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddList;
