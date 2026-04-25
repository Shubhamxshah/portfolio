export default function Kubernetes() {
  const angles = [0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6];
  return (
    <svg viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="64" fill="#326CE5" />
      <circle
        cx="64"
        cy="64"
        r="50"
        fill="none"
        stroke="#fff"
        strokeWidth="10"
      />
      <circle cx="64" cy="64" r="12" fill="#fff" />
      <circle cx="64" cy="64" r="6" fill="#326CE5" />
      {angles.map((angle, i) => (
        <rect
          key={i}
          x="61"
          y="19"
          width="6"
          height="33"
          fill="#fff"
          rx="2"
          transform={`rotate(${angle}, 64, 64)`}
        />
      ))}
    </svg>
  );
}
