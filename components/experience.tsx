import { experiences } from '@/models/experiences'

export function Experience() {
  return (
    <section
      id="experience"
      className="flex items-center justify-center flex-col"
    >
      <h2 className="text-white font-black text-center text-5xl lg:text-6xl pt-9">
        EXPERIÊNCIA
      </h2>

      <div className="px-4 max-w-[900px]">
        {experiences.map(
          ({
            slug,
            company,
            role,
            description,
            stack,
            location,
            endDate,
            startDate
          }) => (
            <>
              <div
                className="md:flex md:flex-row md:justify-between pt-5"
                key={slug}
              >
                <div className="flex items-center gap-3">
                  <p className="text-gray-300 ">
                    <span className="font-semibold">{company} /</span> {role}
                  </p>
                </div>
                <p className="text-gray-300 md:pt-0 pt-3">
                  {startDate} - {endDate}, {location}
                </p>
              </div>

              <p className="text-gray-300 pt-5 text-justify">
                {description ?? 'Ainda em construção... 🚧'}
              </p>
              {stack && (
                <div className="flex-col flex sm:flex-row ">
                  {stack.map((item) => (
                    <div
                      className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-full sm:w-auto flex items-center justify-center md:block"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </>
          )
        )}
      </div>
    </section>
  )
}
