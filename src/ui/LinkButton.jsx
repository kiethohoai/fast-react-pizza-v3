import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === '-1')
    return (
      <button
        className="text-sm font-semibold text-blue-500 hover:border-b hover:border-blue-600
          hover:text-blue-600"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      className="text-sm font-semibold text-blue-500 hover:border-b hover:border-blue-600
        hover:text-blue-600"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
