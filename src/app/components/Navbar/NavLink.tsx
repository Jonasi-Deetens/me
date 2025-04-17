import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm font-medium rounded-lg
        text-gray-700 hover:text-gray-900 hover:bg-gray-100
        dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10
        transition-all duration-150 w-full"
    >
      {children}
    </Link>
  );
};

export default NavLink;
