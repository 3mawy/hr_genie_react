const Loader = () => {
  return (
      <div className={`absolute inset-0 flex justify-center`}>
          <div className="flex items-center justify-center h-full">
              <div
                  className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
          </div>
      </div>
  );
};

export default Loader;
