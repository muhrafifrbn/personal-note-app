/* eslint-disable react/prop-types */
export default function Button({ className, teks, type, handleClick = "" }) {
  return (
    <button onClick={handleClick} type={type} className={className}>
      {teks}
    </button>
  );
}
