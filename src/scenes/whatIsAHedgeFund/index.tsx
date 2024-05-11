import HText from "@/shared/HText";
import HText2 from "@/shared/HText2";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import fundDiagram from "@/assets/fundDiagramTrans.png";
import Htext3 from "@/shared/Htext3";
import Personal from "@/assets/personal (2).png";
import Htext3Pink from "@/shared/Htext3Pink";
import advisor from "@/assets/advisor.png";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const WhatIsAHedgeFund = ({ setSelectedPage }: Props) => {
  return (
    <section id="whatisahedgefund?" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          console.log("entering what is a hedge fund");
          return setSelectedPage(SelectedPage.WhatIsAHedgeFund);
        }}
      >
        {/* HEADER */}
        <div className="md:items-start md:justify-between gap-10">
          {/* Text Section */}
          <div className="md:basis-5/5">
            <HText>What is a Hedge Fund?</HText>
            <p className="my-5 text-xl">
              A hedge fund is a fund that makes use of financial instruments
              allowing to generate high returns in any market situation. Most
              transactions are executed while hedging the transaction at a
              certain level, in order to minimize the inherent risk.
            </p>
            <p className="my-8 text-xl">
              In the current financial climate, which includes zero interest on
              savings and high managements fees, hedge funds are an alternative
              to mutual funds, investment houses, banks and they attract
              experienced investors searching attractive returns. Unlike mutual
              funds, which can only generate returns on a rising market (long),
              a hedge fund makes transactions in both directions (long and/or
              short) and therefore is able to generate returns when the market
              rises and when the market falls
            </p>
          </div>
          {/* Image Section */}
          <HText2>The Fund’s Structure</HText2>
          <div className=" mb-8 mx-0 flex-col flex md:flex-col">
            <p className="my-5  py-5 text-xl pr-8">
              The legal structure of a hedge fund is a limited partnership which
              is comprised of up to 50 investors. The investors in the fund are
              in fact the partners. The general partner in HETMED Fund is Rimon
              Hedge Funds Ltd., which is responsible for implementing the
              investment strategy. In most hedge funds, the partners pay the
              general partner management fees of about 2% and success fees of
              20%. The general partner in HETMED Fund is rewarded only by
              success fees based on real profits generated for all partners in
              the fund (the investors), which ensures that the interests of the
              fund manager and its investors are the identical.
            </p>
            <img src={fundDiagram} alt="FundDigram" className="md:w-1/2" />
          </div>

          <Htext3>
            In order to protect all partners, the Fund employs two important
            gatekeepers:
          </Htext3>
          <div className="flex flex-col md:flex-row gap-8 my-10">
            <div className="mt-3 py-3 rounded-md border-2 border-gray-100 px-5 py-16">
              <img src={advisor} alt="Personal" className="w-24 my-5" />
              <Htext3Pink>
                Trustee attorney.{" "}
                <span className="text-gray-500 text-xl">
                  Attorney is the only authorized signatory in the fund's
                  investors account. The task of the trustee is to ensure that
                  investors' funds are directed solely for investment purposes,
                  without the ability to use or transfer the funds for other
                  purposes.
                </span>
              </Htext3Pink>
            </div>
            <div className="mt-3 py-3 rounded-md border-2 border-gray-100 px-5 py-16 ">
              <img src={Personal} alt="Personal" className="w-24 my-5" />
              <Htext3Pink>
                CPA.{" "}
                <span className="text-gray-500 text-xl">
                  Responsible for profit and loss calculations, reports to
                  investors, and distribution of profits to partners. The CPA is
                  certified by the tax authorities as a tax trustee and is able
                  to perform tax calculations for the fund's partners in order
                  to prevent overpayment.
                </span>
              </Htext3Pink>
            </div>
          </div>

          <HText2>The Bottom Line</HText2>
          <p className="text-xl py-5 py-8">
            "Since the commencement of its operations, HETMED Hedge Fund has
            achieved double-digit annual returns that have beaten the market,
            all the while maintaining low volatility, a defined and guaranteed
            risk level, and liquidity. "
          </p>
          <p className="text-xl py-5 py-8 font-bold border-t border-gray-300">
            We invite you to join our family of investors here in HETMED Hedge
            from Rimon Hedge Funds Ltd. and enjoy surprising returns and with
            zero management fees.
          </p>
          <br />
          <ActionButton setSelectedPage={setSelectedPage}>
            let's schedule a Meeting
          </ActionButton>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIsAHedgeFund;
