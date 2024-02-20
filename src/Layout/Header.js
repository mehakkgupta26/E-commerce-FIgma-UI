const Header = () => {
  return (
    <div className="flex flex-wrap justify-between mt-2 mx-1">
      <div className="md:ml-10 m-auto">
        <img className="md:h-24 md:w-24 h-14 w-14" src="https://i.pinimg.com/1200x/7b/5f/d9/7b5fd9f074cf1ec3709271398dcf653a.jpg">
        </img>
      </div>
      <div className= " md:mr-7 md:flex md:flex-wrap md:justify-center md:items-center">
        <ul className="flex flex-wrap justify-center list-none md:text-md text-sm">
          <li className='p-1 m-1 md:p-2 md:m-3'>CATALOUGE</li>
          <li className='p-1 m-1 md:p-2 md:m-3'>FASHION</li>
          <li className='p-1 m-1 md:p-2 md:m-3'> FAVOURITE</li>
          <li className='p-1 m-1 md:p-2 md:m-3'>LIFESTYLE</li>
          <button className='p-1 m-1 md:p-2 md:m-3 bg-black text-white rounded-md cursor-pointer'>SIGN UP</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;