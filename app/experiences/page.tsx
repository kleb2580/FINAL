import Image from "next/image";
//dfdfsfdsfs
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
            <Image
              src="/bear.JPG"
              alt="A bear representing creativity"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/violin.JPG"
              alt="A violin representing musical creativity"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 13–16</time>
          <h3 className="text-lg font-semibold text-mint">Exploration of Coding</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            Coding became a natural extension of my curiosity and desire to create. I began making fun low-level games which helped me gain an appreciation for the intersection of creativity and engineering.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 16–Ongoing</time>
          <h3 className="text-lg font-semibold text-mint">Integrating Creativity into Engineering Design</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            I began to consciously recognize my desire to combine my love for creative expression with engineering concepts through code. With this, I undertook creative coding projects, visually expressing various computer science and mathematical concepts. My introduction to engineering design was primarily in UI and web design, which I found particularly fulfilling because it combines functionality with visual expression.
          </p>
          <p className="text-base font-normal text-gray-300 dark:text-gray-400">
            For example, in the aforementioned design report for a bubble tea cup, my creative background allowed me to explore unconventional solutions that went beyond the status quo.
          </p>
        </li>
      </ol>
      <p className="text-sm sm:text-base leading-relaxed mt-4">
        These experiences have taught me to view engineering design as an inherently creative discipline. While it is often seen as objective and structured, my background helps me approach design challenges with out-of-the-box thinking and innovative ideas. For example, in the aforementioned design report for a bubble tea cup, my creative background allowed me to explore unconventional solutions that went beyond the status quo.
      </p>
    </div>
  );
}
