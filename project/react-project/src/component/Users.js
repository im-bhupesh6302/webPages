import React, { useEffect, useState } from "react";
// import UserService from "./userService";
// import axios from "axios";

const Users = () => {

    const [userList, fetchUsers] = useState([])

    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    userList.map((users) => {

                        return (



                            <div className="col-3 mb-3 ">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">UserID</h5>
                                        <p class="card-text">{users.userId}</p>
                                        <h5 class="card-title">ID</h5>
                                        <p class="card-text">{users.id}</p>
                                        <h5 class="card-title">Title</h5>
                                        <p class="card-text">{users.title}</p>
                                        <h5 class="card-title">Body</h5>
                                        <p class="card-text">{users.body}</p>
                                    </div>
                                </div>
                            </div>


                        )

                    })
                }
            </div>

        </div>
    );
}
export default Users;


// https://jsonplaceholder.typicode.com/users/1/posts