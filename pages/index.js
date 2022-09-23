import Link from "next/link";
import pages from "../data/pages";

const Index = () => {
  const renderLink = Object.entries(pages).map((entry) => (
    <li key={entry[0]}>
      <Link href={entry[0]}>
        <a>{entry[1].title}</a>
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{renderLink}</ul>
    </div>
  );
};

export default Index;
