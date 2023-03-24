import AppointmentForm from "@/components/AppointmentForm";
import PageHero from "@/components/PageHero";
import Paper from "@/components/Paper";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function page() {
  // get the session from the server
  const session = await getServerSession(authOptions);
  // gather all the data we need to render the page
  const servicesData = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/services/get`
  );
  const services = await servicesData.json();
  const timeslotsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/timeslots/get`
  );
  const timeslots = await timeslotsData.json();

  return (
    <section>
      <PageHero title="Book an Appointment" />
      <Paper>
        <AppointmentForm services={services} timeslots={timeslots} />
      </Paper>
    </section>
  );
}
