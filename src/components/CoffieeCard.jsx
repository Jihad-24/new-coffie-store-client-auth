/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffieeCard = ({ coffiee, coffiees, setCoffiees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffiee;

    const handleDelete = (_id) => {
        console.log(_id);
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
                fetch(` https://coffiee-store-api.vercel.app/coffiee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffiee has been deleted.',
                                'success'
                            )
                            const remaining = coffiees?.filter(coff => coff._id !== _id)
                            setCoffiees(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between w-full px-4 items-center">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffie/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffieeCard;