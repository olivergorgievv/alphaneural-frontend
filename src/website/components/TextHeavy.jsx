/* eslint-disable react/prop-types */
import React from "react";

export default function TextHeavy({ sections }) {
  const splitParagraph = (text) => {
    const words = text.split(" ");
    const chunks = [];

    for (let i = 0; i < words.length; i += 40) {
      chunks.push(words.slice(i, i + 40).join(" "));
    }

    return chunks;
  };

  return (
    <div className="container mx-auto px-4 pt-32 pb-18 max-w-screen-xl relative z-10">
      <div className="flex flex-col items-center mb-[100px] md:flex-row">
        <div className="w-full mb-8 md:mb-0">
          <div className="max-w-2xl md:ml-0">
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <div className={section.space}>
                  <h1 className="text-2xl lg:text-4xl font-bold mb-6">
                    {section.title}
                  </h1>
                  {splitParagraph(section.paragraph).map(
                    (chunk, chunkIndex) => (
                      <p
                        key={chunkIndex}
                        className="text-base text-description-gray mb-4"
                      >
                        {chunk}
                      </p>
                    )
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
