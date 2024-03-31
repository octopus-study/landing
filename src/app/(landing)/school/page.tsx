import { Container } from "@components/ui";
import { SvgIcon } from "@shared/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Учиться у нас ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
};

const SRC =
  "https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album" as const;

const School = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${SRC})` }}
        className="relative h-[748px] bg-cover bg-center"
      >
        <div className="absolute bottom-0 flex w-3/4 bg-black text-white">
          <div className="w-full flex-1" />
          <Container>
            <div className="flex">
              <div className="flex-1 py-8">
                <p className="text-lg">
                  <strong>{process.env.NEXT_PUBLIC_SCHOOL_NAME}</strong> — это
                  международная школа креативных технологий, где подростки 12-18
                  лет раскрывают свой потенциал и становятся лидерами
                  завтрашнего дня.
                </p>
                <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                  показать видео
                </button>
              </div>
              <div className="flex">
                <div>
                  <div className="bg-warn px-6 py-2">
                    <div className="flex items-center">
                      <SvgIcon name="more" width={35} height={40} />
                      <h4 className="text-4xl font-bold">17</h4>
                    </div>
                    <p className="text-base font-medium">
                      Школ {process.env.NEXT_PUBLIC_SCHOOL_NAME} по всему миру
                    </p>
                  </div>
                  <div className="bg-gray-500 px-6 py-2">
                    <div className="flex items-center ">
                      <SvgIcon name="more" width={35} height={40} />
                      <h4 className="text-4xl font-bold">60000+</h4>
                    </div>
                    <p className="text-base font-medium">
                      Студентов по всему миру
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center bg-green-600">
                  <div className="flex items-center">
                    <SvgIcon name="more" width={35} height={40} />
                    <h4>700+</h4>
                  </div>
                  <p className="text-base font-medium">
                    Лабораторий под руководством профессионалов
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default School;
