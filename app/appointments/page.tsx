import AppointmentForm from "@/components/AppointmentForm";

export default function page() {
  return (
    <div>
      <div className="py-24 bg-gray-700">
        <h1 className="title text-white text-6xl font-bold text-center tracking-wide">
          Book an Appointment
        </h1>
      </div>

      <div className="max-w-xl bg-gray-100 mx-auto rounded-xl shadow-xl">
        <AppointmentForm />
      </div>
    </div>
  );
}
