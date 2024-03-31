"use client";

import { Container, CropImage, Disclosure, Timeline } from "@components/ui";
import { StudyConst } from "@shared/constants";
import { SvgIcon } from "@shared/ui";
import { StudyCard } from "./components/card";
import { ExpectationCard } from "./components/expectation-card";

const Study = () => {
  return (
    <div className="bg-white">
      <div>
        <div className="relative h-96">
          <div className="absolute top-44 z-10 flex w-screen flex-col items-center justify-center gap-14">
            <h1 className="text-center text-5xl font-bold text-white">
              Как поступить в школу <br />«{process.env.NEXT_PUBLIC_SCHOOL_NAME}
              »?
            </h1>
            <SvgIcon name="more" height={50} width={35} />
          </div>
          <CropImage
            src="https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album"
            className="h-96 w-full object-cover"
          />
        </div>
      </div>

      <div className="bg-accent mt-8">
        <p className="py-2 text-center text-xl font-bold text-white">
          Количество мест в 2023-2024 учебном году - 100
        </p>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-4xl font-semibold">
              Профиль ученика просветительской программы
            </p>
            <p className="text-2xl">
              Возраст <strong className="text-warn">от 12 до 17 лет</strong>
            </p>
          </div>
          <ExpectationCard iconName="society">
            Готовность к кооперации и командному взаимодействию, коммуникативные
            навыки и критическое мышление, устойчивость, толерантность к
            высокому уровню неопределенности, гибкость, умение формулировать
            идеи и решать проблемы.
          </ExpectationCard>
          <ExpectationCard iconName="chart-line">
            Желание развивать свои навыки в современных творческих и
            технологических направлениях.
          </ExpectationCard>
          <ExpectationCard iconName="lightbulb">
            Активные, эрудированные, хорошо обучаемые, креативные, умные и
            талантливые дети, интересующиеся современными трендами в науке,
            технологиях и искусстве.
          </ExpectationCard>
        </div>
      </Container>

      <div className="bg-accent pb-10">
        <Container className="mx-8">
          <h2 className="py-12 text-center text-3xl font-bold text-white">
            Процесс отбора
          </h2>
          <div className="flex items-start justify-center gap-4">
            {StudyConst.PROC_SELECTION.map((selection, idx) => (
              <StudyCard key={idx} number={idx + 1} {...selection} />
            ))}
          </div>
          <button className="bg-warn mt-4 w-full rounded-3xl py-4 text-base text-white">
            Подать заявку на поступление
          </button>
        </Container>
      </div>

      <div>
        <img
          src="https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album"
          alt="promo"
          className="h-96 w-full bg-center object-cover"
        />
      </div>

      <div className="py-12">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">
            Карта проведения программы
          </h2>
          <Timeline steps={StudyConst.TIMELINE} />
          <div className="bg-accent mx-auto mt-8 w-4/5 rounded-3xl px-14 py-10 text-white">
            <p className="text-center text-2xl font-semibold">
              Три уровня достижений!
            </p>
            <p className="mt-8 text-justify text-base">
              Учеба по каждому направлению делится на уровни, как в компьютерной
              игре. А каждый уровень делится на два интересных этапа. Завершив
              воркшоп, студент возвращается к самостоятельной работе, где
              готовится к следующему проекту
            </p>
          </div>
        </Container>
      </div>

      <div className="py-12">
        <Container>
          {StudyConst.DESCRIPTION_TIMELINE.map((desc, idx) => (
            <Disclosure className="w-full" key={idx}>
              <Disclosure.Button>
                {idx + 1}. {StudyConst.TIMELINE[idx]}
              </Disclosure.Button>
              <Disclosure.Panel>{desc}</Disclosure.Panel>
            </Disclosure>
          ))}
        </Container>
      </div>

      <div className="bg-warn"></div>
    </div>
  );
};

export default Study;
