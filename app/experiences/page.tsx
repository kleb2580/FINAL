export default function Experiences() {
  return (
    <div className="p-8 sm:p-20 min-h-screen bg-darkPurple text-offWhite">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-mint">Influential Experiences</h1>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        My journey into engineering design has been shaped by a combination of creative pursuits and technical interests:
      </p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 1–12</time>
          <h3 className="text-lg font-semibold text-mint">Creative Foundations</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            As a child, I immersed myself in creative activities such as playing the violin and drawing. These experiences nurtured my creative thinking and appreciation for aesthetics.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="image-container">
              <img
                src="/bear.JPG"
                alt="A bear representing creativity"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Watercolor painting</p>
            </div>
            <div className="image-container">
              <img
                src="/violin.JPG"
                alt="A violin representing musical creativity"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Me playing the violin</p>
            </div>
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 13–16</time>
          <h3 className="text-lg font-semibold text-mint">Exploration of Coding</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            Coding became a natural extension of my curiosity and desire to create. I began making fun low-level games which helped me gain an appreciation for the intersection of creativity and engineering.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="image-container">
              <img
                src="/chess.png"
                alt="A 3D version of Star Wars Holochess"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Star Wars Chess (2022)</p>
            </div>
            <div className="image-container">
              <img
                src="/cube.gif"
                alt="A simple 2D implementation of a Rubik&apos;s cube"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Rubik&apos;s cube (2022).</p>
            </div>
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 16–Ongoing</time>
          <h3 className="text-lg font-semibold text-mint">Integrating Creativity into Engineering Design</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            I began to consciously recognize my desire to combine my love for creative expression with engineering concepts through code. With this, I undertook creative coding projects, visually expressing various computer science and mathematical concepts.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="image-container">
              <img
                src="/perlin.png"
                alt="An art piece I created using Perlin noise and flow fields"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">An art piece I created, with computer science concepts such as Perlin noise and flow fields (2024).</p>
            </div>
            <div className="image-container">
              <img
                src="/WEEK3.jpg"
                alt="An art piece I created using Delaunay triangulation"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">An art piece I created using the computer science concept of Delaunay triangulation.</p>
            </div>
          </div>
          <p className="text-base font-normal text-gray-300 dark:text-gray-400 mt-4">
            My introduction to engineering design was primarily in UI and web design, which I found particularly fulfilling because it combines functionality with visual expression.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="image-container-lg">
              <img
                src="/dad.png"
                alt="A website I created for my dad for Fathers Day"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Fathers Day Website (2022)</p>
            </div>
            <div className="image-container-lg">
              <img
                src="/pomoe.png"
                alt="A UI I created for a Pomodoro timer web app"
                className="rounded-lg object-cover transform scale-60"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">UI for timer app (2022)</p>
            </div>
          </div>
        </li>
      </ol>
      <p className="text-sm sm:text-base leading-relaxed mt-4">
        These experiences have taught me to view engineering design as an inherently creative discipline. While it is often seen as objective and structured, my background helps me approach design challenges with out-of-the-box thinking and innovative ideas. For example, in the design report, my creative background allowed me to explore unconventional solutions that went beyond the status quo.
      </p>
      <div className="flex gap-4 mt-4">
        <div className="image-container">
          <img
            src="/tea.png"
            alt="A design that breaks the status quo of bubble tea cups"
            className="rounded-lg object-cover transform scale-60"
          />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Unique design, inspired by a pez dispenser.</p>
        </div>
      </div>
    </div>
  );
} 
