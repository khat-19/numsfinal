
const members = [
  {
    name: "Mawuliah Mansaray",
    role: "Software Engineer",
    image: "src/img/mawuliah.jpg"
  },
  {
    name: "Fatima Ali",
    role: "Vice President 2022",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Omar Khan",
    role: "Secretary 2021",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    name: "Aisha Rahman",
    role: "Treasurer 2021",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Yusuf Ahmed",
    role: "Events Coordinator 2020",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

const WallOfFame = () => {
  // Double the members array to create a seamless loop
  const doubledMembers = [...members, ...members];

  return (
    <section id="wall-of-fame" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">Wall of Fame</h2>
        <div className="relative">
          <div className="scroll-container">
            <div className="scroll-content">
              {doubledMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex-none w-64 px-3"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-emerald-800">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WallOfFame;