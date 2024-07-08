import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">Discover Your Next Adventure</h1>
            <div className="flex space-x-2">
              <Input placeholder="Destination" className="w-1/4" />
              <Calendar selected={checkInDate} onSelect={setCheckInDate} className="w-1/4" />
              <Calendar selected={checkOutDate} onSelect={setCheckOutDate} className="w-1/4" />
              <Input placeholder="Guests" className="w-1/4" />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Destination {item}</CardTitle>
                <CardDescription>Short description of destination {item}.</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <CardHeader>
                    <CardTitle>Offer {item}</CardTitle>
                    <CardDescription>Short description of offer {item}.</CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div className="space-y-2">
            <a href="#" className="block">About Us</a>
            <a href="#" className="block">Privacy Policy</a>
            <a href="#" className="block">Terms of Service</a>
            <a href="#" className="block">Contact Us</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="inline-block">FB</a>
            <a href="#" className="inline-block">TW</a>
            <a href="#" className="inline-block">IG</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;