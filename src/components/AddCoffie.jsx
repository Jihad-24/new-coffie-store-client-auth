/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2';

const AddCoffiee = () => {

    const handleAddCoffiee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffiee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffiee);

        // send data to the server
        fetch(' https:/coffiee-store-api.vercel.app/coffiee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffiee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffiee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-center font-extrabold mb-10 text-purple-500 text-4xl'>Add Coffiee Store</h1>
            <form onSubmit={handleAddCoffiee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-6 justify-center mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffiee Name</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Name</span>
                            <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Quantity</span>
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex gap-6 justify-center mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Supplier</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Supplier</span>
                            <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Taste Coffiee</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Taste</span>
                            <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Category and details row */}
                <div className='md:flex gap-6 justify-center mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffiee Category</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Category</span>
                            <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffiee Details</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Details</span>
                            <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* form photo row */}
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Coffiee Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span className='font-medium'>Photo</span>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg-[#D2B48C]' type="submit" value="Add Coffiee" />
            </form>

        </div>
    );
};

export default AddCoffiee;