import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-red-600 text-sm font-semibold uppercase tracking-wide text-stone-100 inline-block rounded-full  hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "  px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 inline-block rounded-full  hover:bg-stone-300 transition-colors hover:text-stone-800 duration-300  focus:outline-none focus:ring focus:text-stone-800 focus:bg-stone-300 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed text-sm",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
