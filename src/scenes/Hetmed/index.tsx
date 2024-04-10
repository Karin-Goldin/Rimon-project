import HText from "@/shared/HText";
import HText2 from "@/shared/HText2";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HetmedImage from "@/assets/HetmedImage.png";
import video1 from "@/assets/Hetmed-english.mp4";
import HetmedPoster from "@/assets/hetmed-video-poster.jpeg";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hetmed = ({ setSelectedPage }: Props) => {
  return (
    <section id="hetmed" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.HETMED)}>
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
          <div className="md:flex md:items-start md:justify-between gap-10">
            {/* Text Section */}
            <div className="md:basis-3/5">
              <HText>
                <span className="text-primary-500 text-5xl">
                  Pleasure to meet you.{" "}
                </span>
                We're HETMED
              </HText>
              <p className="my-5 text-xl">
                HETMED Hedge Fund managed by Rimon Hedge Funds is active in the
                various capital markets using trade in indices and currencies
                while putting an emphasis on trade in full hedge (long short)
                and in any market situation. The trade strategy of the fund
                allows it to maintain low, guaranteed and predefined risk level.
              </p>
              <p className="my-5 text-xl font-extrabold">
                “Based on its unique strategy, HETMED Fund is able to commit to
                a maximum and predefined risk level!”
              </p>
              <p className="my-5 text-xl">
                HETMED Fund performs full hedge transactions by trading in both
                directions at the same time (long and short), allowing it to
                profit from price differentials, when forecasting correctly the
                overall direction of the market and protecting investor funds in
                the event of erroneous forecast.
              </p>
              <HText2>Winning Team</HText2>
              <p className="my-8 text-xl">
                The fund's investment manager and the R&D team examined the
                strategy with their personal money for nearly three years before
                the fund was established and approaching investors in order to
                examine the overall risks in real market situations.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:basis-2/5 justify-center md:justify-end">
              <img src={HetmedImage} alt="Hetmed" className="mt-40" />
              <p className="my-5 text-center text-stone-600">
                ” An investment operation is one which, on thorough analysis,
                promises safety of principal and a satisfactory return.
                Operations not meeting these requirements are speculative. “
                <p className="my-5">- Benjamin Graham</p>
              </p>
            </div>
          </div>
        </motion.div>
        <HText2>Trade Strategy</HText2>
        <p className="my-5 text-xl">
          To achieve surplus returns compared to other investment alternatives,
          while protecting investors' funds and in a variety of market
          conditions, by identifying short-term trends stemming from momentum in
          the prices of traded assets.
        </p>{" "}
        <p className="text-xl">Watch this clip to learn more:</p>
        <video
          className="mt-5 mb-10 w-5/6 h-full"
          controls
          src={video1}
          poster={HetmedPoster}
        />
        <HText2>Sounds Good?</HText2>
        <p className="my-5 text-lg">
          We invite you to join the family of investors of HETMED Fund and enjoy
          the impressive returns. The fund’s profits are only based on success
          and we do not charge management fees. Therefore it ensures a common
          interest for the fund manager and it’s investors.
        </p>
        <ActionButton setSelectedPage={setSelectedPage}>
          let's schedule a Meeting
        </ActionButton>
      </motion.div>
    </section>
  );
};

export default Hetmed;
