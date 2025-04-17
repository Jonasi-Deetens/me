import { Button } from "../../../components/buttons/Button";

interface HeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  children?: React.ReactNode;
  onBack?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

const Header = ({
  title,
  subtitle,
  gradient = true,
  children,
  onBack,
  actionButton,
}: HeaderProps) => {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <Button
              onClick={onBack}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
          )}
          <div className="flex items-center gap-2">
            <h1
              className={`text-xl font-bold text-gray-700 dark:text-gray-100  ${
                gradient
                  ? "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="h-full text-lg font-bold text-gray-700 dark:text-gray-100 leading-relaxed max-w-3xl">
                - {subtitle}
              </p>
            )}
          </div>
        </div>

        {actionButton && (
          <Button onClick={actionButton.onClick}>{actionButton.label}</Button>
        )}
      </div>

      <div className="h-px bg-gray-200 dark:bg-gray-700 mb-6" />

      <div className="relative">
        {children}
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default Header;
