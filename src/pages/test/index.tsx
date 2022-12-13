import Link from "next/link";

const Test = () => {
  return (
    <div>
      test
      <ul>
        <li>
          <Link href="/test/1">1</Link>
        </li>
        <li>
          <Link href="/test/2">2</Link>
        </li>
        <li>
          <Link href="/test/3">3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Test;
