import { FaqRequestInterface } from "@/interfaces/pages/faq";

export default function Faqs(props: { res: FaqRequestInterface }) {
  return (
    <ul className="space-y-6">
      {props.res.data.map((item, index) => (
        <li key={`faq-item${index}`}>
          <div className="group">
            <details
              className="group border rounded-md p-4 transition-colors 
                 group-[.group]:open:border-primary-main border-gray-300"
            >
              <summary className="font-medium text-xl cursor-pointer group-open:text-primary-main max-md:text-lg">
                {item.question}
              </summary>
              <div className="mt-2 text-secondary-main text-lg max-md:text-base">
                {item.answer}
              </div>
            </details>
          </div>
        </li>
      ))}
    </ul>
  );
}
