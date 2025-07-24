import { useRef, useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ajay",
    role: "Entrepreneur",
    avatar: "/profiles/ajay.png",
    feedback:
      "Good morning! Yesterday’s STTF session was highly informative and provided valuable insights into the market. You shared a wealth of information within the three hours, and it was incredibly beneficial for everyone involved. Looking forward to meeting you at Next the workshop. All Rudra sir’s programs are value for money.",
  },
  {
    name: "Kavya DS",
    role: "Homemaker",
    avatar: "/profiles/kavya.png",
    feedback:
      "Yesterday’s STTF session was so informative and added great value. In just three hours, you shared a lot of easy-to-understand insights about the market. As a homemaker, I found it very useful and applicable. I recommend everyone to attend the program without fail.",
  },
  {
    name: "Nagaraj",
    role: "IT Professional",
    avatar: "/profiles/nagaraj.png",
    feedback:
      "Today’s STTF session was superb! Please continue sharing more learning techniques. I’m thrilled to understand the risk-reward ratio and how to make money gradually through consistent learning. It’s been an eye-opener for me, You’re amazing. 100% of all Rudra programs are practical and worth every paisa spent.",
  },
  {
    name: "M.K. Kishore",
    role: "Real Estate Investor",
    avatar: "/profiles/kishore.png",
    feedback:
      "Sir thank you so much for giving such a wonderful training program. I learned what is passive income, compound interest, can become rich slowly not suddenly. Overall webinar is eye opening for investors and Trader particularly for beginners like me.",
  },
  {
    name: "Basavaraj",
    role: "Self Employed",
    avatar: "/profiles/basavraj.png",
    feedback:
      "To the point, deep, and empowering! The session is becoming a powerful part of my day. As Rudra sir said \"Freedom is not given, you have to earn it.\" Thank you for such an enlightening session!",
  },
];


export default function Testimonials() {
  const scrollRef = useRef(null);
  const cardWidth = 300; // Updated for better spacing
  const [index, setIndex] = useState(0);

  const scrollToIndex = (newIndex) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    const nextIndex = (index + 1) % testimonials.length;
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
    setIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    scrollToIndex(index);
  }, []);

  return (
    <section className="bg-[#030617] text-white px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Hear it from our <span className="text-[#00FF99]">students</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-md">
              Hear what past attendees say about learning directly from CA{" "}
              <span className="font-medium">Rudramurthy</span>.
            </p>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            <button onClick={prev} className="p-2 bg-[#0f172a] rounded-md">
              <FaChevronLeft />
            </button>
            <button onClick={next} className="p-2 bg-[#0f172a] rounded-md">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[300px] max-w-[300px] bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 flex-shrink-0"
            >
              <p className="text-sm text-gray-300 mb-4">“{t.feedback}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} size={12} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Images Below (Responsive) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
          <img src="/image1.jpg" alt="testimonial context" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg object-cover" />
          <img src="/image2.jpg" alt="testimonial context" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
}
