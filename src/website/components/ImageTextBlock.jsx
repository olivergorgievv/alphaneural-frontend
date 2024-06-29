/* eslint-disable react/prop-types */
export default function ImageTextBlock({
  direction = "right",
  image,
  title,
  description,
}) {
  const isRightImage = direction === "right";

  return (
    <section>
      <div className="gap-8 pt-10 sm:pt-0 items-center px-4 mx-auto max-w-screen-xl xl:gap-20 md:grid md:grid-cols-2 lg:px-6">
        {!isRightImage && <img src={image} alt={title} className="w-full" />}
        <div className={`mt-4 md:mt-0 ${isRightImage ? "order-first" : ""}`}>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            {title}
          </h2>
          <p className="mb-6 font-normal md:text-base text-description-gray">
            {description}
          </p>
        </div>
        {isRightImage && <img src={image} alt={title} className="w-full" />}
      </div>
    </section>
  );
}
