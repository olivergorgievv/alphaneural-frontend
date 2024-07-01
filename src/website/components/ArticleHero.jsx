/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
export default function ArticleHero(props) {
  return (
    <header className="py-20">
      <div className="px-4 mx-auto w-full max-w-screen-xl text-center">
        <span className="block mb-4 font-semibold">
          Published{" "}
          <time
            className="font-normal text-gray-500"
            pubdate
            datetime="2022-03-08"
            title="August 3rd, 2022"
          >
            {props.date}
          </time>
        </span>
        <h1 className="mx-auto mb-4 max-w-3xl text-2xl font-extrabold leading-none sm:text-3xl lg:text-4xl">
          {props.title}
        </h1>
        <p className="text-lg font-normal text-description-gray text-center max-w-3xl mx-auto">
          {props.desc}
        </p>
        <div className="mt-20 relative w-full aspect-w-16 aspect-h-7 ">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            src={props.image}
          />
        </div>
      </div>
    </header>
  );
}
