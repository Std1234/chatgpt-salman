import { c as create_ssr_component, e as escape, v as validate_component, b as each } from "../../../chunks/index2.js";
import { P as Page_container } from "../../../chunks/page-container.js";
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question = "" } = $$props;
  let { answer = "" } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  return `<div class="pt-6"><dt>
    <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false"><span class="text-base font-semibold leading-7">${escape(question)}</span>
      <span class="ml-6 flex h-7 items-center">${`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>`}</span></button></dt>

  
  ${``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqs = [
    // What is AI Chat Bestie?
    {
      question: "What is AI Chat Bestie?",
      answer: "AI Chat Bestie is an enhanced UI over the ChatGPT API. It builds on top of ChatGPT by providing a more customizable experience, faster response times, and guaranteed availability of your chat history."
    },
    // Is the app free?
    {
      question: "Is the app free?",
      answer: "Yes, the app is free to use. It requires you to bring your own OpenAI API key but the base features are free."
    },
    // How do I get a OpenAI API key?
    {
      question: "How do I get a OpenAI API key?",
      answer: "You can get a OpenAI API key by creating an OpenAI account and registering an app. We made a short tutorial at https://youtu.be/lnQsO-2MwXM."
    },
    // Do I need to pay for a ChatGPT API Key?
    {
      question: "Do I need to pay for a ChatGPT API Key?",
      answer: "Creating both an OpenAI account and API key are free, using the API key costs $0.002 / 1K tokens."
    },
    // How does this app work?
    {
      question: "How does this app work?",
      answer: "The app is essntially a static website. It uses HTML, CSS, and JavaScript to run in your browser. Any data stored or messages sent are strictly between you, your browser, and OpenAI's API. Only registered app accounts and premium features make use of AI Chat Bestie's servers, and even then the core messaging and storage features remain isolated to your browser and OpenAI's API."
    },
    // What are the differences between ChatGPT and AI Chat Bestie?
    {
      question: "What are the differences between ChatGPT and AI Chat Bestie?",
      answer: `Though both products use the same underlying model, AI Chat Bestie allows for faster chat responses, more customized conversations, and guaranteed availability of your chat history.`
    },
    // How is it faster than ChatGPT?
    {
      question: "How is it faster than ChatGPT?",
      answer: "While the full details are not clear, ChatGPT returns responses character by character while AI Chat Bestie gives you the full response at once. From user testing and feedback we found response times, on average, are faster for the same given prompts and messages."
    },
    // How is availability for chat histories guaranteed?
    {
      question: "How is availability for chat histories guaranteed?",
      answer: "AI Chat Bestie stores your keys, chats, and histories directly in your browser. This means no intermediary servers or databases are used, and your data will remain available to you for as long as you don't clear your browser's Local Storage."
    },
    // How many chats can I have?
    {
      question: "How many chats can I have?",
      answer: "You can have as many chats as you your browser can store (about 5MB of text). Deleting old chats can help free up space."
    },
    // How much does it cost to use a OpenAI API Key?
    {
      question: "How much does it cost to use a OpenAI API Key?",
      answer: "It currently costs $0.002 / 1K tokens. Each token is approximately 4 English characters, so it's about $0.002 per 250 characters, which works out to be around $0.002 per 50 words or $0.04 for 1,000 words."
    },
    // Do I need to pay for ChatGPT Plus?
    {
      question: "Do I need to pay for ChatGPT Plus?",
      answer: "No, you do not need to pay for ChatGPT Plus in order to use AI Chat Bestie. You just need an OpenAI API key."
    }
  ];
  return `${validate_component(Page_container, "PageContainer").$$render($$result, {}, {}, {
    "page-content": () => {
      return `
    <div class="relative flex flex-col bg-white py-12 max-w-7xl px-6 md:px-16 w-full">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions
      </h1>

      
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">${each(faqs, ({ question, answer }) => {
        return `${validate_component(Faq, "Faq").$$render($$result, { question, answer }, {}, {})}`;
      })}</dl></div>
  `;
    }
  })}`;
});
export {
  Page as default
};
