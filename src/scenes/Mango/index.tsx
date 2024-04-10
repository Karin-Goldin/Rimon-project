import HText from "@/shared/HText";
import HText2 from "@/shared/HText2";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import video2 from "@/assets/MANGO-HEDGE-FUND-LP.mp4";
import mangoOnPage from "@/assets/mangoonpage.png";
import MangoPoster from "@/assets/mango-video-poster.jpeg";
import CardsContainer from "./CardsContainer";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Mango = ({ setSelectedPage }: Props) => {
  return (
    <section id="mango" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.MANGO)}>
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
                We're Mango
              </HText>
              <p className="my-5 text-xl">
                 Mango operates in a world where interest rates are zero and even negative! To this end, we have developed a smart investment model that hedges the volatility of currency and commodity pairs, while achieving daily interest rates and neutralizing negative interest rates.
              </p>
              <p className="my-5 text-xl">The "hedging with interest rate differentials" strategy we adopt helps us to be immune to currency exchange rate fluctuations when in fact we are not trading with investors' money but hedging and profiting from the interest rate differentials between currencies.
              </p>
              <p className="text-xl">Mango's strength is in its dynamic investment strategy, which larger financial institutions have difficulty defining.
              Thanks to this strategy we operate without real risk, in smart investments, by neutralizing the negative interest rate and getting only the positive interest rate! It does not matter if the currency pairs go down or up, the interest rate difference between them is set aside for the fund account every night, without any risk while overcoming the frequent market fluctuations.</p>
            </div>

            {/* Image Section */}
            <div className="md:basis-2/5 justify-center md:justify-end">
              <img src={mangoOnPage} alt="Mango" className="mt-40" />
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
          src={video2}
          poster={MangoPoster}
        />
        <HText2>So How does it works?</HText2>
        <p className="my-5 text-xl">
          Rimon hedge funds, due to its dynamic nature and unlike large
          financial institutions that pre-define a long or short investment
          channel, is not exposed to currency exchange movements and in fact the
          "hedging with interest rate differentiation" strategy does not trade
          investors' money but hedges and profits in interest rate
          differentials.
        </p>
        <p className="my-5 text-xl">
          Thus, no matter whether currency pairs rise or fall, the interest rate
          differential between them will be deducted into the fund account every
          night, without any risk of currency market fluctuations.
        </p>
        <HText2>Why isn't everyone do it?</HText2>
        <p className="my-5 text-xl">
          Most market participants do not know how to neutralize the interest
          charge paid every night on one side of the transaction,as opposed to a
          lower receipt of interest on the other side of the transaction.
        </p >
        <p className="my-5 text-xl">
          Rimon hedge funds know how to neutralize the negative interest rate
          through smart deals, and thus receive only the positive interest rate!
        </p>

       <div>
        <div className="text-center py-5"><HText2>Dealing with Risks:</HText2></div>
        <CardsContainer/>
      </div>
      </motion.div>
    </section>
  );
};

export default Mango;
