import { Container, CropImage } from "@components/ui";
import { SvgIcon } from "@shared/ui";

const SRC =
  "https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album" as const;

export const SchoolSupportPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-96">
        <div className="absolute top-44 z-10 flex w-screen flex-col items-center justify-center gap-20">
          <h1 className="text-5xl font-bold text-white">Поддержка школы</h1>
          <SvgIcon name="more" height={50} width={35} />
        </div>
        <CropImage src={SRC} className="h-96 w-full object-cover" />
      </div>

      <div className="bg-white">
        <div className="py-16">
          <Container>
            <h3 className="text-center text-4xl font-bold">Стать партнером</h3>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-2xl">
                    <strong className="font-bold">
                      {process.env.NEXT_PUBLIC_SCHOOL_NAME}
                    </strong>{" "}
                    — уникальная инновационная школа. Здесь подростки получают
                    навыки в ультра-современном здании, а команда школы создает
                    уникальные программы, используя новейшие технологии.
                  </p>
                </div>
                <div className="flex">
                  <SvgIcon
                    name="red-arrow"
                    prefix="special"
                    width={125}
                    height={22}
                  />
                  <p className="text-xl">
                    <strong className="font-bold">Друзья школы</strong> —
                    представители самых разных целевых групп, вовлеченные в
                    развитие современного образования представители
                    технологических компаний, медиа и дизайна.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#f1f1f1] p-6">
                <p className="text-2xl">
                  <strong className="font-bold">
                    Выступая Партнером школы,
                  </strong>{" "}
                  ваша компания принимает участие в создании новых
                  образовательных проектов и реализации просветительских
                  программ; содействует развитию инклюзивного направления.
                </p>

                <div className="bg-warn mt-6 flex gap-4 rounded-2xl p-4 text-xl text-white">
                  <SvgIcon
                    name="trophy"
                    prefix="special"
                    width={100}
                    height={35}
                    fill="white"
                  />
                  <p>
                    <strong className="font-bold">В статусе Партнера</strong>{" "}
                    школы вы открываете для вашего бизнеса широкие возможности
                    по ассоциации с образовательной институцией, обозначаете
                    свою социальную ответственность и получаете доступ к
                    уникальной аудитории.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="bg-accent">
        <div className="py-16">
          <Container>
            <div className="flex justify-between rounded-2xl bg-white">
              <div className="flex w-full flex-col justify-between py-16 pl-8">
                <h4 className="text-2xl font-bold">
                  Вы можете реализовать самые смелые идеи в современном
                  пространстве школы.
                </h4>
                <p className="w-2/3 text-lg">
                  Позвоните нам, и мы предложим вам эффективные решения.
                </p>
              </div>
              <div className="h-72 w-3/4 rounded-2xl">
                <img
                  src={SRC}
                  alt="idea"
                  className="h-72 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
