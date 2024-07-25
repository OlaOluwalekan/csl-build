import { useState } from "react";
import Heading3 from "../ui/headings/Heading3";
import { OrganizationProps } from "../../types/admin.interface";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa6";
import { formatDate } from "../../utils/helpers";
import OutlineButton from "../ui/buttons/OutlineButton";
import TrialLevelBar from "../home/TrialLevelBar";
import { moduleMap } from "../../data/module";

const Client = ({ data }: { data: OrganizationProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-base-white shadow-md rounded-lg p-3 text-navy-blue">
      <div>
        {/* ACCORDION HEAD */}
        <section
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <section>
            <Heading3
              text={data.organisationName}
              styleClass="w-[100%] overflow-hidden text-ellipsis whitespace-nowrap tablet:w-fit"
            />
          </section>

          <section className="flex gap-4 items-center">
            <div className="flex flex-col gap-2 items-end tablet:flex-row">
              <span className={clsx("text-xs")}>{moduleMap[data.module]}</span>
              <span
                className={clsx(
                  "text-xs",
                  data.isActive ? "text-success" : "text-error"
                )}
              >
                {data.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <button
              className={clsx(
                "text-xs transition-all",
                isOpen && "rotate-[90deg]"
              )}
            >
              <FaChevronRight />
            </button>
          </section>
        </section>

        {isOpen && <div className="divider"></div>}

        {/* ACCORDION BODY */}
        <section
          className={clsx(
            isOpen ? "h-fit" : "h-0",
            "overflow-hidden transition-all duration-1000"
          )}
        >
          <div>
            <Heading3 text="Trial Level" styleClass="mb-4" />
            <TrialLevelBar data={data} showOrgName={false} />
          </div>
          <article className="flex items-center gap-3 my-4">
            <span className="text-sm">Published On:</span>
            <Heading3
              text={
                data.publishedDate
                  ? formatDate(data.publishedDate)
                  : "Not Published"
              }
            />
          </article>
          <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-start tablet:flex-wrap tablet:gap-12">
            <div className="flex flex-col gap-4">
              <article>
                <span className="text-sm block mb-2">Organization:</span>
                <Heading3 text={data.organisationName} />
              </article>
              <article>
                <span className="text-sm block mb-2">Email Address:</span>
                <Heading3 text={data.email} />
              </article>
            </div>

            <div className="flex flex-col gap-4">
              <article>
                <span className="text-sm block mb-2">Phone Number:</span>
                <Heading3 text={data.phoneNumber} />
              </article>
              <article>
                <span className="text-sm block mb-2">Reg No:</span>
                <Heading3 text={data.regNumber as string} />
              </article>
            </div>

            <div className="flex flex-col gap-4">
              <article>
                <span className="text-sm block mb-2">Module:</span>
                <Heading3 text={data.module} />
              </article>
              <article>
                <span className="text-sm block mb-2">Version:</span>
                <Heading3 text={data.isPaid ? "Subscribed" : "Trial"} />
              </article>
            </div>

            <div className="flex flex-col gap-4">
              <article>
                <span className="text-sm block mb-2">Commitment:</span>
                <Heading3 text={data.isPaid ? "Paid" : "Not Paid"} />
              </article>
              <article>
                <OutlineButton
                  type="button"
                  text="Deactivate Account"
                  classStyles="w-fit px-10 text-xs"
                />
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Client;
