import { useEffect, useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import type { Event } from "./types/Event";

export default function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadEvents = async () => {
    const res = await fetch("http://localhost:3000/events");
    const data = await res.json();
    setEvents(data);
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
    });
    loadEvents();
  };

  const handleSave = () => {
    setShowForm(false);
    setSelectedEvent(null);
    loadEvents();
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Agenda Virtual</h1>
      <button
        onClick={() => {
          setSelectedEvent(null);
          setShowForm(true);
        }}
        className="mb-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded"
      >
        Novo Evento
      </button>

      {showForm && (
        <EventForm
          selectedEvent={selectedEvent}
          onSave={handleSave}
          onCancel={() => {
            setSelectedEvent(null);
            setShowForm(false);
          }}
        />
      )}

      <EventList events={events} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}
