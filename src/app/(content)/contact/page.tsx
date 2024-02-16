// ** Import Components
import BookContact from "@/components/contact/BookContact";
import ContactUs from "@/components/contact/ContactUs";
import HeroContact from "@/components/contact/HeroContact";
import OfficeContact from "@/components/contact/OfficeContact";

export default function Contact() {
  return (
    <main>
      <HeroContact />

      <OfficeContact />

      <ContactUs />

      <BookContact />
    </main>
  );
}
