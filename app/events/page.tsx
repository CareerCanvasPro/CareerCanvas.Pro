import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Introduction to Machine Learning",
    date: "2024-04-15",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    category: "Technology"
  },
];

export default function Events() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Upcoming <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-gray-600">
            Join our educational events and enhance your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover-lift">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#0052CC] text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#3CB371]" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#3CB371]" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-[#3CB371]" />
                    {event.location}
                  </div>
                </div>
                <Button className="w-full bg-[#0052CC] hover:bg-[#3CB371] transition-colors">
                  Register Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}