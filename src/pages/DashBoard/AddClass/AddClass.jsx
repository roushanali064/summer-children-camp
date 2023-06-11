

const AddClass = () => {
    return (
        <div>
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">Add Class</h2>
            <form>
                <div className="flex gap-5 text-xl font-bold ">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="url" placeholder="Enter Image Url" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex gap-5 text-xl font-bold">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex gap-5 text-xl font-bold">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="text" placeholder="Add available seats" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Add price" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <input className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white w-full mt-5" type="submit" value="Add class" />
            </form>
        </div>
    );
};

export default AddClass;