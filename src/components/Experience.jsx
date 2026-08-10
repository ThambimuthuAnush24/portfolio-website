import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const achievements = [
    'Developed a portfolio tracking module for buy/sell transactions, holdings, and performance history.',
    'Built stock analytics pages with market data, financial metrics, dividends, and charts for CSE-listed companies.',
    'Implemented market discovery features including top gainers/losers, heatmaps, and stock screeners.',
    'Designed sector comparison tools using market cap, dividend yield, EPS, and other financial indicators.',
    'Integrated n8n workflow automation to extract transaction data from broker PDF statements.'
  ];

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-2">Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A snapshot of my internship work and the product contributions I made at Viso Labs.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                <FaBriefcase className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Software Engineer Intern</h3>
                <p className="text-blue-400 font-medium">Viso Labs</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-400" />
                <span>Dec 2025 - Jul 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-3 text-gray-300"
                >
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <p className="leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/70 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-700">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaCode className="text-blue-400" />
              Impact Summary
            </h4>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                I worked across full-stack product features, workflow automation, and financial data presentation to improve the usability and reliability of the portfolio platform.
              </p>
              <p className="leading-relaxed">
                The work combined practical engineering across data processing, UI delivery, and integration with third-party automation tools.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-800 p-4 border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">Focus</p>
                <p className="font-medium">Full Stack + Automation</p>
              </div>
              <div className="rounded-xl bg-gray-800 p-4 border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">Domain</p>
                <p className="font-medium">Stock Portfolio Tools</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;