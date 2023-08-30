import preLoader from "@/assets/preloader.gif";

const FallBackUI = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center w-full bg-zinc-100/70">
      <img src={preLoader} />
    </div>
  );
};

export default FallBackUI;
