import axios from "axios"
import { useEffect, useState } from "react"
import { IEmployee } from "../interface/employee"

export default function HomePage() {
    const [employees, setEmployees] = useState<IEmployee[]>([])

    const fetchEmployees = async () => {
        const response = await axios.get("https://spa.teetouch.dev/employee")
        setEmployees(response.data.data)
    }

    const handleDelete = async (id: number) => {
        await axios.delete(`https://spa.teetouch.dev/employee/${id}`)
        fetchEmployees()
    }

    useEffect(() => {
        fetchEmployees()
    }, [])
    return (
        <>
            <div className="relative overflow-x-auto mt-20">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Employee Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employee Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr className="bg-white border-b" key={employee._id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {employee.name}
                                </th>
                                <td className="px-6 py-4">
                                    {employee.age}
                                </td>
                                <td className="px-6 py-4">
                                    {employee.position}
                                </td>
                                <td className="px-6 py-4">
                                    $ {employee.salary}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex">
                                        <a href={`/edit-employee/${employee._id}`} className="font-medium text-blue-600 hover:underline">Edit</a>
                                        <button onClick={() => handleDelete(employee._id)} className="font-medium text-red-600 hover:underline ml-4">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}