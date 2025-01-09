import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("OnSubmit Clicked!!!!");
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto  flex-col px-16 justify-between flex">
        <div className="flex justify-between">
          <h1 className="text-4xl text-center mb-4">
            Ready to Build or Invest?
          </h1>
          <button
            onClick={() => alert("View All For Our Project has Cliked!!!")}
            className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-10  rounded-full shadow-md hover:bg-white"
          >
            Contact Us
          </button>
        </div>
        <div className="flex items-start py-6">
          <p className="text-center mb-8 text-gray-600">
            Start building your dream home or secure your financial future
            today. Contact us to bring your vision to life!
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-2 sm:mb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                {...register("firstName", { required: false })}
                className="input input-bordered w-full"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label className="block mb-2">Last Name</label>
              <input
                {...register("lastName", { required: false })}
                className="input input-bordered w-full"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                {...register("email", {
                  required: false,
                  pattern: /^\S+@\S+$/i,
                })}
                className="input input-bordered w-full"
                placeholder="Enter Email Address"
              />
            </div>

            <div>
              <label className="block mb-2">Phone</label>
              <input
                {...register("phone", {
                  required: false,
                  pattern: /^[0-9-+()]*$/,
                })}
                className="input input-bordered w-full"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Subject</label>
            <input
              {...register("subject", { required: false })}
              className="input input-bordered w-full"
              placeholder="Enter Subject"
            />
          </div>

          <div>
            <label className="block mb-2">Description</label>
            <textarea
              {...register("description", { required: false })}
              className="textarea textarea-bordered w-full h-32"
              placeholder="Type Here"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("smsConsent")}
              className="checkbox mt-1"
            />
            <label className="text-sm text-gray-600">
              By checking this box, I agree to receive SMS updates, promotions,
              and offers from Nextgenproperties at the phone number provided.
              Msg & data rates may apply. Msg frequency varies. Reply STOP to
              unsubscribe.
              <a
                href="https://www.nextgenproperties.us/terms-and-conditions"
                className="text-blue-600"
              >
                SMS Terms & Conditions
              </a>
            </label>
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              className=" border text-center transition bg-blue-600  py-2 text-white border-blue-600 hover:text-blue-600 duration-300 px-12  rounded-full shadow-md hover:bg-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
