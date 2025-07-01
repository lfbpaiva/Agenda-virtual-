import { useState, useEffect } from "react";
import type { Event } from "../types/Event";

interface Props {
  selectedEvent: Event | null;
  onSave: () => void;
  onCancel: () => void;
}

export default function EventForm({ selectedEvent, onSave, onCancel }: Props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setDate(selectedEvent.date.slice(0, 16)); 
    } else {
      setTitle("");
      setDate("");
    }
  }, [selectedEvent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title,
      date: new Date(date).toISOString(),
    };

    const url = selectedEvent
      ? `http://localhost:3000/events/${selectedEvent.id}`
      : "http://localhost:3000/events";

    const method = selectedEvent ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    onSave();
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md space-y-4 w-full max-w-md">
      <h2 className="text-xl font-bold text-center">{selectedEvent ? "Editar Evento" : "Novo Evento"}</h2>
      <input
        type="text"
        placeholder="Nome do evento"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        className="w-full p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
          Cancelar
        </button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Salvar
        </button>
      </div>
    </form>
  );
}
