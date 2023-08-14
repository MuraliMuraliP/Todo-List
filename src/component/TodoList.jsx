import React from "react";
import { useEffect, useState } from "react";

const TodoList = () => {
    const [data, setdata] = useState("");
    const [newdata, setnewdata] = useState({
        task: "",
        status: true,
        datetime: new Date()
    });
    useEffect(() => {
        fetchtodo_list();
    }, [])
    const handlenew = () => {
        const request = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newdata)
        };
        fetch("https://64d461f2b592423e469410ba.mockapi.io/api/v1/todo/", request)
            .then((res) => res.json())
            .then((json) => {
                alert("successfully created");
                setdata([...data, json]);
            }).catch((error) => console.error(error));
    }

    const fetchtodo_list = () => {
        fetch('https://64d461f2b592423e469410ba.mockapi.io/api/v1/todo')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setdata(json);
            })
            .catch((error) => console.error(error));
    };
    const delete_todo = (id) => {
        const request = {
            method: "DELETE",
            headers: {
                'content-Type': 'application/json'
            },
        };
        fetch('https://64d461f2b592423e469410ba.mockapi.io/api/v1/todo/${id}', request)
            .then((res) => res.json())
            .then((json) => {
                fetchtodo_list();
                alert("record deleted successfully")
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <div>Todo</div>
            <input value={newdata.task} placeholder="Enter a name" onChange={(e) => setnewdata({ ...newdata, task: e.target.value })} />
            <button onClick={() => handlenew()}>create new todo</button>{" "}
            <ol>
                {data ? (
                    data.map((todo, index) => {
                        return (
                            <li key={"index ${index}"}>
                                <label style={{ color: todo.status ? 'green' : 'red' }}>
                                    {todo.task} <span>{todo.datetime}</span></label>
                                <button onClick={() => delete_todo(todo.id)}>Delete</button>
                            </li>
                        )
                    })
                ) :
                    (
                        <li>No data Found</li>
                    )}
            </ol>
        </>
    )
}

export default TodoList;