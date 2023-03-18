"use client";

import useCreateAppointment from "@/hooks/useCreateAppointment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface Time {
  id: string;
  slot: string;
}

interface Service {
  id: string;
  title: string;
  desc: string;
}

export default function AppointmentForm({ services, timeslots }: any) {
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  // const [user, setUser] = useState("");
  const appointmentMutation = useCreateAppointment();

  // useEffect(() => {
  //   setUser(session?.user?.email || "");
  // });

  const handleMutation = (data: FieldValues) => {
    appointmentMutation.mutate(data);
    toast.success("Appointment Set!");
  };

  return (
    <form
      className="flex flex-col p-8"
      onSubmit={handleSubmit((data) => handleMutation(data))}
      // onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label htmlFor="date">Date</label>
      {/* <input {...register("userId")} value={user} /> */}
      <input {...register("date")} type="date" />
      <label htmlFor="service">
        <span>Time</span>
      </label>
      <select {...register("timeSlotId")}>
        {timeslots.map((time: Time) => (
          <option key={time.id} value={time.id}>
            {time.slot}
          </option>
        ))}
      </select>
      <label htmlFor="service">
        <span>Service</span>
      </label>
      <select {...register("serviceId")}>
        {services.map((service: Service) => (
          <option key={service.id} value={service.id}>
            {service.title}
          </option>
        ))}
      </select>
      {/* <fieldset className="border border-gray-300 p-4">
              <legend className="text-sm font-black uppercase">
                The Details
              </legend>
              <label htmlFor="date">Notes</label>
              <input type="textarea" onChange={(e) => setDate(e.target.value)} />
            </fieldset> */}
      <button
        className={appointmentMutation.isLoading ? "btn bg-red-500" : "btn"}
        type="submit"
        disabled={appointmentMutation.isLoading}
      >
        Submit
      </button>
    </form>
  );
}
