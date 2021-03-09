import Link from "next/link";
import { useRouter } from "next/router";
import GiantHeader from "./GiantHeader";

const links = ["rockets", "launches", "starlink", "history", "about"];

const NavigationLinks = () => {
  const router = useRouter();
  const ifNotHomepage = router.pathname !== "/";
  const initalRoute = router.pathname.split("/")
  const ifNotLink = (link: string) => initalRoute[1] !== link;

  return (
    <>
      {ifNotHomepage && (
        <div className="hidden lg:flex fixed left-0 top-0 flex-col px-4 pt-10">
          {links.map((link) =>
            ifNotLink(link) ? (
              <Link key={link} href={`/${link}`}>
                <button className="mb-10 ml-4 capitalize text-left font-medium text-gray-300 opacity-80 lg:text-xl xl:hover:underline xl:hover:text-yellow-500 focus:outline-none">
                  {link}
                </button>
              </Link>
            ) : (
              <GiantHeader key={link} link={link} />
            )
          )}
        </div>
      )}
    </>
  );
};

export default NavigationLinks;
