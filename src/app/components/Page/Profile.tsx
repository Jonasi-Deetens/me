import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import LinkButton from "../../../components/buttons/LinkButton";
import { useTheme } from "next-themes";

const Profile = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white/10 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/20 dark:border-white/10">
      <div className="flex-shrink-0 rounded-xl">
        <Image
          src={theme === "dark" ? "/me-black.png" : "/me.png"}
          alt="Jonasi Deetens"
          width={240}
          height={240}
          className="rounded-xl"
        />
      </div>

      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-2">Jonasi Deetens</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Full Stack Developer
        </h2>

        <div className="flex gap-2 mb-6">
          <div className="flex items-center gap-2 border rounded-lg p-2 text-gray-600 dark:text-gray-400">
            <Mail className="w-3 h-3" />
            <span className="text-xs">your.email@example.com</span>
          </div>
          <div className="flex items-center gap-2 border rounded-lg p-2 text-gray-600 dark:text-gray-400">
            <Phone className="w-3 h-3" />
            <span className="text-xs">+1234567890</span>
          </div>
          <div className="flex items-center gap-2 border rounded-lg p-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">Your Location</span>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Passionate Full Stack Developer with expertise in React, Node.js, and
          TypeScript. Building modern web applications with a focus on user
          experience and clean code.
        </p>

        <LinkButton href="/contact">Contact Me</LinkButton>
      </div>
    </div>
  );
};

export default Profile;
