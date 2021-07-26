import { useState } from "react";
import up from "../public/arrow.png";
import Image from "next/image";

export default function List({ instance }) {
  const [initDrop, setDrop] = useState(false);

  const clickHandler = () => {
    setDrop(true);
  };

  const upHandler = () => {
    setDrop(false);
  };
  return (
    <div className="md:container md:mx-auto flex justify-center">
      <section className="p-5 w-full md:w-1/2 block shadow">
        <p
          className="text-black text-3xl font-bold cursor-pointer hover:text-blue-400"
          onClick={clickHandler}
        >
          {instance.title}
        </p>
        {initDrop && (
          <div>
            <Image
              src={up}
              alt="up"
              width={15}
              height={15}
              onClick={upHandler}
              className="cursor-pointer"
            />
            {instance.sub.map((subject) => {
              return (
                <div key={subject}>
                  <p>{subject}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
