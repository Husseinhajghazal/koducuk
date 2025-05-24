const Container = ({ children }) => {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
