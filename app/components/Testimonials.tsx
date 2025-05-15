export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-dark-high px-6 py-24 sm:py-32 lg:px-8 rounded-lg">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl/9">
            <p>
              “Mode has completely transformed how our team tracks and resolves
              issues. The intuitive interface and powerful features make
              collaboration seamless, and we've seen a significant boost in
              productivity since adopting it.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900  dark:text-gray-100">
                Judith Black
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900 dark:fill-gray-100"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600 dark:text-gray-400">
                CEO of Workcation
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
