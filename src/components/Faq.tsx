
import * as Accordion from "@radix-ui/react-accordion";


const faqData = [
  {
    Question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    Question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    Question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    Question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    Question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  }
];

const Faq = () => {
  return (
    <div className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6 '>
      <div className="lg:w-2/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className='text-[#EB2891] text-[14px] font-medium lg:text-base'>Frequently Asked Questions</h3>
        <h1 className='py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>Let's clarify some of your questions</h1>
        <p className='text-[#36485C] pb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore </p>
      </div>
      <div className="lg:w-2/3">
      <Accordion.Root type="single" defaultValue="value-1" collapsible className="flex flex-col gap-y-4">
        {/* Map through the faqData */}
        {faqData.map((item, index) => {
          return (
            <div key={index}>
              <Accordion.Item value={`value-${index + 1}`} className="bg-[#E3F1FF] p-[16px] rounded-[8px]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full text-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">{item.Question}</p>
                    <span>
                      <img src="Plus.svg" alt="" className="h-10 w-10 lg:w-6 lg:h-6" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion.Root>
    </div>
    </div>
  );
}

export default Faq;
