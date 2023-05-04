
const StudentDetail = ({ details }: any) => {
    console.log(details)
    return (
        <div className="w-1/2 bg-gray-400 h-40 py-10 px-4">
            <h3>Student Details</h3>
            <div className="text-left mt-4">
                <p> Name: {details.name}</p>
                <p> email: {details.email}</p>
                <p>class: {details.class}</p>
            </div>
        </div>
    )
}

export default StudentDetail