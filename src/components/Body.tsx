import { phones } from "@/Data/phoneData";
import { product } from "@/Data/productData";
import { Dataproduct } from "@/Data/productdata2";
import { Dataproduct3 } from "@/Data/productdata3";

const Body = () => {
  return (
    <>
      <div>
        {phones.map((data, index) => (
          <div
            className="h-screen w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="  absolute flex flex-col  items-center justify-center w-full  text-white  mt-20 ">
              <div>{data.title}</div>
              <div>{data.description}</div>
              <div>
                <div className="flex gap-4   ">
                  <button className="bg-blue-700 rounded-[10px]">
                    {data.button1}
                  </button>
                  <button className="border-dashed ">{data.button2}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 h-full w-full ">
        {product.map((item) => (
          <>
            <div>
              <div className="absolute ml-[250px]  text-white pt-[420px]">
                <div>{item.title}</div>
                <div>{item.description}</div>
              </div>
              <div
                className="h-[580px] w-[670px] bg-cover bg-center "
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          </>
        ))}
      </div>

      <div className="flex gap-2  h-full mt-2 w-full ">
        {Dataproduct.map((item1) => (
          <>
            <div>
              <div className="absolute ml-[250px]  text-white pt-[420px]">
                <div>{item1.title}</div>
                <div>{item1.description}</div>
              </div>
              <div
                className="h-[580px] w-[670px] bg-cover bg-center "
                style={{ backgroundImage: `url(${item1.image})` }}
              ></div>
            </div>
          </>
        ))}
      </div>

      <div className="flex gap-2  h-full mt-2 w-full ">
        {Dataproduct3.map((item3) => (
          <>
            <div>
              <div className="absolute ml-[250px]  text-black pt-[420px]">
                <div>{item3.title}</div>
                <div>{item3.description}</div>
              </div>
              <div
                className="h-[580px] w-[670px] bg-cover bg-center "
                style={{ backgroundImage: `url(${item3.image})` }}
              ></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Body;
