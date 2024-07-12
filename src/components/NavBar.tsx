import Link from "next/link";

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

      <div className=" h-[45px]  flex gap-[19.14px] items-center justify-center bg-black text-white ">
        <div>
          <Link href="/">
            <img src="/Applelogo.png" alt="Applelogo" />
          </Link>
        </div>

        <Link href="/store/storeid">
          <div>Store</div>
        </Link>

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

        <div className="flex items-center ">
          <img src="/Search.png" alt=" serch logo" />
        </div>
        <div>
          <img src="/Cart.png" alt="cart logo" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
