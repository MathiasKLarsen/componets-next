"use client"

import { useYupForm } from "../../schema/Schema"

const Contact = () => {
  const { register, handleSubmit, reset, errors } = useYupForm()

  return (
    <section className="h-[750px] flex justify-center items-center">
      {/* Form */}
      <form
        onSubmit={handleSubmit(() => reset())}
        className="w-[800px] space-y-4 lg:px-0 px-4"
      >
        <h1 className="uppercase lg:text-3xl md:text-2xl text-xl text-center">Contact Form</h1>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full border-2 rounded-lg lg:text-xl text-lg border-gray-400 focus:outline-none p-2 placeholder-white"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="w-full border-2 rounded-lg lg:text-xl text-lg border-gray-400 focus:outline-none p-2 placeholder-white"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone")}
            className="w-full border-2 rounded-lg lg:text-xl text-lg border-gray-400 focus:outline-none p-2 placeholder-white"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows={5}
            placeholder="Message"
            {...register("message")}
            className="block w-full border-2 rounded-lg lg:text-2xl text-xl border-gray-400 focus:outline-none p-2 placeholder-white resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-neutral-600 hover:bg-neutral-500 border-2 border-white rounded-lg w-fit lg:py-3 lg:px-8 py-2 px-5"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
