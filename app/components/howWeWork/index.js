const HowWeWork = () => {
  const cards = [
    {
      title: "Measure What Matters",
      description:
        "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.",
    },
    {
      title: "Visualize Your Breathing",
      description:
        "Provide clients with revolutionary breathing behavior analysis for lasting results.",
    },
    {
      title: "Customized Interventions",
      description:
        "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.",
    },
    {
      title: "Engage in Practicums",
      description:
        "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training.",
    },
  ];

  return (
    <>
     <div className="frameParent howwework max-lg:frameParentBottom max-w-[1440px] mx-auto border ">
        <div className="from-[#E6F2F2] via-[#E6F2F2] to-transparent opacity-100 md:bg-gradient-to-r md:from-[#E6F2F2] md:via-[#E6F2F2] md:to-transparent">
          <div className="container mx-auto max-lg:py-10 2xl:px-20">
            <div className=" trainer lg:w-2/4 lg:p-12 px-5">
              <h2 className="howTheCapnotrainer lg:text-start text-center">
                How the CapnoTrainer<sup>®</sup> GO Works
              </h2>
              <div className=" flex gap-3 pt-6 max-md:flex-col max-md:items-center max-md:justify-center">
                <div className="flex flex-col gap-3">
                  <div className={`section bg-[#008080]`}>
                    <b className="text-white text-[20px] font-bold font-nunito">
                      {cards[0].title}
                    </b>
                    <div className="text-white text-[16px] font-normal font-nunito">
                      {cards[0].description}
                    </div>
                  </div>
                  <div className={`section bg-[#008080]`}>
                    <b className="text-white text-[20px] font-bold font-nunito ">
                      {cards[1].title}
                    </b>
                    <div className="text-white text-[16px] font-normal font-nunito">
                      {cards[1].description}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <div className={`section bg-[#008080]/80`}>
                      <b className="text-white text-[20px] font-bold font-nunito">
                        {cards[2].title}
                      </b>
                      <div className="text-white text-[16px] font-normal font-nunito">
                        {cards[2].description}
                      </div>
                    </div>
                    <div className={`section bg-[#008080]/80`}>
                      <b className="text-white text-[20px] font-bold font-nunito">
                        {cards[3].title}
                      </b>
                      <div className="text-white text-[16px] font-normal font-nunito">
                        {cards[3].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
