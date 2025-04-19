interface TagProps {
  type: string;
}

const Tag = ({ type }: TagProps) => {
  const normalizedType = type.toLowerCase();

  const getTagStyles = (tagType: string) => {
    switch (tagType) {
      // Technical Skills
      case 'next.js':
        return 'bg-black dark:bg-white/10 text-white dark:text-white';
      case 'typescript':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'tailwind css':
        return 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-300';
      case 'postgresql':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'docker':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'trpc':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';

      // Soft Skills
      case 'leadership':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      case 'mentoring':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300';
      case 'quick learning':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
      case 'customer service':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'team leadership':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      case 'communication':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
      case 'problem solving':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'multitasking':
        return 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div
      className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${getTagStyles(normalizedType)}`}
    >
      {normalizedType}
    </div>
  );
};

export default Tag;
