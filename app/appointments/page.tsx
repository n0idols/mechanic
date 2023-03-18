import AppointmentForm from "@/components/AppointmentForm";
import { useSession } from "next-auth/react";

// const res2 = await fetch("/api/timeslots/get");
// const timeslots = await res2.json();

export default async function page() {
  const servicesData = await fetch(
    `https://mechanic-sable.vercel.app/api/services/get`
  );
  const services = await servicesData.json();
  const timeslotsData = await fetch(
    `https://mechanic-sable.vercel.app/api/timeslots/get`
  );
  const timeslots = await timeslotsData.json();

  useSession;
  return (
    <div>
      <div className="py-24 bg-gray-700">
        <h1 className="title text-white text-6xl font-bold text-center tracking-wide">
          Book an Appointment
        </h1>
      </div>

      <div className="max-w-xl bg-white mx-auto rounded-xl shadow-xl">
        <AppointmentForm services={services} timeslots={timeslots} />
      </div>
    </div>
  );
}
