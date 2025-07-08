import React from "react";

const ReservationCard = () => {
  // Get tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  };

  const minDate = getTomorrowDate();

  return (
    <div className="flex flex-wrap gap-4 bg-white p-5 rounded-xl shadow-lg text-black w-[90vw] max-w-4xl justify-around items-end border-3 border-[#0478bb]">
      <div className="flex flex-col flex-1 basis-[100px]">
        <label className="font-semibold mb-1 ">Arrivée</label>
        <input type="date" className="border rounded px-2 py-1" min={minDate} />
      </div>
      <div className="w-[1px] h-[40px] bg-gray-500 hidden sm:flex"></div>

      <div className="flex flex-col flex-1 basis-[100px]">
        <label className="font-semibold mb-1">Départ</label>
        <input type="date" className="border rounded px-2 py-1" min={minDate} />
      </div>
      <div className="w-[1px] h-[40px] bg-gray-500 hidden sm:flex"></div>

      <div className="flex flex-col flex-1 basis-[100px]">
        <label className="font-semibold mb-1">Adultes</label>
        <input
          type="number"
          min="1"
          max="20"
          defaultValue="1"
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="w-[1px] h-[40px] bg-gray-500 hidden sm:flex"></div>

      <div className="flex flex-col flex-1 basis-[100px]">
        <label className="font-semibold mb-1">Enfants</label>
        <input
          type="number"
          min="1"
          max="20"
          defaultValue="1"
          className="border rounded px-2 py-1"
        />
      </div>
      <button className="bg-[#0478bb] rounded-lg p-3 text-white cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default ReservationCard;
