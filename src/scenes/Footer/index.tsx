import Logo from "@/assets/rimon-transparent.png";


const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-200">
      <div className="flex flex-col mx-auto w-5/6 gap-16 md:flex-row">
        <div className="md:basis-1/2">
            <img
                className="object-cover h-full"
                alt="logo"
                src={Logo}
                style={{ maxHeight: "var(--navbar-height)" }}
              />
          <p className="my-5">
            Rimon Hedge Fund LTD. All Rights Reserved.©
          </p>
        </div>
        <div className="w-full"> {/* New container for the full width paragraph */}
          <p>
            Offering and at the sole and absolute discretion of the partner. Rights in partnerships are not offered and will not be offered to the public. The investment in the partnerships is in accordance with the terms of the partnership agreement to be signed between the general partner and the investor, and includes risks as specified in the partnerships agreements, as well as additional termination deriving from exposure to securities. The foregoing does not constitute investment advice / marketing and / or substitute for investment advice / marketing and / or tax advice by a person authorized to do so, taking into account the data and the special needs of each person. Publication of this information does not constitute an offer to the public to invest in the partnership. All information and content on this page is provided "AS IS" WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, EXPRESS OR IMPLIED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
