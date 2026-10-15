import {
  MessageSquare,
  Phone,
  Mail,
  Globe,
} from "lucide-react";



function About() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO / ABOUT HEADER ================= */}
      <section
        className="
          relative
          w-full
          min-h-[500px]
          sm:min-h-[560px]
          md:min-h-[620px]
          lg:min-h-[680px]
          overflow-hidden
          bg-black
          flex
          items-center
          justify-center
        "
      >
        {/* Background Image */}
        <img
          src={aboutbg}
          alt="About Tuf's Dogs Ville"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/60
            via-black/30
            to-black/70
          "
        />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-4xl
            mx-auto
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-5
            sm:px-8
            py-20
            sm:py-24
            md:py-28
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-3
              sm:mb-4
              text-[10px]
              sm:text-xs
              md:text-sm
              tracking-[0.3em]
              uppercase
              text-amber-200
              font-medium
            "
          >
            Tuf's Dogs Ville
          </p>

          {/* Heading */}
          <h1
            className="
              font-serif
              text-[#e6bd55]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              leading-tight
              tracking-tight
            "
          >
            The Legacy of Luxury
          </h1>

          {/* Decorative Line */}
          <div
            className="
              w-20
              sm:w-24
              h-px
              bg-amber-300
              my-5
              sm:my-6
            "
          />

          {/* Description */}
          <p
            className="
              max-w-xl
              md:max-w-2xl
              text-white/90
              text-xs
              sm:text-sm
              md:text-base
              font-light
              leading-6
              sm:leading-7
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quo eligendi amet labore hic suscipit blanditiis,
            eveniet atque iure fugit natus aut sunt et sequi.
            Corrupti omnis pariatur molestiae soluta.
          </p>
        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section
        className="
          bg-white
          px-5
          sm:px-8
          md:px-12
          lg:px-20
          py-14
          sm:py-16
          md:py-20
          lg:py-24
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            sm:gap-12
            md:gap-14
            lg:gap-20
            items-center
          "
        >

          {/* TEXT */}
          <div
            className="
              text-center
              md:text-left
              order-2
              md:order-1
            "
          >
            {/* Small heading */}
            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-amber-600
                font-medium
                mb-3
              "
            >
              Discover Our Journey
            </p>

            {/* Main heading */}
            <h2
              className="
                font-serif
                text-[#b8891d]
                text-3xl
                sm:text-4xl
                md:text-4xl
                lg:text-5xl
                font-semibold
                leading-tight
                mb-5
              "
            >
              Our Story
            </h2>

            {/* Decorative line */}
            <div
              className="
                h-px
                w-16
                bg-[#e6bd55]
                mb-6
                mx-auto
                md:mx-0
              "
            />

            {/* Story */}
            <p
              className="
                font-sans
                text-gray-600
                text-sm
                sm:text-base
                md:text-base
                lg:text-lg
                leading-7
                sm:leading-8
                font-light
                max-w-xl
                mx-auto
                md:mx-0
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis rerum ab asperiores totam tenetur ipsum
              distinctio atque maxime corporis, inventore natus hic quis
              quisquam eligendi voluptas, vero minima nihil et.
            </p>

            <p
              className="
                mt-4
                font-sans
                text-gray-600
                text-sm
                sm:text-base
                md:text-base
                lg:text-lg
                leading-7
                sm:leading-8
                font-light
                max-w-xl
                mx-auto
                md:mx-0
              "
            >
              At Tuf's Dogs Ville, we believe every pet deserves quality,
              care, comfort, and a loving environment. Our goal is to make
              finding and caring for your perfect companion a premium
              experience.
            </p>
          </div>


          {/* IMAGE */}
          <div
            className="
              flex
              justify-center
              md:justify-end
              order-1
              md:order-2
            "
          >
            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* Decorative background */}
              <div
                className="
                  absolute
                  -bottom-3
                  -right-3
                  sm:-bottom-4
                  sm:-right-4
                  w-full
                  h-full
                  border-2
                  border-[#e6bd55]
                  rounded-xl
                "
              />

              <img
                src={our}
                alt="Dog at Tuf's Dogs Ville"
                className="
                  relative
                  z-10
                  w-full
                  h-[300px]
                  sm:h-[380px]
                  md:h-[440px]
                  lg:h-[500px]
                  object-cover
                  rounded-xl
                  shadow-xl
                "
              />
            </div>
          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="w-full bg-[#110c1d] text-white">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            py-8
            sm:py-10
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              lg:items-start
              justify-between
              gap-8
              lg:gap-12
            "
          >

            {/* BRAND */}
            <div
              className="
                text-center
                lg:text-left
                shrink-0
              "
            >
              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  tracking-wide
                  text-amber-400
                "
              >
                Tuf's Dogs Ville
              </h2>

              <p
                className="
                  mt-1
                  text-[10px]
                  sm:text-xs
                  text-gray-400
                "
              >
                © 2024 Tuf's Dogs Ville. All Rights Reserved.
              </p>
            </div>


            {/* CONTACT INFORMATION */}
            <div
              className="
                w-full
                lg:w-auto
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-x-6
                sm:gap-x-8
                gap-y-6
              "
            >

              {/* WHATSAPP */}
              <div className="flex items-center gap-2">
                <MessageSquare
                  className="
                    w-4
                    h-4
                    sm:w-5
                    sm:h-5
                    text-amber-400
                    shrink-0
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-[9px]
                      sm:text-[10px]
                      text-gray-400
                      uppercase
                      tracking-wider
                    "
                  >
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/2348138934248"
                    className="
                      text-[10px]
                      sm:text-xs
                      text-gray-200
                      hover:text-amber-400
                      hover:underline
                      transition-colors
                    "
                  >
                    08138934248
                  </a>
                </div>
              </div>


              {/* CALL */}
              <div className="flex items-center gap-2">
                <Phone
                  className="
                    w-4
                    h-4
                    sm:w-5
                    sm:h-5
                    text-amber-400
                    shrink-0
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-[9px]
                      sm:text-[10px]
                      text-gray-400
                      uppercase
                      tracking-wider
                    "
                  >
                    Call
                  </p>

                  <a
                    href="tel:08078238687"
                    className="
                      text-[10px]
                      sm:text-xs
                      text-gray-200
                      hover:text-amber-400
                      hover:underline
                      transition-colors
                    "
                  >
                    08078238687
                  </a>
                </div>
              </div>


              {/* EMAIL */}
              <div className="flex items-center gap-2">
                <Mail
                  className="
                    w-4
                    h-4
                    sm:w-5
                    sm:h-5
                    text-amber-400
                    shrink-0
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-[9px]
                      sm:text-[10px]
                      text-gray-400
                      uppercase
                      tracking-wider
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:info@tufsdogsville.com"
                    className="
                      text-[10px]
                      sm:text-xs
                      text-gray-200
                      hover:text-amber-400
                      hover:underline
                      transition-colors
                      break-all
                    "
                  >
                    info@tufsdogsville.com
                  </a>
                </div>
              </div>


              {/* WEBSITE */}
              <div className="flex items-center gap-2">
                <Globe
                  className="
                    w-4
                    h-4
                    sm:w-5
                    sm:h-5
                    text-amber-400
                    shrink-0
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-[9px]
                      sm:text-[10px]
                      text-gray-400
                      uppercase
                      tracking-wider
                    "
                  >
                    Website
                  </p>

                  <a
                    href="https://www.tufs.dogsville.com"
                    className="
                      text-[10px]
                      sm:text-xs
                      text-gray-200
                      hover:text-amber-400
                      hover:underline
                      transition-colors
                      break-all
                    "
                  >
                    www.tufs.dogsville.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default About;
