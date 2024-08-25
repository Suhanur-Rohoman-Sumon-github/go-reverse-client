const SolutionsWeOffer = () => {
  // Static data for service cards
  const services = [
    {
      id: 1,
      image: "https://vizmo.in/_nuxt/img/building.94b6d01.svg",
      title: "Event Planning",
      description:
        "We handle every detail of your event to ensure it's a success.",
    },
    {
      id: 2,
      image: "https://vizmo.in/_nuxt/img/shield.a3f30a0.svg",
      title: "Venue Booking",
      description: "Find and book the perfect venue for your event.",
    },
    {
      id: 3,
      image: "https://vizmo.in/_nuxt/img/compliance.584c44a.svg",
      title: "Catering Services",
      description: "Delicious catering options to suit your event needs.",
    },
    {
      id: 4,
      image:
        "data:image/svg+xml,%3Csvg%20width%3D%2256%22%20height%3D%2256%22%20viewBox%3D%220%200%2056%2056%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20opacity%3D%220.2%22%20d%3D%22M28%2028H9.625V11.375C9.625%2010.9109%209.80937%2010.4658%2010.1376%2010.1376C10.4658%209.80937%2010.9109%209.625%2011.375%209.625H28V28Z%22%20fill%3D%22%230094A1%22%2F%3E%0A%3Cpath%20d%3D%22M44.625%209.625H11.375C10.4085%209.625%209.625%2010.4085%209.625%2011.375V44.625C9.625%2045.5915%2010.4085%2046.375%2011.375%2046.375H44.625C45.5915%2046.375%2046.375%2045.5915%2046.375%2044.625V11.375C46.375%2010.4085%2045.5915%209.625%2044.625%209.625Z%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M28%209.625V46.375%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M46.375%2028H9.625%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A",
      title: "Entertainment",
      description:
        "From DJs to live bands, we provide entertainment for your event.",
    },
    {
      id: 5,
      image:
        "data:image/svg+xml,%3Csvg%20width%3D%2256%22%20height%3D%2256%22%20viewBox%3D%220%200%2056%2056%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_425_421)%22%3E%0A%3Cpath%20opacity%3D%220.2%22%20d%3D%22M19.25%2022.75H7V43.75H19.25V22.75Z%22%20fill%3D%22%230094A1%22%2F%3E%0A%3Cpath%20d%3D%22M7%2012.25H49V42C49%2042.4641%2048.8156%2042.9092%2048.4874%2043.2374C48.1592%2043.5656%2047.7141%2043.75%2047.25%2043.75H8.75C8.28587%2043.75%207.84075%2043.5656%207.51256%2043.2374C7.18437%2042.9092%207%2042.4641%207%2042V12.25Z%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M7%2022.75H49%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M7%2033.25H49%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M19.25%2022.75V43.75%22%20stroke%3D%22%230094A1%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_425_421%22%3E%0A%3Crect%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",
      title: "Decoration",
      description: "Beautiful decorations to match your event theme.",
    },
    {
      id: 6,
      image: "https://vizmo.in/_nuxt/img/handshake.9370c39.svg",
      title: "Photography",
      description:
        "Capture every moment with our professional photography services.",
    },
    {
      id: 7,
      image: "https://vizmo.in/_nuxt/img/briefcase.311e007.svg",
      title: "Transportation",
      description: "Reliable transportation options for you and your guests.",
    },
    {
      id: 8,
      image: "https://vizmo.in/_nuxt/img/compliance.584c44a.svg",
      title: "Guest Management",
      description: "Efficient guest list management and RSVP tracking.",
    },
  ];

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Services We Provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>

            {/* Paragraph Text */}
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsWeOffer;
