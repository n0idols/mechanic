"use client";

import useCreateAppointment from "@/hooks/useCreateAppointment";
import useServices from "@/hooks/useServices";
import useTimeslots from "@/hooks/useTimeslots";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "@/hooks/useForm";

interface Time {
  id: string;
  slot: string;
}

interface Service {
  id: string;
  title: string;
  desc: string;
}

interface formValues {
  date: string;
  timeSlotId: string;
  serviceId: string;
  user: string;
}

export default function AppointmentForm() {
  const appointmentMutation = useCreateAppointment();
  const servicesQuery = useServices();
  const timeslotsQuery = useTimeslots();

  const { data: session } = useSession();

  const initialState = {
    date: "",
    timeSlotId: "0",
    serviceId: "0",
    user: "",
  };

  const { onChange, onSubmit, values } = useForm(fireMutation, initialState);

  const theValues: formValues = values;
  async function fireMutation() {
    appointmentMutation.mutate(theValues);
  }

  // useEffect(() => {
  //   session?.user?.email;

  //   setValues({ ...values, user: session?.user?.email });
  // });

  return (
    <form className="flex flex-col p-8" onSubmit={onSubmit}>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <label htmlFor="date">Date</label>
      <input name="date" type="date" onChange={onChange} />

      <label htmlFor="service">
        <span>Time</span>
      </label>
      {timeslotsQuery.isLoading ? (
        <></>
      ) : (
        <>
          <select name="timeSlotId" onChange={onChange}>
            {timeslotsQuery.data?.data.map((time: Time) => (
              <option key={time.id} value={time.id}>
                {time.slot}
              </option>
            ))}
          </select>
        </>
      )}
      <label htmlFor="service">
        <span>Service</span>
      </label>
      {servicesQuery.isLoading ? (
        <></>
      ) : (
        <>
          <select name="serviceId" onChange={onChange}>
            {servicesQuery.data?.data.map((service: Service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </>
      )}

      {/* <fieldset className="border border-gray-300 p-4">
              <legend className="text-sm font-black uppercase">
                The Details
              </legend>
              <label htmlFor="date">Notes</label>
              <input type="textarea" onChange={(e) => setDate(e.target.value)} />
            </fieldset> */}

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
