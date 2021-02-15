import Tabs from "./Tabs";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  children: React.ReactNode;
}

const Navigation = ({ children }: IProps) => {
  const router = useRouter();
  const links = ["rockets", "launches", "starlink", "about"];
  const ifHomepage = router.pathname === "/" ? false : true;
  const selectedStyle = (link: string) =>
    router.pathname === `/${link}`
      ? "border-b-2 border-yellow-500"
      : "border-b-2 border-gray-700";

  return (
    <>
      {ifHomepage && (
        <Tabs>
          {links.map((link) => (
            <Link key={link} href={`/${link}`}>
              <button
                className={`p-4 capitalize lg:text-xl rounded-t-xl ${selectedStyle(
                  link
                )} focus:outline-none hover:bg-yellow-800 hover:border-yellow-700`}
              >
                {link}
              </button>
            </Link>
          ))}
        </Tabs>
      )}

      {children}
    </>
  );
};

export default Navigation;