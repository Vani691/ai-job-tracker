const StatsCard = ({ title, value, color }) => {

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:scale-[1.02] transition">
  
        <p className="text-slate-400 mb-2">
          {title}
        </p>
  
        <h2 className={`text-4xl font-bold ${color}`}>
          {value}
        </h2>
  
      </div>
    );
  };
  
  export default StatsCard;