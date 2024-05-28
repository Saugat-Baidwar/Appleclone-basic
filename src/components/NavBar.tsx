const NavBar = () => {
  return (
    <>
      {/* <div>
        <ul className="flex gap-2">
          <li>
            <img src="/Applelogo.png" alt="applelogo" />
          </li>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Supports </li>
          <li></li>
        </ul>
      </div> */}

      <div className="flex gap-[19.45px] items-center justify-center bg-black text-white mx-[462px]">
        <div>
          <img src="/Applelogo.png" alt="Applelogo" />
        </div>
        <div>Store</div>
        <div>Mac</div>
        <div>iPad</div>
        <div>iPhone</div>
        <div>Watch</div>
        <div>Vision</div>
        <div>AirPods</div>
        <div>TV&Home</div>
        <div>Entertainment</div>
        <div>Accessories</div>
        <div>Supports</div>
        <div>
          <img src="/search.png" alt=" serch logo" />
        </div>
        <div>
          <img src="/cart.png" alt="cart logo" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
