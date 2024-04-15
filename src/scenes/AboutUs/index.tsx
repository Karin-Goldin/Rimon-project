import HText from "@/shared/HText";
import { SelectedPage, VideoType } from "@/shared/types";
import { motion } from "framer-motion";
import video1 from "@/assets/Hetmed-english.mp4";
import video2 from "@/assets/MANGO-HEDGE-FUND-LP.mp4";
import Logo2 from "@/assets/rimon-transperant2.png";
import HetmedPoster from "@/assets/hetmed-video-poster.jpeg";
import MangoPoster from "@/assets/mango-video-poster.jpeg";

const videos: Array<VideoType> = [
  {
    name: "video1",
    title: "Get to know the investment strategy of HETMED",
    src: video1,
    poster: HetmedPoster,
  },
  {
    name: "video2",
    title: "Get to know the investment strategy of MANGO",
    src: video2,
    poster: MangoPoster,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:flex md:items-start md:justify-between">
            {/* Text Section */}
            <div className="md:basis-3/5">
              <HText>
                <span className="text-primary-500 text-5xl">About </span>Rimon
                hedge funds
              </HText>
              <p className="my-5 text-xl">
                Rimon Hedge Funds was established in 2016 after a successful
                3-year pilot with shareholder`s money.
              </p>
              <p className="my-5 text-xl">
                Varied strategies, including the development of support systems
                for trading and algorithmic trading, in accordance with changes
                in the economy and capital markets. The fund's managers have
                many years of experience in the Israeli and global capital
                market. Rimon Hedge Funds believes in joint success and only if
                its investors make money will it also make a profit and as
                evidence does not charge management fees in the funds it manages
                but only success fees.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:basis-2/5 flex justify-center md:justify-end">
              <img alt="Logo2" src={Logo2} className="w-100 h-100" />
            </div>
          </div>
        </motion.div>

        {/* VIDEOS */}
        <motion.div
          className="w-5/6 mt-5 justify-between gap-10 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {videos.map((video: VideoType) => (
            <div key={video.name} className="video-container">
              <p className="font-bold font text-xl">{video.title}</p>
              <div className="border-t-2 mt-2 border-gray-100"></div>
              <video
                src={video.src}
                controls
                className=" mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
                poster={video.poster}
              />
            </div>
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
