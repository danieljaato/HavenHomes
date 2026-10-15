import {
  MessageCircle,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative
          w-full
          min-h-[430px]
          sm:min-h-[480px]
          md:min-h-[540px]
          lg:min-h-[580px]
          bg-cover
          bg-center
          flex
          items-center
          px-5
          sm:px-8
          md:px-12
          lg:px-20
          py-16
          sm:py-20
          md:py-24
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(24, 23, 23, 0.64),
              rgba(22, 21, 21, 0.94)
            ),
            url('https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1600&q=80')
          `,
        }}
      >
        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-3xl
            mx-auto
            lg:mx-0
            text-center
            lg:text-left
          "
        >
          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              text-amber-200
              mb-3
            "
          >
            Tuf's Dogs Ville
          </p>

          <h1
            className="
              font-serif
              text-[#dfb76c]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-normal
              leading-tight
            "
          >
            Connect with Elegance
          </h1>

          <div
            className="
              h-px
              w-16
              sm:w-20
              bg-[#dfb76c]
              my-5
              mx-auto
              lg:mx-0
            "
          />

          <p
            className="
              max-w-2xl
              mx-auto
              lg:mx-0
              text-gray-300
              text-xs
              sm:text-sm
              md:text-base
              leading-6
              sm:leading-7
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt eum repellendus recusandae nemo saepe quidem.
          </p>
        </div>
      </section>


      {/* ================= MAIN CONTACT AREA ================= */}
      <main
        className="
          max-w-7xl
          mx-auto
          w-full
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
          py-12
          sm:py-16
          md:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            md:gap-12
            lg:gap-16
            items-stretch
          "
        >

          {/* ================= CONTACT FORM ================= */}
          <section className="lg:col-span-7">

            <div className="mb-8">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#b8891d]
                  font-semibold
                  mb-2
                "
              >
                Get In Touch
              </p>

              <h2
                className="
                  font-serif
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  text-gray-900
                "
              >
                Send Us a Message
              </h2>
            </div>

            <form
              className="space-y-5 sm:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Name + Email */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                  sm:gap-6
                "
              >

                {/* Full Name */}
                <div>
                  <label
                    className="
                      block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                      mb-2
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      bg-gray-50
                      border
                      border-gray-200
                      rounded-md
                      px-4
                      py-3
                      sm:py-3.5
                      text-sm
                      text-gray-800
                      placeholder:text-gray-400
                      transition
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#dfb76c]
                      focus:border-[#dfb76c]
                    "
                  />
                </div>


                {/* Email */}
                <div>
                  <label
                    className="
                      block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                      mb-2
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      bg-gray-50
                      border
                      border-gray-200
                      rounded-md
                      px-4
                      py-3
                      sm:py-3.5
                      text-sm
                      text-gray-800
                      placeholder:text-gray-400
                      transition
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#dfb76c]
                      focus:border-[#dfb76c]
                    "
                  />
                </div>

              </div>


              {/* Inquiry Type */}
              <div>
                <label
                  className="
                    block
                    text-[10px]
                    sm:text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-gray-500
                    mb-2
                  "
                >
                  Inquiry Type
                </label>

                <select
                  className="
                    w-full
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-md
                    px-4
                    py-3
                    sm:py-3.5
                    text-sm
                    text-gray-600
                    transition
                    focus:outline-none
                    focus:ring-1
                    focus:ring-[#dfb76c]
                    focus:border-[#dfb76c]
                  "
                >
                  <option value="">Private Consultation</option>
                  <option value="grooming">
                    Bespoke Grooming
                  </option>
                  <option value="residential">
                    Residential Services
                  </option>
                </select>
              </div>


              {/* Message */}
              <div>
                <label
                  className="
                    block
                    text-[10px]
                    sm:text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-gray-500
                    mb-2
                  "
                >
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="How may we assist you?"
                  className="
                    w-full
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-md
                    px-4
                    py-3
                    sm:py-3.5
                    text-sm
                    text-gray-800
                    placeholder:text-gray-400
                    resize-none
                    transition
                    focus:outline-none
                    focus:ring-1
                    focus:ring-[#dfb76c]
                    focus:border-[#dfb76c]
                  "
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  sm:w-auto
                  bg-[#dfb76c]
                  hover:bg-[#c9a35b]
                  active:bg-[#b89048]
                  text-black
                  font-semibold
                  text-[10px]
                  sm:text-xs
                  tracking-wider
                  uppercase
                  px-7
                  sm:px-8
                  py-3.5
                  rounded-md
                  transition
                  duration-200
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                Submit Inquiry
                <span className="text-base">→</span>
              </button>

            </form>
          </section>


          {/* ================= VISIT THE VILLE ================= */}
          <aside
            className="
              lg:col-span-5
              bg-[#1f2421]
              text-white
              p-6
              sm:p-8
              md:p-10
              rounded-lg
              shadow-xl
              flex
              flex-col
              justify-between
              gap-10
            "
          >

            {/* Contact Details */}
            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                  mb-2
                "
              >
                Contact
              </p>

              <h3
                className="
                  font-serif
                  text-2xl
                  sm:text-3xl
                  text-[#dfb76c]
                  mb-7
                "
              >
                Visit the Ville
              </h3>


              <div className="space-y-7 text-sm text-gray-300">

                {/* Location */}
                <div className="flex items-start gap-4">
                  <MapPin
                    className="
                      w-5
                      h-5
                      text-[#dfb76c]
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div>
                    <p className="font-semibold text-white mb-1">
                      Our Estate
                    </p>

                    <p>123 Luxury Lane</p>
                    <p>Beverly Hills, CA 90210</p>
                    <p>United States</p>
                  </div>
                </div>


                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone
                    className="
                      w-5
                      h-5
                      text-[#dfb76c]
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div>
                    <p className="font-semibold text-white mb-1">
                      Concierge Desk
                    </p>

                    <a
                      href="tel:+15558675309"
                      className="hover:text-[#dfb76c] transition-colors"
                    >
                      +1 (555) 867-5309
                    </a>
                  </div>
                </div>


                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail
                    className="
                      w-5
                      h-5
                      text-[#dfb76c]
                      shrink-0
                      mt-0.5
                    "
                  />

                  <div className="min-w-0">
                    <p className="font-semibold text-white mb-1">
                      Direct Correspondence
                    </p>

                    <a
                      href="mailto:concierge@tufsdogsville.com"
                      className="
                        text-gray-400
                        hover:text-[#dfb76c]
                        transition-colors
                        break-all
                      "
                    >
                      concierge@tufsdogsville.com
                    </a>
                  </div>
                </div>

              </div>
            </div>


            {/* Operating Hours */}
            <div
              className="
                border-t
                border-gray-700
                pt-6
                text-xs
                text-gray-400
              "
            >
              <p
                className="
                  font-semibold
                  text-white
                  uppercase
                  tracking-wider
                  mb-4
                "
              >
                Operating Hours
              </p>

              <div className="space-y-3">

                <div
                  className="
                    flex
                    flex-col
                    xs:flex-row
                    sm:flex-row
                    justify-between
                    gap-1
                  "
                >
                  <span>Monday - Friday</span>
                  <span className="text-gray-300">
                    9:00 AM - 7:00 PM
                  </span>
                </div>

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    gap-1
                  "
                >
                  <span>Saturday</span>
                  <span className="text-gray-300">
                    10:00 AM - 5:00 PM
                  </span>
                </div>

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    gap-1
                  "
                >
                  <span>Sunday</span>
                  <span className="text-gray-300">
                    By Appointment Only
                  </span>
                </div>

              </div>
            </div>

          </aside>

        </div>
      </main>


      {/* ================= FOOTER ================= */}
      <footer
        className="
          w-full
          bg-neutral-950
          py-8
          sm:py-10
          px-5
          sm:px-8
          md:px-12
          text-purple-200
          text-xs
          border-t
          border-purple-900/30
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            md:items-start
            gap-8
          "
        >

          {/* Brand */}
          <div
            className="
              space-y-2
              text-center
              md:text-left
            "
          >
            <h3
              className="
                text-lg
                font-bold
                text-amber-400
                tracking-wide
                font-serif
              "
            >
              Tufs Dog Ville
            </h3>

            <p className="text-purple-400/60 text-[10px] sm:text-[11px]">
              © 2025 Tufs Dog Ville. All rights reserved.
            </p>

            <p className="text-purple-300/80 italic text-[10px] sm:text-[11px]">
              The Connoisseur's Choice for Pet Luxury.
            </p>
          </div>


          {/* Footer Links */}
          <div
            className="
              w-full
              md:w-auto
              grid
              grid-cols-2
              sm:flex
              sm:flex-row
              gap-8
              sm:gap-12
              text-center
              sm:text-left
            "
          >

            {/* Legal */}
            <div className="space-y-2">
              <span
                className="
                  font-bold
                  text-white
                  uppercase
                  tracking-wider
                  text-[10px]
                  sm:text-[11px]
                  block
                "
              >
                Legal
              </span>

              <a
                href="#terms"
                className="
                  text-purple-300/70
                  hover:text-white
                  transition-colors
                "
              >
                Terms of Service
              </a>
            </div>


            {/* Connect */}
            <div className="space-y-2">
              <span
                className="
                  font-bold
                  text-white
                  uppercase
                  tracking-wider
                  text-[10px]
                  sm:text-[11px]
                  block
                "
              >
                Connect
              </span>

              <div className="flex flex-col gap-2">

                <a
                  href="#newsletter"
                  className="
                    text-purple-300/70
                    hover:text-white
                    transition-colors
                  "
                >
                  Newsletter Signup
                </a>

                <a
                  href="#follow"
                  className="
                    text-purple-300/70
                    hover:text-white
                    transition-colors
                  "
                >
                  Follow Us
                </a>

              </div>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}
