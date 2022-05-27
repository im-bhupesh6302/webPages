import React, { useEffect, useState } from "react";
// import * as yup from 'yup'
// import userSchema from "../component/UserValidation";
import Axios from 'axios';
const Users = () => {

    // Get data from api start
    const [userList, setuserList] = useState([])
    const getData = () => {
        fetch('https://crudcrud.com/api/003932e3d5f9486f81eb4a936adb16c8/car')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setuserList(res)
            })
    }

    useEffect(() => {
        getData()
    }, [setuserList])

    // delete api 
    const deleteapi = (id) => {
        const myDataObject = id;
        fetch('https://crudcrud.com/api/003932e3d5f9486f81eb4a936adb16c8/car/' + myDataObject, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myDataObject)
        })
            .then(response => {
                return response.json()
            })
            .then(data =>
                // this is the data we get after doing the delete request, do whatever you want with this data
                console.log(data), getData

            )
    }
    //  vValidate
    const Validate = async (event) => {
        event.preventDefault()

        console.log(data)
        if (data.model === '' || (Object.keys(data).length === 0 && data.constructor === Object)) {
            alert("Fill model")
        }
       else if (data.color === '' ) {
            alert("Fill color")
        }else if (data.brand === '' ) {
            alert("Fill Brand")
        }else if (data.milege === '' ) {
            alert("Fill MIlege")
        }else if (data.topspeed === '' ) {
            alert("Fill Topspeed")
        }
        Axios.post(url, data)
            .then((res) => {
                console.log(res.data)
                getData()
            })
      /*   console.log('-------', event.target)
        //   event.preventDefault()
        let formData = {
            color: event.target.value,
            model: event.target.value,
            brand: event.target.value,
            milege: event.target.value,
            topspeed: event.target.value
        }
        const isvalid = await userSchema.isvalid(formData)
        console.log(isvalid) */
    }

    // add data to api
    const url = "https://crudcrud.com/api/003932e3d5f9486f81eb4a936adb16c8/car/";
    const [data, setdata] = useState({})
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setdata(newdata);
        console.log(newdata);
    }
    // function submit(e) {

    // }

 

    return (
        <div className="container">
            <div className="text-end">
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModa" >Add Cars</button>
            </div>


            <div className="row">
                {
                    userList.map((users) => {

                        return (
                            <div className="card" id="honda" style={{ backgroundColor: `${users.color}` }}>
                                <div className="card-body">
                                    <ul className="card-title fw-bolder"><span>Brand:</span>{users.brand}</ul>
                                    <li className="card-text" ><span>Color:</span>{users.color}</li>
                                    <li className="card-text"><span>Milege:</span>{users.milege}</li>
                                    <li className="card-text"><span>Model:</span>{users.model}</li>
                                    <li className="card-text"><span>TopSpeed: </span>{users.topspeed}</li>
                                    <div className="btn btn-group" >
                                        {/*  */}

                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Edit
                                        </button>
                                        <button type="button" className="btn btn-outline-primary" onClick={() => {

                                            console.log(users._id)
                                            deleteapi(users._id);
                                        }

                                        } >
                                            Delete
                                        </button>
                                    </div>

                                    {/*Edit  */}
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Edit the Car Datas</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label for="model">model</label><br />
                                                    <input className='form-control ' type="text" id="model" onChange={(e) => {

                                                        console.log(e)
                                                        handle(e)
                                                        /*   handleChange() */
                                                    }} value={data.model} ></input>{/* <span>{formErrors.model}</span> */}<br />
                                                    <label for="brand">brand</label><br />
                                                    <input className='form-control ' type="text" id="brand" onChange={(e) => {
                                                        handle(e)
                                                        /*            handleChange() */
                                                    }} value={data.brand} ></input>{/* <span>{formErrors.brand}</span> */}<br />
                                                    <label for="color">color</label><br />
                                                    <input className='form-control ' type="text" id="color" onChange={(e) => {
                                                        handle(e)
                                                        /*      handleChange() */
                                                    }} value={data.color}></input>{/* <span>{formErrors.color}</span> */}
                                                    <label for="milage">milege</label><br />
                                                    <input className='form-control ' type="text" id="milage" onChange={(e) => {
                                                        handle(e)
                                                        /*         handleChange() */
                                                    }} value={data.milege}></input>{/* <span>{formErrors.milege}</span> */}
                                                    <label for="topspeed">topspeed</label><br />
                                                    <input className='form-control ' type="text" id="topspeed" onChange={(e) => {
                                                        handle(e)
                                                        /*                   handleChange() */
                                                    }} value={data.topspeed}></input>{/* <span>{formErrors.topspeed}</span> */}

                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={(e) => {
                                                        /*   handleSubmit() */
                                                        console.log(users._id)
                                                        deleteapi(users._id);
                                                        Validate(e)

                                                    }}>Understood</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End */}



                                    {/* add */}


                                    <div className="modal fade" id="exampleModa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Add Cars Datas</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">


                                                    <form onSubmit={(e) => Validate(e)}>

                                                        <label for="model">model</label><br />
                                                        <input className='form-control ' type="text" id="model" onChange={(e) => {
                                                            console.log(e)
                                                            handle(e)
                                                        }} value={data.cmode}></input><br />
                                                        <label for="brand">brand</label><br />
                                                        <input className='form-control ' type="text" id="brand" onChange={(e) => { handle(e) }} value={data.brand} ></input><br />
                                                        <label for="color">color</label><br />
                                                        <input className='form-control ' type="text" id="color" onChange={(e) => { handle(e) }} value={data.color} ></input>
                                                        <label for="milege">milege</label><br />
                                                        <input className='form-control ' type="text" id="milege" onChange={(e) => { handle(e) }} value={data.milege} ></input>
                                                        <label for="topspeed">topspeed</label><br />
                                                        <input className='form-control ' type="text" id="topspeed" onChange={(e) => { handle(e) }} value={data.topspeed}></input>
                                                        <button type="submit" className="btn btn-primary" value={data}>Save changes</button>
                                                    </form>


                                                </div>
                                               
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>



                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* end */}


                                </div>
                            </div>
                        )

                    })
                }
            </div>


        </div >
    );
}
export default Users;




