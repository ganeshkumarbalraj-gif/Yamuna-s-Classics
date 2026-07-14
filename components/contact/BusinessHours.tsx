import { site } from "@/data/site";

export default function BusinessHours() {
  const hours = [
    {
      day: "Monday",
      time: site.businessHours.monday,
    },
    {
      day: "Tuesday",
      time: site.businessHours.tuesday,
    },
    {
      day: "Wednesday",
      time: site.businessHours.wednesday,
    },
    {
      day: "Thursday",
      time: site.businessHours.thursday,
    },
    {
      day: "Friday",
      time: site.businessHours.friday,
    },
    {
      day: "Saturday",
      time: site.businessHours.saturday,
    },
    {
      day: "Sunday",
      time: site.businessHours.sunday,
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h3 className="mb-6 text-2xl font-bold">
        Business Hours
      </h3>

      <div className="space-y-3">

        {hours.map((item) => (

          <div
            key={item.day}
            className="flex justify-between border-b pb-2"
          >

            <span>{item.day}</span>

            <span className="font-medium">
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}