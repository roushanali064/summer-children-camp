import { useContext } from "react";
import { AuthContext } from "../../../Shared/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {

    const {user} = useContext(AuthContext)
    
    const {data:paymentHistroy=[]} = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-children-camp-server.vercel.app/payments/${user?.email}`)
            return res.json()
        }
    })

    return (
        <div  className="bg-[#FFF7DF] pt-2 p-20 rounded">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center pb-2">My Selected Class</h2>
            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th> Transaction Id</th>
                            <th> Instructor name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistroy.map((history, index) => <tr
                                key={history._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {history.name}
                                </td>
                                <td>
                                    {history.transactionId}
                                </td>
                                <td>
                                    {history.instructor}
                                </td>
                                <td className="text-right">{history?.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;