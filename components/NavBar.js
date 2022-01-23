import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-screen grid grid-cols-2 m-2">
      <div>
        <p>Logo</p>
      </div>
      <div className="ml-auto">
        <ul className="grid grid-cols-3">
          <li className="pr-2">
            <Link href="/">Home</Link>
          </li>
          <li className="pr-2">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="pr-2">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
