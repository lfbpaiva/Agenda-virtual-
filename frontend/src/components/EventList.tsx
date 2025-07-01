import type { Event } from "../types/Event";

interface Props {
  events: Event[];
  onDelete: (id: number) => void;
  onEdit: (event: Event) => void;
}

export default function EventList({ events, onDelete, onEdit }: Props) {
  const now = new Date();

  return (
    <div className="grid gap-4 mt-4 w-full max-w-2xl">
      {events.map((event) => {
        const eventDate = new Date(event.date);
        const isDue = eventDate <= now;

        return (
          <div
            key={event.id}
            className={`p-4 rounded-xl shadow border-l-8 ${
              isDue ? "border-red-500 bg-red-100" : "border-green-500 bg-green-100"
            }`}
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm">{eventDate.toLocaleString()}</p>
            {isDue && <p className="text-red-600 font-semibold">⚠️ Evento chegou!</p>}

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => onEdit(event)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(event.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
