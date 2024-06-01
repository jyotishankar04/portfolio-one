import emailjs from "emailjs-com";
import { FormEvent, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contect() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_sdcb70r",
          "template_k75mnts",
          form.current,
          "0eO1gus4ZmTpg3fD0"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Message successfully sent", {
              position: "top-center",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Error in sending message", {
              position: "top-center",
            });
          }
        );
    }
  };
  return (
    <div
      className="flex flex-col items-center bg-white w-full bg-[url('https://i.ibb.co/TW9hqY7/benner-1.webp')] bg-center bg-cover"
      id="contact"
    >
      <ToastContainer />
      <div className="py-3 flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl text-gray-600 mt-20 uppercase font-bold ">
          Contact
        </h1>
        <div className="bg-purple-600 md:p-1 p-[2px] rounded-md md:mt-5 mt-2 w-20"></div>
      </div>

      <div className="flex gap-10 items-start mt-20 justify-center w-full h-full">
        <div className="w-4/12 h-full hidden justify-center items-center  p-20 xl:flex ">
          <img
            className="w-10/12 aspect-square object-cover rounded-lg hover:ring-8 hover:shadow-xl duration-200 hover:scale-105 "
            src="https://i.ibb.co/jw6Lqc3/aboutImg.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-4/12 md:w-8/12 w-full  bg-white p-10 m-0 md:ml-10 md:mr-10 md:mb-10">
          <form
            ref={form}
            action=""
            onSubmit={sendEmail}
            className="flex flex-col text-gray-600 font-semibold mb-2 "
          >
            <label htmlFor="" className="text-2xl mb-2">
              Name
            </label>
            <input
              name="user_name"
              className="w-full ring-1 rounded-md py-2 mb-10 px-4 focus:ring-4 outline-none foucs:ring-purple-600"
              placeholder="Enter Your name "
              type="text"
            />
            <label htmlFor="" className="text-2xl mb-2">
              Email
            </label>
            <input
              name="user_email"
              type="email"
              className="w-full ring-1 rounded-md mb-10 py-2 px-4 focus:ring-4 outline-none foucs:ring-purple-600"
              placeholder="Enter your email"
            />
            <label htmlFor="" className="text-2xl mb-2">
              Message
            </label>
            <textarea
              name="message"
              id=""
              className="max-w-full min-w-full max-h-32 min-h-32  ring-1 rounded-md mb-10 py-2 px-4 focus:ring-4 outline-none foucs:ring-purple-600"
              placeholder="Enter your message"
            />

            <input
              type="submit"
              value="Send"
              className="w-full bg-purple-600 py-2 text-white text-xl rounded-lg cursor-pointer hover:bg-purple-900"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contect;
