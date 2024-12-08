import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const styles = `inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400/80 focus:outline-none focus:ring focus:ring-yellow-400/90 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles}>
      {children}
    </button>
  );
}

export default Button;
