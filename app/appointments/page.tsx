import BookAppointmentForm from "@/components/BookAppointmentForm";

// const res2 = await fetch("/api/timeslots/get");
// const timeslots = await res2.json();

export default async function page() {
  const servicesData = await fetch(`http://localhost:3000/api/services/get`);
  const services = await servicesData.json();
  const timeslotsData = await fetch(`http://localhost:3000/api/timeslots/get`);
  const timeslots = await timeslotsData.json();
  return (
    <div>
      <div className="py-24 bg-gray-700">
        <h1 className="title text-white text-6xl font-bold text-center tracking-wide">
          Book an Appointment
        </h1>
      </div>

      <div className="max-w-xl bg-white mx-auto rounded-xl shadow-xl">
        <BookAppointmentForm services={services} timeslots={timeslots} />
      </div>
    </div>
  );
}
