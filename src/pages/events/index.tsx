import React from "react";
import Head from "next/head";

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>Events | CareerCanvas</title>
        <meta
          name="description"
          content="Explore career-related events and workshops"
        />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event cards will go here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Sample Event</h2>
            <p className="text-gray-600 mb-4">
              Join us for an exciting career workshop!
            </p>
            <div className="text-sm text-gray-500">
              <p>Date: Coming Soon</p>
              <p>Location: Virtual</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventsPage;
