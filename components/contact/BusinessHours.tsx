export default function BusinessHours() {
  const hours = [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 5:00 PM" },
    { day: "Sunday", time: "By Appointment" },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-2xl font-bold">Business Hours</h3>

      <div className="space-y-3">
        {hours.map((item) => (
          <div
            key={item.day}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.day}</span>
            <span className="font-medium">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}