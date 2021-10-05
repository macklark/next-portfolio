import { useState } from "react";

export default function List({ instance }) {
  const [initDrop, setDrop] = useState(false);

  const clickHandler = () => {
    setDrop(!initDrop);
  };

  const upHandler = () => {
    setDrop(false);
  };
  return (
    <div className="md:container md:mx-auto flex justify-center m-2 md:m-0">
      <section className="p-5 w-full md:w-1/2 block shadow dark:border-2 dark:border-white mb-5">
        <p
          className="text-black text-3xl font-bold cursor-pointer hover:text-blue-400 dark:text-white dark:hover:text-blue-400"
          onClick={clickHandler}
        >
          {instance.title}
        </p>
        {initDrop && (
          <div className="mt-5">
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
