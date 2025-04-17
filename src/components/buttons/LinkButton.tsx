import Link from "next/link";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15 dark:hover:to-white/10 text-white dark:text-gray-100 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-gray-800/10 dark:border-white/10 font-medium tracking-wide"
  >
    {children}
  </Link>
);

export default LinkButton;
