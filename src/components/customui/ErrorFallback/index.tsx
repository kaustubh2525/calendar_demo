const ErrorFallback = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 text-white h-full bg-blue-400">
        <span className="text-2xl font-bold">Oops something went wrong</span>
        <button
          onClick={reload}
          className="px-6 py-3 capitalize font-semibold rounded-md bg-white text-blue-500"
        >
          Reload
        </button>
      </div>
    </>
  );
};

export default ErrorFallback;
