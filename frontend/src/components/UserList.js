import React, {useState, useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data)
    };

    const deleteUsers = async () => {
        try {
            await axios.delete('http://localhost:5000/users/${id}');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns">
        <div className="column is-half">
            <Link to ="add" className="button is-success">
            Add New
            </Link>
            <table className="table is-striped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                    <tr key={users._id}>
                        <td>{index + 1}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.gender}</td>
                        <td>
                            <Link
                             to={'edit/${user._id}'} 
                             className="button is-info is-small">
                            Edit
                             </Link>
                            <button 
                            onClick={() => deleteUser(user._id)}
                            className="button is-danger is-small">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
};

export default UserList;