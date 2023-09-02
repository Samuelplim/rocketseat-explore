import { Link } from "react-router-dom";

export const LinkLight = ({ title, to, ...rest }) => {
  return (
    <Link className="text-sm text-center" to={to} {...rest}>
      {title && title}
    </Link>
  );
};
