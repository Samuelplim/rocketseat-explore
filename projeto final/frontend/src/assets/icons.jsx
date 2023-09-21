const PolygonIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 39 44"
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      d="m19.657 0 18.756 10.829v21.657L19.657 43.315.902 32.486V10.83L19.657 0Z"
    />
  </svg>
);

const ReceiptIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
      <path d="M8.961 13.366a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1ZM8.961 17.366a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1Z" />
      <path d="M4.047 5.952a2 2 0 0 1 1.414-.586h22a2 2 0 0 1 2 2v19a1 1 0 0 1-1.447.895l-3.553-1.777-3.553 1.777a1 1 0 0 1-.894 0l-3.553-1.777-3.553 1.777a1 1 0 0 1-.894 0l-3.553-1.777-3.553 1.777a1 1 0 0 1-1.447-.895v-19a2 2 0 0 1 .586-1.414Zm23.414 1.414h-22v17.382l2.553-1.276a1 1 0 0 1 .894 0l3.553 1.776 3.553-1.776a1 1 0 0 1 .894 0l3.553 1.776 3.553-1.776a1 1 0 0 1 .894 0l2.553 1.276V7.366Z" />
    </g>
  </svg>
);
export { PolygonIcon, ReceiptIcon };
