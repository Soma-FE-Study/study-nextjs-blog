type PageDescriptionProps = {
  title: string;
  description: string;
};

const PageDescription = ({ title, description }: PageDescriptionProps) => {
  return (
    <div>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {title}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default PageDescription;
