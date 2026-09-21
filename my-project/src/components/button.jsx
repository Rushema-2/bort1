function Button({ name, onClick, background }) {
  return (
    <button
      className={`${background} text-white py-2 px-10 font-bold rounded-md hover:opacity-90`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;