import React, { useState } from "react";
import {
  MapPin,
  Wallet,
  Search,
  ShieldCheck,
  Heart,
  ChevronDown,
  Building2,
  House,
  MessageSquare,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import bbb from "../assets/image/bbb.webp";

const features = [
  { icon: House, label: "Modern", sublabel: "Homes" },
  { icon: MapPin, label: "Prime", sublabel: "Locations" },
  { icon: ShieldCheck, label: "Trusted", sublabel: "Agencies" },
  { icon: Heart, label: "Better", sublabel: "Living" },
];

export default function App() {
  const [location, setLocation] = useState("Any area");
  const [propertyType, setPropertyType] = useState("Any property");
  const [budget, setBudget] = useState("Any budget");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      location,
      propertyType,
      budget,
    });
    window.location.href = `/listings?${params.toString()}`;
  };

  return (
    <div className="w-full overflow-hidden bg-[#FAF9F6]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[720px] sm:min-h-[680px] lg:min-h-[720px] flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        {/* Main Two-Column Hero Layout */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_370px] w-full col-span-2">
            {/* Main heading and search */}
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#43856c] sm:text-[11px]">
                Boutique real estate, curated with care
              </p>

              <h1 className="max-w-[760px] text-[43px] font-extrabold leading-[0.99] tracking-[-0.055em] sm:text-6xl lg:text-[64px] xl:text-[72px] text-[#073B32]">
                Find the home
                <br />
                that feels like you
              </h1>

              <p className="mt-3 max-w-[530px] text-[13px] leading-[1.55] text-[#39423e] sm:text-sm">
                HavenHomes helps boutique agencies present exceptional homes
                with editorial polish, clear search paths, and a seamless
                experience. Whether you’re looking to rent or buy, we’ve got the
                perfect property for you.
              </p>

              {/* Search bar */}
              <form
                onSubmit={handleSearch}
                className="mt-5 grid grid-cols-1 gap-2 rounded-2xl border border-[#e4e5dc] bg-white p-2 shadow-sm sm:grid-cols-2 lg:flex lg:items-center lg:gap-0 lg:rounded-full lg:p-1"
              >
                <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 lg:rounded-full">
                  <MapPin className="shrink-0 text-[#40856b]" size={20} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] text-[#73776f]">Location</span>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-0.5 w-full cursor-pointer bg-transparent text-[11px] font-semibold outline-none"
                    >
                      <option>Any area</option>
                      <option>Lekki</option>
                      <option>Victoria Island</option>
                      <option>Ikoyi</option>
                      <option>Ikeja</option>
                      <option>Abuja</option>
                    </select>
                  </span>
                  <ChevronDown size={13} className="shrink-0 text-[#6e7b72]" />
                </label>

                <div className="hidden h-8 w-px bg-[#e6e7df] lg:block" />

                <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 lg:rounded-full">
                  <House className="shrink-0 text-[#40856b]" size={20} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] text-[#73776f]">Property Type</span>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="mt-0.5 w-full cursor-pointer bg-transparent text-[11px] font-semibold outline-none"
                    >
                      <option>Any property</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Duplex</option>
                      <option>Land</option>
                    </select>
                  </span>
                  <ChevronDown size={13} className="shrink-0 text-[#6e7b72]" />
                </label>

                <div className="hidden h-8 w-px bg-[#e6e7df] lg:block" />

                <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 lg:rounded-full">
                  <Wallet className="shrink-0 text-[#40856b]" size={20} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] text-[#73776f]">Budget</span>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-0.5 w-full cursor-pointer bg-transparent text-[11px] font-semibold outline-none"
                    >
                      <option>Any budget</option>
                      <option>Under ₦50M</option>
                      <option>₦50M – ₦150M</option>
                      <option>₦150M – ₦500M</option>
                      <option>Above ₦500M</option>
                    </select>
                  </span>
                  <ChevronDown size={13} className="shrink-0 text-[#6e7b72]" />
                </label>

                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#10483a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b382d] lg:rounded-full lg:px-7"
                >
                  <Search size={17} />
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Property showcase */}
        <div className="max-w-7xl w-full mt-10">
          <section
            id="listings"
            className="group relative overflow-hidden rounded-[20px] bg-[#dce5dc]"
          >
            <img
              src={bbb}
              alt="Contemporary luxury villa with glass balconies and architectural detail"
              className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.015] sm:h-[330px] lg:h-[390px] xl:h-[430px]"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-5 opacity-100 sm:p-7">
              <div className="text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Featured collection
                </p>
                <h2 className="mt-1 text-xl font-semibold sm:text-2xl">
                  Spaces that inspire
                </h2>
              </div>
              <a
                href="#areas"
                className="rounded-full bg-white px-5 py-3 text-xs font-bold text-[#10483a] transition hover:bg-[#edf2e9]"
              >
                Explore homes ↗
              </a>
            </div>
          </section>

          {/* Areas section */}
          <section id="areas" className="py-16 sm:py-20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#43856c]">
                  Find your place
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-[#073B32]">
                  Explore popular areas
                </h2>
              </div>
              <a
                href="#listings"
                className="w-fit border-b border-[#10483a] pb-1 text-sm font-semibold text-[#10483a]"
              >
                View all listings ↗
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Ikoyi", detail: "Luxury residences" },
                { name: "Victoria Island", detail: "City living" },
                { name: "Lekki", detail: "Contemporary homes" },
              ].map((area) => (
                <a
                  href="#listings"
                  key={area.name}
                  className="rounded-2xl border border-[#e4e5dc] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md block"
                >
                  <Building2 className="mb-5 text-[#43856c]" size={25} />
                  <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
                  <p className="mt-1 text-sm text-[#6c756e]">{area.detail}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full font-sans bg-[#021a15] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-7 lg:gap-10">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <h2 className="text-lg sm:text-xl font-bold tracking-wide text-amber-400">
                HavenHome
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                © 2026 HavenHome. All Rights Reserved.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 sm:gap-x-8 w-full lg:w-auto">
              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">WhatsApp</p>
                  <a
                    href="https://wa.me/2348061118674"
                    className="text-[10px] sm:text-xs text-gray-200 hover:text-amber-400 hover:underline break-all"
                  >
                    08061118674
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Call</p>
                  <a
                    href="tel:08061118674"
                    className="text-[10px] sm:text-xs text-gray-200 hover:text-amber-400 hover:underline"
                  >
                    08061118674
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Email</p>
                  <a
                    href="mailto:info@havenhome.com"
                    className="text-[10px] sm:text-xs text-gray-200 hover:text-amber-400 hover:underline break-all"
                  >
                    info@havenhome.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Website</p>
                  <a
                    href="https://www.havenhome.com"
                    className="text-[10px] sm:text-xs text-gray-200 hover:text-amber-400 hover:underline break-all"
                  >
                    www.havenhome.com
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