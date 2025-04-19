import experiences from '@/app/data/experiences';
import { Briefcase, Calendar } from 'lucide-react';
import Tag from '../Tag/Tag';

const Experiences = () => {
  return (
    <section className="max-w-6xl mx-auto mb-12">
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-zinc-800"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 flex items-start">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 ml-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-3">{exp.role}</h4>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-col flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {exp.technicalSkills.map((skill, idx) => (
                      <Tag key={idx} type={skill} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.softSkills.map((skill, idx) => (
                      <Tag key={idx} type={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
