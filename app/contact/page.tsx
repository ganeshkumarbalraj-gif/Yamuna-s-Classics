import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/contact/ContactSection";
import BusinessHours from "@/components/contact/BusinessHours";
import MapSection from "@/components/contact/MapSection";


export default function ContactPage() {

  return (

    <>

      <PageHeader

        name="Contact Us"

        subtitle="We'd love to hear from you."

      />



      <main className="bg-gradient-to-b from-white via-pink-50/30 to-white">


        <ContactSection />



        <section

          className="
          mx-auto
          max-w-7xl
          space-y-10
          px-6
          pb-24
          "

        >

          <BusinessHours />

          <MapSection />

        </section>


      </main>


    </>

  );

}