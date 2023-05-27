
import Rodal from 'rodal';

const StudentDetail = ({ details,showModal,hideModal }: any) => {
    console.log(details)
    return (
    <Rodal
  visible={showModal}
  onClose={hideModal}
  width={400}
  height={200}
  className="rounded-lg bg-gray-100"
>
  <div className="p-6">
    <h3 className="text-2xl font-bold mb-4">Student Details</h3>
    <div className="text-left">
      <p className="mb-2">
        <strong>Name:</strong> {details.name}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {details.email}
      </p>
      <p className="mb-2">
        <strong>Class:</strong> {details.class}
      </p>
    </div>
  </div>
</Rodal>

    )
}

export default StudentDetail