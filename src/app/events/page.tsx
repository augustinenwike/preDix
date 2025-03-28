import Layout from '../../components/Layout';
import EventCard from '../../components/EventCard';

const EventsPage: React.FC = () => {
  const allEvents = [
    // Add more sample events here
    {
      title: "Bitcoin Price Prediction - March 2025",
      options: ["Above $90k", "Between $85k-$90k", "Below $85k"],
      poolId: 125,
      timeRemaining: "5 days left",
      status: "open"
    },
    {
      title: "Cryptocurrency Adoption Outcome 2025",
      options: ["Full Adoption", "Partial Adoption", "No Agreement"],
      poolId: 126,
      timeRemaining: "202 days left",
      status: "open"
    },
    {
      title: "Nations League Cup Semi Final: Spain vs France",
      options: ["Spain Win", "Draw", "France Win"],
      poolId: 123,
      timeRemaining: "2 days left",
      status: "open"
    },
    {
      title: "US Presidential Election 2024",
      options: ["	Donald Trump", "Kamala D. Harris", "Jill Stein", "Robert F. Kennedy Jr"],
      poolId: 124,
      timeRemaining: "Closed",
      status: "closed"
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">All Events</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event, index) => (
            <EventCard key={index} {...event} status={event.status as "open" | "closed" | "resolved"}/>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;