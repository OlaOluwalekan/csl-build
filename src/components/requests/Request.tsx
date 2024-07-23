import { FaChevronRight } from "react-icons/fa6";
import { OrganizationProps } from "../../types/admin.interface";
import Heading3 from "../ui/headings/Heading3";
import clsx from "clsx";
import { formatDate } from "../../utils/helpers";
import { FormEvent, useState } from "react";
import SmallRoundedButton from "../ui/buttons/SmallRoundedButton";
import {
  generateRandomPassword,
  sendAccountEmail,
} from "../../features/requestsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import OverlayLoading from "../loading/OverlayLoading";

const Request = ({ data }: { data: OrganizationProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mailResponse, setMailResponse] = useState({
    success: false,
    message: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const { fetchingPassword, sendingAccountEmail } = useSelector(
    (store: RootState) => store.requests
  );

  const date = formatDate(data.createdAt);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const generatePassword = () => {
    dispatch(generateRandomPassword()).then((res) => {
      if (res.payload.success) {
        setPassword(res.payload.data.tempPass);
      } else {
        setError(res.payload.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
      // console.log(res);
    });
    // console.log("HELLO PASSWORD");
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    email: string,
    organisationName: string
  ) => {
    e.preventDefault();
    dispatch(
      sendAccountEmail({ email, organisationName, tempPass: password })
    ).then((res) => {
      setMailResponse({
        success: res.payload.success,
        message: res.payload.message,
      });
      setTimeout(() => {
        setMailResponse({ success: false, message: "" });
      }, 3000);
    });
  };

  // console.log(mailResponse);

  return (
    <div className="bg-base-white shadow-md rounded-lg p-3">
      <div>
        {/* ACCORDION HEAD */}
        <section
          className="flex justify-between items-center"
          onClick={handleClick}
        >
          <section>
            <Heading3
              text={data.organisationName}
              styleClass="w-[70%] overflow-hidden text-ellipsis whitespace-nowrap tablet:w-fit"
            />
            <span className="text-xs block w-[70%] overflow-hidden text-ellipsis whitespace-nowrap tablet:w-fit">
              Request for {data.module.toUpperCase()} module
            </span>
          </section>

          <section className="flex gap-2 items-center">
            <div className="flex flex-col gap-2 items-end tablet:flex-row">
              <span
                className={clsx(
                  "text-xs",
                  data.status === "requested" ? "text-success" : "text-error"
                )}
              >
                {data.status}
              </span>
              <span className="text-xs">{date}</span>
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
          <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between">
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
            <div>
              <article className="w-full text-center border-[1px] border-indigo-red rounded py-3 flex justify-center items-center">
                <p
                  className={clsx(
                    "w-[60%] text-xs",
                    error ? "text-error" : "text-light-grey"
                  )}
                >
                  {data.tempPassword
                    ? data.tempPassword
                    : error
                    ? error
                    : password
                    ? password
                    : "Generate password for your client to login"}
                </p>
              </article>
              <SmallRoundedButton
                text="Generate Password"
                type="button"
                onClick={generatePassword}
              />
            </div>
          </div>
          <div className="divider"></div>
          <form
            className="flex flex-col items-center gap-2"
            onSubmit={(e) => handleSubmit(e, data.email, data.organisationName)}
          >
            <input
              type="hidden"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-center text-light-grey">
              When you verify account, you give user full access to use their
              account.
            </p>
            <article
              className={clsx(
                "w-fit text-center border-[1px] rounded py-3 px-2 flex justify-center items-center",
                mailResponse.success ? "border-success" : "border-error"
              )}
            >
              <p
                className={clsx(
                  "text-xs",
                  mailResponse.success ? "text-success" : "text-error"
                )}
              >
                {mailResponse.message
                  ? mailResponse.message
                  : "Generate password first before you can verify account"}
              </p>
            </article>
            <SmallRoundedButton
              text="Verify Account"
              type="submit"
              disabled={!password}
              w="200px"
            />
          </form>
        </section>
      </div>
      {fetchingPassword && (
        <OverlayLoading text="Fetching Password! Please wait..." />
      )}
      {sendingAccountEmail && (
        <OverlayLoading
          text={`Sending Email to ${data.organisationName}! Please wait...`}
        />
      )}
    </div>
  );
};

export default Request;
