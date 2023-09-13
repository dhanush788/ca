import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant ,staggerContainer } from "../utils/motion";
import prize from "../assets/prizes-worth.svg";
import '../App.css';

const services = [
    {
      title: "$15000",
      pos: "1st",
      icon: "gold.png",
    },
    {
      title: "$10000",
      pos: "2nd",
      icon: "silver.png",
    },
    {
      title: "$5000",
      pos: "3rd",
      icon: "bronze.png",
    },
    {
      title: "$1000",
      pos: "4th to 10th",
      icon: "other.png",
    },
    {
      title: "$500",
      pos: "11th to 20th",
      icon: "other.png",
    },
    {
      title: "$100",
      pos: "21th to 30th",
      icon: "other.png",
    },
  ];

  const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };


const ServiceCard = ({ index, title, icon,pos }) => (
  <motion.div
      variants={{
        hidden: { opacity: 0, x: '100%' },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 100,
            delay: index * 0.75,
            duration: 0.75,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="w-4/10 p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-green-500 to-pink-500 hover:animate-pulse animate-100s animate-cubic-bezier-[0.4, 0, 0.6, 1] animate-infinite"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-center">
        <img src={icon} alt="prizes" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
        <p className="text-white text-lg text-center">+ Goodies and other gifts.</p>
        <p className="text-white">{pos}</p>
      </div>
    </motion.div>
);

const About = () => {
  return (
    <>
    <div className="flex flex-row ">
      <div>
      <motion.div variants={textVariant()}>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] animate-bounce animate-16s animate-cubic-bezier-[0.4, 0, 0.6, 1] animate-infinite">Benefits.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >Any student currently pursuing education in an established institute who wishes to participate in Tathva may apply.Applicants having good interpersonal and communication skills with previous experience will be given preference.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Special certificate for top 20 people.Certificate for those who completed a certain tier (% of work).
        Extra benefits for excellence in work (Awarded by Tathva PRC)
      </motion.p>
      </div>
      <div className=" ml-20 mt-[-60px] ">
      <img src= {prize} alt="prizes" className=" object-contain" />
      </div>
    </div>

      <div className='mt-20 flex flex-wrap w-full justify-between gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "Benefits");