// ** Import Next
import Image from "next/image";

const OfficeContact = () => {
  return (
    <div className="px-5 mt-14 space-y-8 lg:space-y-0 lg:mt-0 md:px-24 lg:grid grid-cols-3 gap-10">
      <div className="border rounded-xl p-14 space-y-10">
        <Image
          src={"/contact/office/contact-icon-sm-5.png"}
          alt="contact"
          width={150}
          height={150}
          className="mx-auto"
        />

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-700">Columbia</h1>

          <p className="text-lg text-gray-500 font-medium">
            Bogota D.C., Colombia, b. a 181 C No. 930 Ap 202
          </p>
        </div>
      </div>

      <div className="border rounded-xl p-14 space-y-10">
        <Image
          src={"/contact/office/contact-icon-sm-6.png"}
          alt="contact"
          width={150}
          height={150}
          className="mx-auto"
        />

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-700">Columbia</h1>

          <p className="text-lg text-gray-500 font-medium">
            Bogota D.C., Colombia, b. a 181 C No. 930 Ap 202
          </p>
        </div>
      </div>

      <div className="border rounded-xl p-14 space-y-10">
        <Image
          src={"/contact/office/contact-icon-sm-7.png"}
          alt="contact"
          width={150}
          height={150}
          className="mx-auto"
        />

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-700">Columbia</h1>

          <p className="text-lg text-gray-500 font-medium">
            Bogota D.C., Colombia, b. a 181 C No. 930 Ap 202
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeContact;
