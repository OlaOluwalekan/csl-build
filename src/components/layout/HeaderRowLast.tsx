import Notifications from "./Notifications";

const HeaderRowLast = () => {
  return (
    <section className="flex items-center gap-2">
      <Notifications />

      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-9 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <p className="font-semibold text-navy-blue text-base hidden laptop:block">
          Adeyinka
        </p>
      </div>
    </section>
  );
};

export default HeaderRowLast;
