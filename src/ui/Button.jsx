import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type = 'primary' }) {
  const base = `inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide
          text-stone-800 transition-colors duration-300 hover:bg-yellow-400/80
          focus:outline-none focus:ring focus:ring-yellow-400/90 focus:ring-offset-2
          disabled:cursor-not-allowed text-sm`;

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-4`,
    small: `${base} px-3 py-2 md:px-5 md:py-2.5 text-sm`,
    secondary: `px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-200 inline-block
          rounded-full font-semibold uppercase tracking-wide text-stone-800
          transition-colors duration-300 hover:bg-stone-200 hover:text-stone-800
          focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200
          focus:ring-offset-2 disabled:cursor-not-allowed`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
