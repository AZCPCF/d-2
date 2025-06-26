import { HomePageRequestInterface } from "@/app/page";
import NextImage from "@/components/ui/image";

export default function HomeStories(
  props: Pick<HomePageRequestInterface, "stories">
) {
  return (
    <section className="w-full flex gap-10 p-10 overflow-auto scrollbar-none">
      {props.stories.map((story, index) => (
        <div
          className="max-w-[82px] min-w-[82px] text-center cursor-pointer"
          key={`home-stroy-${index}`}
        >
          <div className="rounded-full p-1 bg-gradient-to-r from-[#833ab4] via-[#e1306c] to-[#f77737]">
            <NextImage
              alt={`home-story-${index + 1}`}
              className="w-[74px] min-w-[74px] rounded-full aspect-square max-lg:min-w-[54px]"
              {...story.image_1}
            />
          </div>
          <p className="text-gray-400 w-24 text-base">{story.title}</p>
        </div>
      ))}
    </section>
  );
}
