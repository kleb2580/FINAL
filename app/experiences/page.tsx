export default function Experiences() {
  return (
    <div className="p-8 sm:p-20 min-h-screen bg-darkPurple text-offWhite">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-mint">Influential Experiences</h1>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        My journey into engineering design has been shaped by a combination of creative pursuits and technical interests:
      </p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {/* Creative Foundations Section */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 1–12</time>
          <h3 className="text-lg font-semibold text-mint">Creative Foundations</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            As a child, I immersed myself in creative activities such as playing the violin and drawing. These experiences nurtured my creative thinking and appreciation for aesthetics.
          </p>
          <div className="flex gap-8 justify-center items-start">
            <div className="flex flex-col items-center">
              <img
                src="/bear.JPG"
                alt="A bear representing creativity"
                className="rounded-lg object-cover w-[50%]"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">Watercolor painting</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/violin.JPG"
                alt="A violin representing musical creativity"
                className="rounded-lg object-cover w-[50%]"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">Me playing the violin</p>
            </div>
          </div>
        </li>

        {/* Creative Coding Section */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 16–Ongoing</time>
          <h3 className="text-lg font-semibold text-mint">Creative Coding and Design</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            I began to consciously recognize my desire to combine my love for creative expression with engineering concepts through code. With this, I undertook creative coding projects, visually expressing various computer science and mathematical concepts.
          </p>
          <div className="flex gap-8 justify-center items-start">
            <div className="flex flex-col items-center">
              <img
                src="/perlin.png"
                alt="An art piece I created using Perlin noise and flow fields"
                className="rounded-lg object-cover w-[40%]"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                An art piece I created, with computer science concepts such as Perlin noise and flow fields (2024).
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/WEEK3.jpg"
                alt="An art piece I created using Delaunay triangulation"
                className="rounded-lg object-cover w-[40%]"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                An art piece I created using the computer science concept of Delaunay triangulation.
              </p>
            </div>
          </div>
        </li>
      </ol>

      {/* Bubble Tea Design Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src="/tea.png"
          alt="A design that breaks the status quo of bubble tea cups"
          className="rounded-lg object-cover w-[60%]"
        />
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
          Unique design, inspired by a pez dispenser.
        </p>
      </div>
    </div>
  );
}
