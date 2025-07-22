function Key({ label, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className="w-16 h-16 text-xl bg-gray-200 rounded hover:bg-gray-300"
    >
      {label}
    </button>
  );
}

export default Key;