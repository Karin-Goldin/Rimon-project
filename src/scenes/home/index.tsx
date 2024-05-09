import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import BullBear from "@/assets/bullbear.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ActionButton2 from "@/shared/ActionButton2";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="gap-16 pt-28 py-10 md:h-full md:pb-0 bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-primary-500 text-5xl">
                The knowledge to win.
              </span>{" "}
              in any market situation.
            </HText>

            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext"></div>
            </div>

            <p className="mt-8 text-2xl">
              We invite you to join the family of investors of Rimon Fund and
              enjoy the impressive returns and zero management fees.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className=" mt-10 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton2 setSelectedPage={setSelectedPage}>
              More Info
            </ActionButton2>
            <p className="text-lg">or</p>
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Us
            </ActionButton>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-30 md:justify-items-end"
        >
          <img alt="BullBear" src={BullBear} />
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center text-xl font-bold">
        <p className="py-8 text-center font-bold border-t border-gray-300 px-2 block">
          "We don't have to be smarter than the rest. We have to be more
          disciplined than the rest."
        </p>
        <p className="text-center text-lg mt-2">– Warren Buffett</p>
      </div>
    </section>
  );
};

export default Home;
