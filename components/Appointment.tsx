export default function Appointment({ appointment }: any) {
  return (
    <div
      key={appointment.id}
      className="mb-4 rounded-sm bg-gray-100 p-2 shadow-sm"
    >
      <div className="flex flex-col justify-between">
        <h1 className="font-light">{appointment.date}</h1>

        <p>{appointment.service.title}</p>
        <p>{appointment.time.slot}</p>
        <p>requested by</p>
        <div className="flex items-center space-x-2">
          {/* <Image
            src={appointment.User?.image}
            width={50}
            height={50}
            alt={appointment.User?.name}
            className="rounded-full"
          /> */}

          <p>{appointment.User?.name}</p>
        </div>
        {/* <p>{appointment.services.map((service) => service.title)}</p>
      <p>{appointment.time.map((time) => time.slot)}</p> */}

        {/* <div className="flex">
          <div onClick={handleDelete}>
            <DeleteButton />
          </div>
        </div> */}
      </div>
    </div>
  );
}
