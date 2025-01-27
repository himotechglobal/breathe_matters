import React from "react";
import knosis from "../../assets/KNOSIS.png";
import cruz from "../../assets/DrCruz.png";
import airway from "../../assets/Airway1.png";
import conspire from "../../assets/conspirelogo.png";
import Image from "next/image";

const Collaborators = () => {
  return (
    <div className="lg:px-40 px-20 flex max-lg:grid max-lg:grid-cols-2 items-center lg:justify-between my-10">
      <Image src={knosis} alt="...knosis" />
      <Image src={cruz} alt="...cruz" />
      <Image src={airway} alt="...airway" />
      <Image src={conspire} alt="...conspire" />
    </div>
  );
};

export default Collaborators;
