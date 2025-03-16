import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useGameScreenshots, { GamePkProps } from "./useGameScreenshots";
import { RxDotsHorizontal } from "react-icons/rx";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const GamePageImages = (gamePk: GamePkProps) => {
  if (!gamePk) return;
  const { data: images, isLoading, error } = useGameScreenshots(gamePk);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleImages = (imageId: number) => {
    setActiveIndex(imageId);
  };

  if (!isLoading) console.log(images?.results[0].image);
  return (
    <div className=" w-full">
      {error && <p>Error - unable to download images.</p>}
      <Dialog>
        <DialogTrigger asChild>
          <img
            onClick={() => handleImages(0)}
            src={images?.results[0].image}
            alt="screenshot from game"
            className="rounded-md shadow-md hover:cursor-pointer"
          />
        </DialogTrigger>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 py-2 w-full h-full">
          {images?.results.slice(1, 4).map((item, index) => (
            <DialogTrigger asChild key={item.id}>
              <img
                onClick={() => handleImages(index + 1)}
                src={item.image}
                className=" rounded-md shadow-md hover:cursor-pointer min-h-full object-cover bg-neutral-600"
                alt="screenshot from game"
              />
            </DialogTrigger>
          ))}
          <DialogTrigger asChild>
            <div
              onClick={() => handleImages(0)}
              style={{
                backgroundImage: `url(${
                  images?.results[images?.results.length - 1].image
                })`,
              }}
              className=" w-full h-full rounded-md bg-center bg-neutral-600 bg-cover text-neutral-200 shadow-md overflow-hidden hover:cursor-pointer"
            >
              <div className="w-full h-full bg-neutral-700/80 flex flex-col items-center justify-center">
                <RxDotsHorizontal className="text-3xl" />
                <p>View all</p>
              </div>
            </div>
          </DialogTrigger>
        </div>
        <DialogContent className=" bg-neutral-900/50    min-w-[100vw] h-[100vh]    flex  items-center justify-center ">
          <Carousel
            className="max-w-[75vw] md:max-w-[85vw] "
            opts={{ startIndex: activeIndex }}
          >
            <CarouselContent>
              {images?.results.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <img
                    src={item.image}
                    alt="game screenshot"
                    className="w-full max-h-[75%] object-center md:max-h-[80%]"
                  />
                  <p className="text-sm text-neutral-50 dark:text-enutral-50">
                    Image {index + 1} of {images?.results.length}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GamePageImages;
