import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Users2 = () => {

    const { isPending, isError, error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://coffiee-store-api.vercel.app/user');
            return res.json();
        }
    })

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('https://coffiee-store-api.vercel.app/user')
    //         .then(res => res.json())
    //         .then(data => {
    //         setUsers(data)
    //     })
    // },[])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result?.isConfirmed) {
                fetch(`https://coffiee-store-api.vercel.app/user/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res?.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                            // const remainingUsers = users?.filter(user => user._id !== id);
                            // setUsers(remainingUsers);
                        }
                    })
            }
        })
    }

    if (isPending) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if (isError) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            {/* <h2>Users : {loadedUsers.length} </h2> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Sign In</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users2;