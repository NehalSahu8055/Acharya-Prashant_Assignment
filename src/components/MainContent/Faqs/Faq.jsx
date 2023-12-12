import React from "react";
import useAPI from "../../../hooks/useAPI";
import { useId } from "react";
import Spinner from "../../Spinner/Spinner";
import Error from "../../Errors/Error";

const faqAPI =
  "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english";

export default function Course() {
  const keyFaqs = useId();
  const { data, error } = useAPI(faqAPI);
  const faqInfo = data;

  return (
    <section className="w-full px-4 py-16 md:flex md:px-4 lg:px-20">
      <h3 className="sr-only">Frequently Asked Questions</h3>
      <div className="pb-10 md:w-1/3 md:pb-0">
        <div className="text-gray-title text-lg font-semibold">
          <abbr
            className="font-en no-underline"
            title="Frequently Asked Questions"
          >
            FAQs
          </abbr>
        </div>
        <span className="font-en dynamicHTMLContainer pt-1">
          Can’t find the answer you’re looking for? Reach out to our
          <a
            target="_blank"
            className="px-1 pt-1 text-[#DD6B20]"
            href="/support"
          >
            support
          </a>
          team.
        </span>
      </div>
      <div className="relative grid w-full md:pl-2">
        {error ? (
          <Error type="solid" href="/" label="HomePage" classes={"w-screen"} />
        ) : data ? (
          faqInfo.map((faq, index) => {
            const { question, answer } = faq;
            return (
              <article
                key={keyFaqs + index}
                className="font-en flex  w-full flex-col items-center justify-between md:cursor-pointer md:pl-28 "
              >
                <h3 className="sr-only">Faq {index} </h3>
                <details className="main__faq-block text-gray-subtitle  group w-full border-b border-b-gray-300 text-[0.9rem]">
                  <summary className=" main__question duration-400 pr-[4rem] font-semibold">
                    {question}
                  </summary>
                  <span className=" text-gray-subtitle py-4 pr-5 leading-normal md:pr-8">
                    {answer}
                  </span>
                </details>
              </article>
            );
          })
        ) : (
          <Spinner
            size="base"
            text="Loading FAQs..."
            classes="-ml-24 w-screen"
          />
        )}
      </div>
    </section>
  );
}
