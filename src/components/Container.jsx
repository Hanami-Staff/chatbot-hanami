import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <main className="pl-[300px] py-4  bg-black h-screen text-white ">
      <div className="mx-4 bg-[#222222] rounded-lg h-full bg-late-500 relative overflow-hidden border border-white/15">
        <div className="size-[1528px] bg-gradient-to-tr from-[#FA6CD2CC] to-[#222222] filter blur-3xl  rounded-full absolute bottom-0 -translate-x-1/2 translate-y-1/2" />
        {children}
      </div>
    </main>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Container;
