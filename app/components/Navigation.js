import Link from 'next/link';

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about">About</Link>
      </li>
      <li>
        <Link href="/account">Your account</Link>
      </li>
    </ul>
  );
}
