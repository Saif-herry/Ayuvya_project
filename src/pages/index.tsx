import { Rating, Review } from '@/components';
import { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
export default function Home() {
  const [open, setOpen] = useState<boolean>(true);
  const [curIndex, setCurIndex] = useState<number>(2);
  const [praise, setPraise] = useState<number>(2);
  return (
    <section className="w-full  pt-2 relative">
      <button
        className={`py-3 w-fit bg-green-600 text-white text-xl px-5 ${
          open && 'bg-white'
        }`}
        onClick={() => setOpen(!open)}
      >
        Give Rating
      </button>
      {open && (
        <div className="py-2  w-[99%] absolute bg-white top-0 px-3">
          <IoIosClose size={40} className="" onClick={() => setOpen(!open)} />
          <div className=" flex flex-col gap-4  ">
            <h2 className="text-3xl font-bold">Leave a review</h2>
            <div className="flex flex-col gap-y-5">
              <Review
                title="Safety"
                disc="How safe did you feel with Trausti?"
                rating={5}
              />
              <hr />
              <Review
                title="Communication"
                disc="How was the communication with Trusti?"
                rating={4}
              />
              <hr />
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="heading"> Would you recommend Trausti?</h2>
                <p>Your opinion won{`'`}t be posted publicly</p>
                <div className="flex  gap-14">
                  {ThumbData?.map((item) => (
                    <div
                      onClick={() => setCurIndex(item?.id)}
                      key={item?.id}
                      className="flex cursor-pointer  gap-3 items-center"
                    >
                      <span
                        className={` ${
                          curIndex === item?.id && item?.text === 'Yes'
                            ? 'text-green-600'
                            : curIndex === item?.id && item?.text === 'No'
                            ? 'text-red-600'
                            : 'text-gray-200'
                        }`}
                      >
                        {item?.icon}
                      </span>
                      <span
                        className={` text-lg ${
                          curIndex === item?.id && item?.text === 'Yes'
                            ? 'text-green-600'
                            : curIndex === item?.id && item?.text === 'No'
                            ? 'text-red-600'
                            : ''
                        }`}
                      >
                        {item?.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-y-2">
                <h2 className="heading">Praise</h2>
                <p>what traits best describe Trusti?</p>
                <div className="flex gap-5 pt-3 pb-2">
                  {praiseData?.map((item) => (
                    <div
                      key={item?.id}
                      onClick={() => setPraise(item?.id)}
                      className={` cursor-pointer py-2 px-5 rounded-3xl ${
                        praise === item?.id
                          ? 'text-white bg-green-600'
                          : 'bg-gray-400/20'
                      }`}
                    >
                      <p>{item?.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="bg-green-600 text-white py-3 rounded-xl text-xl">
              Add Review
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const ThumbData = [
  { id: 1, icon: <FaThumbsDown size={35} />, text: 'No' },
  { id: 2, icon: <FaThumbsUp size={35} />, text: 'Yes' }
];

const praiseData = [
  { id: 1, title: 'Adventures' },
  { id: 2, title: 'Cleaver' },
  { id: 3, title: 'Good' }
];
