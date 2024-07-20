import clsx from "clsx";
import Heading3 from "../ui/headings/Heading3";

const TrialLevelBar = ({ data }: { data: any }) => {
  const createdDate = new Date(Number(data.createdAt));
  const today = new Date();
  const diffMilSecs = today.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffMilSecs / (1000 * 3600 * 24));
  let w = 0;
  if (diffDays > 30) {
    w = 100;
  } else {
    w = (diffDays / 30) * 100;
  }

  console.log(diffDays, " : ", w);

  return (
    <div className="bg-base-white px-5 py-2 flex flex-col gap-6 rounded-md">
      <Heading3 text={data.organisationName} />
      <div>
        <section className="w-full h-2 bg-light-grey rounded">
          <article
            className={clsx(
              `h-full bg-indigo-red relative`,
              w < 100 ? "rounded-s" : "rounded"
            )}
            style={{
              width: `${w}%`,
            }}
          >
            <span
              className={clsx(
                "absolute top-[-18px] text-xs block",
                diffDays < 1
                  ? "right-[-40px]"
                  : diffDays < 2
                  ? "right-[-30px]"
                  : "right-[-15px]"
              )}
            >
              {diffDays >= 30 ? 30 : diffDays} days
            </span>
          </article>
        </section>
      </div>
    </div>
  );
};

export default TrialLevelBar;
