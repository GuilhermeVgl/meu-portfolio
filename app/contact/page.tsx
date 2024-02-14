import MainLayout from "@/components/layouts/MainLayout";
import siteMetadata from "@/content/siteMetadata";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {

return (
    <main className="grainy-header min-h-screen mt-11 mx-auto items-center align-center w-full">
      <MainLayout>
        <div className="flex w-full py-4 px-4 max-lg:flex-col">
            <div className="w-full">
              <form id="submit-form" className="custom-form" action="https://formspree.io/f/mbjvelbj" method="POST">
                    <p className=""> My name is
                      <input id="name" className="w-full block text-white bg-black rounded-lg" name="name" required/>
                    </p> <br></br>
                    <p> My email is
                      <input id="email" className="w-full block text-white bg-black rounded-lg" name="email" required/>
                    </p> <br></br>
                    <p> My number is
                      <input id="company-name" className="w-full block text-white bg-black rounded-lg"  name="number" required/>
                    </p> <br></br>
                    <p> I'd Like to talk about
                      <textarea id="message" className="w-full block text-white bg-black rounded-lg" name="message" required></textarea>
                    </p> <br></br>
                      <button className="send-button" type="submit">Send</button>
              </form>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Let's <b className="dark:text-primary-600 underline talk">Talk!</b>
              </h1>
                <ul className="grid flex-col items-center justify-center text-center py-4">
                  <li className="py-2">
                    <b rel="noreferrer" className="flex items-center">
                      <FaMapMarkerAlt className="sm:text-4xl icons" />
                      <b className="font-normal"> Campo Grande MS - Brazil </b>
                    </b>
                  </li>
                  <li className="py-2">
                    <b rel="noreferrer" className="flex items-center">
                      <FaWhatsapp className="sm:text-4xl icons" />
                      <b className="font-normal">Text me clicking: <a href={siteMetadata.whatsapp} className="font-semibold cursor-pointer underlineHyper dark:text-primary-600">HERE</a></b>
                    </b>
                  </li>
                </ul> 
              <img
                alt="World map"
                height={500}
                width={750}
                src={'/static/images/world.svg' || ''}
                className="rounded-t-lg object-scale-down"
              />
            </div>
        </div>
      </MainLayout>
    </main>
  );
}