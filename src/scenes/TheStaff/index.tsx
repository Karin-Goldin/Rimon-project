import HText from "@/shared/HText";
import { SelectedPage, WorkerType } from "@/shared/types";
import { motion } from "framer-motion";
import Worker from "@/scenes/TheStaff/Worker";
import img1 from "@/assets/handshake.png";
import michal from "@/assets/michal.jpeg";
import Aryeh from "@/assets/Aryeh.jpeg";
import Hila from "@/assets/Hila.jpeg";
import Zivan from "@/assets/Zivan.jpeg";
import Dan from "@/assets/Dan.jpeg";
import Amit from "@/assets/Amit.jpeg";
import Randy from "@/assets/Randy.jpeg";
import Danit from "@/assets/Danit.jpeg";
import Suzi from "@/assets/Suzi.jpeg";
import Orian from "@/assets/Orian.jpeg";

const workers: Array<WorkerType> = [
  {
    title: "Michal Adlersberg - CEO and owner of Rimon Hedge Funds",
    description:
      "Has many years of experience in management, entrepreneur and businesswoman.",
    image: michal,
  },
  {
    title: "Aryeh Goldin - Investment manager and strategic consultant",
    description:
      "Has 18 years of managerial experience in banking and the capital market in positions of risk management, business development and as a director in fund companies. MBA in Business Administration from the Hebrew University, BA in Economics and Communication from the Hebrew University.",
    image: Aryeh,
  },
  {
    title: "Hila Tal - CEO",
    description:
      "Over 40 years of experience in investment management and analysis positions in the international capital market. Designs, plans and implements the fund's investment strategies since its inception. BA in Economics and Accounting MBA in International Business Administration.",
    image: Hila,
  },
  {
    title:
      "Zivan Levy Gal - Director of Marketing, Sales and Investor Relations",
    description:
      "Has 10 years of experience in the capital market in the field of sales and financial marketing. BA in Business Administration with a specialization in finance from the Ono Academic Campus.",
    image: Zivan,
  },
  {
    title: "Dan Kedar - Middle Office Manager and Data Analytics",
    description:
      "Has 15 years of experience in the capital market, in the roles of risk management, analysis management, investment control, and operations. BSc and MSc degrees in economics, LLB in law and MBA in business administration with a specialization in finance and the capital market.",
    image: Dan,
  },
  {
    title: "Amit Ptakevitch- Back Office Manager",
    description:
      "Has extensive experience in the field of administration, manages the opening of accounts and the day-to-day management of the trading arenas and bank accounts.",
    image: Amit,
  },
  {
    title: "Randy Zeligson - Macro Trader and Analyst",
    description:
      "Certified in Alternative Investments from Harvard Business School. Has 10 years of experience in the capital market with specialization in foreign exchange and bonds.",
    image: Randy,
  },
  {
    title:
      "Danit Ptakevitch - manager of the field of recruitingclients from insurance agents and family offices",
    description:
      "experience in leading cross-organizational processes with different interfaces, and knowledge in the field of developing new markets.",
    image: Danit,
  },
  {
    title: "Suzi Pinto - Administrative Manager",
    description:
      "over 20 years of experience in the field of administration and accounting, Has an accounting certificate and 'Priority'.",
    image: Suzi,
  },
  {
    title: "Orian Cohen - Management and development of 'Rimon USA'",
    description:
      "Establishes an extension of “Rimon hedge funds” in North America. Development and management of investor relations. BA degree in Economics and Business Administration from the University of Derby.",
    image: Orian,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const TheStaff = ({ setSelectedPage }: Props) => {
  return (
    <section id="thestaff" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.TheStaff)}
        className="flex flex-wrap justify-center items-center"
      >
        <motion.div
          className="mx-auto w-5/6 md:flex md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>The Staff</HText>
            <p className="py-5 text-lg">
              The Rimon Hedge Funds Ltd. team is happy to enter another decade
              of innovation and professionalism and brings with it many years of
              knowledge and experience in the fields of economics, business,
              marketing, and entrepreneurship to the world of hedge funds and
              the capital market!
            </p>
            <p className="text-lg">
              Together with the fund's gatekeepers, accountants and lawyers who
              have accompanied the company for many years, the Rimon Hedge Funds
              Ltd. team takes care of the continued prosperity and success of
              the funds on a daily and annual basis.
            </p>
            <p className="py-5 text-lg">
              Whether it is in managing trading rooms and information systems,
              in execution and investment management positions, in advanced
              analysis in the international capital market or in planning
              investment strategies based on algo-trading, the Rimon Hedge Funds
              Ltd. team is here to stay at the forefront of the field for many
              years to come. Operating the company's most unique and innovative
              trading tools, combined with tight financial regulation, has
              placed the Rimon Hedge Funds Ltd. team among the leading hedge
              fund lists in the country, with the face forward to the coming
              years.
            </p>
          </div>
          <img
            src={img1}
            alt="Team Image"
            className="hidden md:block md:w-2/5 md:ml-5"
          ></img>
        </motion.div>
        <div className="mt-10 w-full ml-3 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workers.map((item: WorkerType, index) => (
              <Worker
                key={`${item.title}-${index}`}
                title={item.title}
                description={item.description || ""}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TheStaff;
