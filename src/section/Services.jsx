

import {
  Scissors,
  Utensils,
  Award,
  ArrowRight,
} from "lucide-react";

function Services() {
  
  return (
    <div className="w-full overflow-hidden bg-[#0D0D0D]">

      {/* ================= SERVICES ================= */}
      <main className="bg-[#0D0D0D] text-gray-200 min-h-screen font-sans">

        {/* ================= HEADER ================= */}
        <section
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20
            pt-14
            sm:pt-16
            md:pt-20
            pb-10
            sm:pb-12
            text-center
          "
        >
          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]
              mb-3
            "
          >
            Tuf's Dogs Ville
          </p>

          <h1
            className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              text-[#D4AF37]
              tracking-wide
              leading-tight
            "
          >
            Bespoke Services
          </h1>

          <div
            className="
              w-16
              sm:w-20
              h-px
              bg-[#D4AF37]
              mx-auto
              my-5
              sm:my-6
            "
          />

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              text-xs
              sm:text-sm
              md:text-base
              leading-6
              sm:leading-7
            "
          >
            Elevating pet care to an art form. Discover our exclusive suite
            of tailored experiences designed for the most discerning
            companions.
          </p>
        </section>


        {/* ================= SERVICE GRID ================= */}
        <section
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20
            pb-14
            sm:pb-20
            md:pb-24
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-12
              gap-4
              sm:gap-5
              md:gap-6
            "
          >

            {/* ================= SERVICE CARDS ================= */}
            {service.map((item) => (
              <article
                key={item.id}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-lg
                  min-h-[350px]
                  sm:min-h-[400px]
                  md:min-h-[430px]
                  lg:min-h-[450px]
                  flex
                  flex-col
                  justify-end
                  p-5
                  sm:p-7
                  md:p-8
                  lg:p-10
                  border
                  border-white/5
                  hover:border-[#D4AF37]/40
                  transition-all
                  duration-500
                  ${item.colSpan}
                `}
              >

                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>


                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/70
                    to-black/10
                  "
                />


                {/* Hover Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#D4AF37]/5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />


                {/* Card Content */}
                <div
                  className="
                    relative
                    z-10
                    space-y-3
                    text-left
                    max-w-xl
                  "
                >

                  {/* Category */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      tracking-[0.15em]
                      text-[#D4AF37]
                      uppercase
                    "
                  >
                    {item.icon}

                    <span>{item.category}</span>
                  </div>


                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-3xl
                      lg:text-4xl
                      font-serif
                      text-white
                      tracking-wide
                      leading-tight
                    "
                  >
                    {item.title}
                  </h3>


                  {/* Description */}
                  <p
                    className="
                      text-gray-300
                      text-xs
                      sm:text-sm
                      md:text-sm
                      leading-6
                      max-w-md
                    "
                  >
                    {item.description}
                  </p>


                  {/* Inquiry */}
                  <button
                    className="
                      pt-2
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      tracking-[0.15em]
                      text-[#D4AF37]
                      uppercase
                      flex
                      items-center
                      gap-2
                      hover:gap-3
                      transition-all
                      duration-200
                    "
                  >
                    <span>Inquire</span>

                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              </article>
            ))}


            {/* ================= COMPLETE EXPERIENCE ================= */}
            <article
              className="
                md:col-span-7
                bg-[#141414]
                border
                border-white/5
                rounded-lg
                p-6
                sm:p-8
                md:p-10
                lg:p-12
                min-h-[300px]
                sm:min-h-[330px]
                flex
                flex-col
                justify-center
                items-start
                space-y-4
                text-left
                hover:border-[#D4AF37]/30
                transition-colors
                duration-300
              "
            >

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                "
              >
                Premium Concierge
              </p>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-serif
                  text-[#D4AF37]
                  leading-tight
                "
              >
                The Complete Experience
              </h3>

              <p
                className="
                  text-gray-400
                  text-xs
                  sm:text-sm
                  leading-6
                  max-w-lg
                "
              >
                Not sure where to begin? Schedule a private consultation
                with our concierge team to design a comprehensive lifestyle
                plan for your companion.
              </p>

              <button
                className="
                  w-full
                  sm:w-auto
                  bg-[#D4AF37]
                  hover:bg-[#b8952b]
                  active:bg-[#9f7e22]
                  text-black
                  font-semibold
                  text-[10px]
                  sm:text-xs
                  tracking-wider
                  uppercase
                  px-5
                  sm:px-6
                  py-3
                  sm:py-3.5
                  rounded-sm
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                Schedule Consultation

                <ArrowRight className="w-4 h-4" />
              </button>

            </article>

          </div>
        </section>
      </main>


      {/* ================= FOOTER ================= */}
      <footer
        className="
          w-full
          bg-black
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

          {/* ================= BRAND ================= */}
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
                sm:text-xl
                font-bold
                text-amber-400
                tracking-wide
                font-serif
              "
            >
              Tufs Dog Ville
            </h3>

            <p
              className="
                text-purple-400/60
                text-[10px]
                sm:text-[11px]
              "
            >
              © 2025 Tufs Dog Ville. All rights reserved.
            </p>

            <p
              className="
                text-purple-300/80
                italic
                text-[10px]
                sm:text-[11px]
              "
            >
              The Connoisseur's Choice for Pet Luxury.
            </p>
          </div>


          {/* ================= FOOTER LINKS ================= */}
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

export default Services;