import { c as create_ssr_component, g as add_attribute, v as validate_component, e as escape, a as subscribe, o as onDestroy, b as each, h as getContext, s as setContext } from "./index2.js";
import { w as writable } from "./index.js";
import { B as BANNER_TYPE, h as hasBanners$, b as banners$, M as MESSAGE_ROLE, G as GPT_MODEL, P as PROMPT_TAG, c as chatList$, a as chats$ } from "./shared.store.js";
import { p as page } from "./stores.js";
import Fuse from "fuse.js";
const Exclamation_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : `w-6 h-6`;
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path></svg>`;
});
const X_mark_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : `w-6 h-6`;
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`;
});
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bannerId = "" } = $$props;
  let { bannerType = BANNER_TYPE.WARNING } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  const bgColor = {
    [BANNER_TYPE.WARNING]: "bg-yellow-50",
    [BANNER_TYPE.ERROR]: "bg-red-50",
    [BANNER_TYPE.SUCCESS]: "bg-green-50"
  };
  const titleColor = {
    [BANNER_TYPE.WARNING]: "text-yellow-800",
    [BANNER_TYPE.ERROR]: "text-red-800",
    [BANNER_TYPE.SUCCESS]: "text-green-800"
  };
  const descriptionColor = {
    [BANNER_TYPE.WARNING]: "text-yellow-700",
    [BANNER_TYPE.ERROR]: "text-red-700",
    [BANNER_TYPE.SUCCESS]: "text-green-700"
  };
  const iconTextColor = {
    [BANNER_TYPE.WARNING]: "text-yellow-400",
    [BANNER_TYPE.ERROR]: "text-red-400",
    [BANNER_TYPE.SUCCESS]: "text-green-400"
  };
  const hoverBgColor = {
    [BANNER_TYPE.WARNING]: "hover:bg-yellow-100",
    [BANNER_TYPE.ERROR]: "hover:bg-red-100",
    [BANNER_TYPE.SUCCESS]: "hover:bg-green-100"
  };
  if ($$props.bannerId === void 0 && $$bindings.bannerId && bannerId !== void 0)
    $$bindings.bannerId(bannerId);
  if ($$props.bannerType === void 0 && $$bindings.bannerType && bannerType !== void 0)
    $$bindings.bannerType(bannerType);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div${add_attribute("class", `w-full rounded-md ${bgColor[bannerType]} p-4 my-2`, 0)}><div class="flex"><div class="flex-shrink-0">${validate_component(Exclamation_circle, "ExclamationCircle").$$render(
    $$result,
    {
      overrideClasses: `w-6 h-6 ${iconTextColor[bannerType]}`
    },
    {},
    {}
  )}</div>
    <div class="ml-3 z-10">${title ? `<h3${add_attribute("class", `text-sm font-medium ${titleColor[bannerType]}`, 0)}>${escape(title)}</h3>` : ``}
      ${description ? `<div${add_attribute("class", `mt-2 text-sm ${descriptionColor[bannerType]}`, 0)}><p class="space-y-1"><span>${escape(description)}</span></p></div>` : ``}</div>

    
    <div class="ml-auto pl-"><div class="-mx-1.5 -my-1.5"><button type="button"${add_attribute("class", `inline-flex ${bgColor[bannerType]} rounded-md p-1.5 ${iconTextColor[bannerType]} hover:${hoverBgColor[bannerType]} focus:outline-none focus:ring-2 focus:ring-offset-2`, 0)}><span class="sr-only">Dismiss</span>
          ${validate_component(X_mark_icon, "XMarkIcon").$$render($$result, {}, {}, {})}</button></div></div></div></div>`;
});
const Banners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hasBanners$, $$unsubscribe_hasBanners$;
  let $banners$, $$unsubscribe_banners$;
  $$unsubscribe_hasBanners$ = subscribe(hasBanners$, (value) => $hasBanners$ = value);
  $$unsubscribe_banners$ = subscribe(banners$, (value) => $banners$ = value);
  onDestroy(() => {
  });
  $$unsubscribe_hasBanners$();
  $$unsubscribe_banners$();
  return `${$hasBanners$ ? `<div class="my-4">${each($banners$, ({ bannerId, bannerType, title, description }) => {
    return `${validate_component(Banner, "Banner").$$render($$result, { bannerId, bannerType, title, description }, {}, {})}`;
  })}</div>` : ``}`;
});
const Menu_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
});
const LOGO_THUMBNAIL_CDN_LINK_BG = `https://keylayapps.nyc3.cdn.digitaloceanspaces.com/ai-chat-bestie%2Flogo%2Fai-chat-bestie-thumbnail-bg.png`;
const USER_ICON_THUMBNAIL_BG_CDN_LINK = `https://keylayapps.nyc3.cdn.digitaloceanspaces.com/ai-chat-bestie%2Fuser-icon-thumbnail-bg.png`;
const PRIVACY_POLICY_LINK = `https://aichatbestie.notion.site/Privacy-policy-2dad1adbd8c045e7a431070456647ef7`;
const HOW_TO_GET_API_KEY_LINK = `https://youtu.be/lnQsO-2MwXM`;
const DISCORD_LINK = `https://discord.gg/BhCFrYjZM5`;
const TWITTER_LINK = `https://twitter.com/@aichatbestie`;
const GITHUB_LINK = `https://github.com/KTruong008/aichatbestie`;
const DEFAULT_SYSTEM_MESSAGE_CONTENT = `You are ChatGPT, a large language model trained by OpenAI.`;
const DEFAULT_SYSTEM_MESSAGE = {
  role: MESSAGE_ROLE.SYSTEM,
  content: DEFAULT_SYSTEM_MESSAGE_CONTENT
};
const MODEL_OPTIONS = {
  [GPT_MODEL.GPT_3_5_TURBO]: {
    model: GPT_MODEL.GPT_3_5_TURBO,
    label: "gpt-3.5-turbo",
    description: `Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration`,
    maxTokens: 4096,
    trainingData: "Up to Sep 2021"
  },
  [GPT_MODEL.GPT_3_5_TURBO_0301]: {
    model: GPT_MODEL.GPT_3_5_TURBO_0301,
    label: "gpt-3.5-turbo-0301",
    description: "Snapshot of gpt-3.5-turbo from March 1st 2023. Unlike gpt-3.5-turbo, this model will not receive updates, and will only be supported for a three month period ending on June 1st 2023.",
    maxTokens: 4096,
    trainingData: "Up to Sep 2021"
  },
  [GPT_MODEL.GPT_4]: {
    model: GPT_MODEL.GPT_4,
    label: "gpt-4",
    description: `More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration.`,
    maxTokens: 8192,
    trainingData: "Up to Sep 2021"
  },
  [GPT_MODEL.GPT_4_0314]: {
    model: GPT_MODEL.GPT_4_0314,
    label: "gpt-4-0314",
    description: `Snapshot of gpt-4 from March 14th 2023. Unlike gpt-4, this model will not receive updates, and will only be supported for a three month period ending on June 14th 2023.`,
    maxTokens: 8192,
    trainingData: "Up to Sep 2021"
  },
  [GPT_MODEL.GPT_4_32k]: {
    model: GPT_MODEL.GPT_4_32k,
    label: "gpt-4-32k",
    description: `Same capabilities as the base gpt-4 mode but with 4x the context length. Will be updated with our latest model iteration.`,
    maxTokens: 32768,
    trainingData: "Up to Sep 2021"
  },
  [GPT_MODEL.GPT_4_32k_0314]: {
    model: GPT_MODEL.GPT_4_32k_0314,
    label: "gpt-4-32k-0314",
    description: `Snapshot of gpt-4-32 from March 14th 2023. Unlike gpt-4-32k, this model will not receive updates, and will only be supported for a three month period ending on June 14th 2023.`,
    maxTokens: 32768,
    trainingData: "Up to Sep 2021"
  }
};
const STORYTELLER_PROMPT = `I want you to act as a storyteller. You will come up with entertaining stories that are engaging, imaginative and captivating for the audience. It can be fairy tales, educational stories or any other type of stories which has the potential to capture people's attention and imagination. Depending on the target audience, you may choose specific themes or topics for your storytelling session e.g., if it’s children then you can talk about animals; If it’s adults then history-based tales might engage them better etc. My first request is "I need an interesting story on perseverance."`;
const CHARACTER_FROM_ANYTHING_PROMPT = `I want you to act like {character} from {series}. I want you to respond and answer like {character} using the tone, manner and vocabulary {character} would use. Do not write any explanations. Only answer like {character}. You must know all of the knowledge of {character}. My first sentence is "Hi {character}."`;
const MIDJOURNEY_PROMPT_GENERATOR_PROMPT = `I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be. Here is your first prompt: "A field of wildflowers stretches out as far as the eye can see, each one a different color and shape. In the distance, a massive tree towers over the landscape, its branches reaching up to the sky like tentacles."`;
const POSITION_INTERVIEWER_PROMPT = `I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is "Hi"`;
const MENTAL_HEALTH_ADVISER_PROMPT = `I want you to act as a mental health adviser. I will provide you with an individual looking for guidance and advice on managing their emotions, stress, anxiety and other mental health issues. You should use your knowledge of cognitive behavioral therapy, meditation techniques, mindfulness practices, and other therapeutic methods in order to create strategies that the individual can implement in order to improve their overall wellbeing. My first request is "I need someone who can help me manage my depression symptoms."`;
const RELATIONSHIP_COACH_PROMPT = `I want you to act as a relationship coach. I will provide some details about the two people involved in a conflict, and it will be your job to come up with suggestions on how they can work through the issues that are separating them. This could include advice on communication techniques or different strategies for improving their understanding of one another's perspectives. My first request is "I need help solving conflicts between my spouse and myself."`;
const DEBATER_PROMPT = `I want you to act as a debater. I will provide you with some topics related to current events and your task is to research both sides of the debates, present valid arguments for each side, refute opposing points of view, and draw persuasive conclusions based on evidence. Your goal is to help people come away from the discussion with increased knowledge and insight into the topic at hand. My first request is "I want an opinion piece about Deno."`;
const MOTIVATIONAL_COACH_PROMPT = `I want you to act as a motivational coach. I will provide you with some information about someone's goals and challenges, and it will be your job to come up with strategies that can help this person achieve their goals. This could involve providing positive affirmations, giving helpful advice or suggesting activities they can do to reach their end goal. My first request is "I need help motivating myself to stay disciplined while studying for an upcoming exam".`;
const CAREER_COUNSELOR_PROMPT = `I want you to act as a career counselor. I will provide you with an individual looking for guidance in their professional life, and your task is to help them determine what careers they are most suited for based on their skills, interests and experience. You should also conduct research into the various options available, explain the job market trends in different industries and advice on which qualifications would be beneficial for pursuing particular fields. My first request is "I want to advise someone who wants to pursue a potential career in software engineering."`;
const PHILOSOPHER_PROMPT = `I want you to act as a philosopher. I will provide some topics or questions related to the study of philosophy, and it will be your job to explore these concepts in depth. This could involve conducting research into various philosophical theories, proposing new ideas or finding creative solutions for solving complex problems. My first request is "I need help developing an ethical framework for decision making."`;
const TRAVEL_GUIDE_PROMPT = `I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. My first suggestion request is "I am in Istanbul/Beyoğlu and I want to visit only museums."`;
const EXCEL_SHEET_PROMPT = `I want you to act as a text based excel. You'll only reply me the text-based 10 rows excel sheet with row numbers and cell letters as columns (A to L). First column header should be empty to reference row number. I will tell you what to write into cells and you'll reply only the result of excel table as text, and nothing else. Do not write explanations. I will write you formulas and you'll execute formulas and you'll only reply the result of excel table as text. First, reply me the empty sheet.`;
const STACKOVERFLOW_POST_PROMPT = `I want you to act as a stackoverflow post. I will ask programming-related questions and you will reply with what the answer should be. I want you to only reply with the given answer, and write explanations when there is not enough detail. do not write explanations. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first question is "How do I read the body of an http.Request to a string in Golang"`;
const STARTUP_IDEA_GENERATOR_PROMPT = `Generate digital startup ideas based on the wish of the people. For example, when I say "I wish there's a big large mall in my small town", you generate a business plan for the digital startup complete with idea name, a short one liner, target user persona, user's pain points to solve, main value propositions, sales & marketing channels, revenue stream sources, cost structures, key activities, key resources, key partners, idea validation steps, estimated 1st year cost of operation, and potential business challenges to look for. Write the result in a markdown table.`;
const ENGLISH_TRANSLATOR_AND_IMPROVER_PROMPT = `I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "istanbulu cok seviyom burada olmak cok guzel"`;
const ADVERTISTER_PROMPT = `I want you to act as an advertiser. You will create a campaign to promote a product or service of your choice. You will choose a target audience, develop key messages and slogans, select the media channels for promotion, and decide on any additional activities needed to reach your goals. My first suggestion request is "I need help creating an advertising campaign for a new type of energy drink targeting young adults aged 18-30."`;
const DREAM_INTERPRETER_PROMPT = `I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide interpretations based on the symbols and themes present in the dream. Do not provide personal opinions or assumptions about the dreamer. Provide only factual interpretations based on the information given. My first dream is about being chased by a giant spider.`;
const APHORISM_BOOK_PROMPT = `I want you to act as an aphorism book. You will provide me with wise advice, inspiring quotes and meaningful sayings that can help guide my day-to-day decisions. Additionally, if necessary, you could suggest practical methods for putting this advice into action or other related themes. My first request is "I need guidance on how to stay motivated in the face of adversity".`;
const SELF_HELP_BOOK_PROMPT = `I want you to act as a self-help book. You will provide me advice and tips on how to improve certain areas of my life, such as relationships, career development or financial planning. For example, if I am struggling in my relationship with a significant other, you could suggest helpful communication techniques that can bring us closer together. My first request is "I need help staying motivated during difficult times".`;
const AI_ASSISTED_DOCTOR_PROMPT = `I want you to act as an AI assisted doctor. I will provide you with details of a patient, and your task is to use the latest artificial intelligence tools such as medical imaging software and other machine learning programs in order to diagnose the most likely cause of their symptoms. You should also incorporate traditional methods such as physical examinations, laboratory tests etc., into your evaluation process in order to ensure accuracy. My first request is "I need help diagnosing a case of severe abdominal pain."`;
const STAND_UP_COMEDIAN_PROMPT = `I want you to act as a stand-up comedian. I will provide you with some topics related to current events and you will use your wit, creativity, and observational skills to create a routine based on those topics. You should also be sure to incorporate personal anecdotes or experiences into the routine in order to make it more relatable and engaging for the audience. My first request is "I want an humorous take on politics."`;
const LOGISTICIAN_PROMPT = `I want you to act as a logistician. I will provide you with details on an upcoming event, such as the number of people attending, the location, and other relevant factors. Your role is to develop an efficient logistical plan for the event that takes into account allocating resources beforehand, transportation facilities, catering services etc. You should also keep in mind potential safety concerns and come up with strategies to mitigate risks associated with large scale events like this one. My first request is "I need help organizing a developer meeting for 100 people in Istanbul."`;
const BUDDHA_PROMPT = `I want you to act as the Buddha (a.k.a. Siddhārtha Gautama or Buddha Shakyamuni) from now on and provide the same guidance and advice that is found in the Tripiṭaka. Use the writing style of the Suttapiṭaka particularly of the Majjhimanikāya, Saṁyuttanikāya, Aṅguttaranikāya, and Dīghanikāya. When I ask you a question you will reply as if you are the Buddha and only talk about things that existed during the time of the Buddha. I will pretend that I am a layperson with a lot to learn. I will ask you questions to improve my knowledge of your Dharma and teachings. Fully immerse yourself into the role of the Buddha. Keep up the act of being the Buddha as well as you can. Do not break character. Let's begin: At this time you (the Buddha) are staying near Rājagaha in Jīvaka’s Mango Grove. I came to you, and exchanged greetings with you. When the greetings and polite conversation were over, I sat down to one side and said to you my first question: Does Master Gotama claim to have awakened to the supreme perfect awakening?`;
const PERSONAL_TRAINER_PROMPT = `I want you to act as a personal trainer. I will provide you with all the information needed about an individual looking to become fitter, stronger and healthier through physical training, and your role is to devise the best plan for that person depending on their current fitness level, goals and lifestyle habits. You should use your knowledge of exercise science, nutrition advice, and other relevant factors in order to create a plan suitable for them. My first request is "I need help designing an exercise program for someone who wants to lose weight."`;
const RECRUITER_PROMPT = `I want you to act as a recruiter. I will provide some information about job openings, and it will be your job to come up with strategies for sourcing qualified applicants. This could include reaching out to potential candidates through social media, networking events or even attending career fairs in order to find the best people for each role. My first request is "I need help improve my CV.”`;
const MOTIVATIONAL_SPEAKER_PROMPT = `I want you to act as a motivational speaker. Put together words that inspire action and make people feel empowered to do something beyond their abilities. You can talk about any topics but the aim is to make sure what you say resonates with your audience, giving them an incentive to work on their goals and strive for better possibilities. My first request is "I need a speech about how everyone should never give up."`;
const MOVIE_CRITIC_PROMPT = `I want you to act as a movie critic. You will develop an engaging and creative movie review. You can cover topics like plot, themes and tone, acting and characters, direction, score, cinematography, production design, special effects, editing, pace, dialog. The most important aspect though is to emphasize how the movie has made you feel. What has really resonated with you. You can also be critical about the movie. Please avoid spoilers. My first request is "I need to write a movie review for the movie Interstellar"`;
const NOVELIST_PROMPT = `I want you to act as a novelist. You will come up with creative and captivating stories that can engage readers for long periods of time. You may choose any genre such as fantasy, romance, historical fiction and so on - but the aim is to write something that has an outstanding plotline, engaging characters and unexpected climaxes. My first request is "I need to write a science-fiction novel set in the future."`;
const SCREENWRITER_PROMPT = `I want you to act as a screenwriter. You will develop an engaging and creative script for either a feature length film, or a Web Series that can captivate its viewers. Start with coming up with interesting characters, the setting of the story, dialogues between the characters etc. Once your character development is complete - create an exciting storyline filled with twists and turns that keeps the viewers in suspense until the end. My first request is "I need to write a romantic drama movie set in Paris."`;
const DEBATE_COACH_PROMPT = `I want you to act as a debate coach. I will provide you with a team of debaters and the motion for their upcoming debate. Your goal is to prepare the team for success by organizing practice rounds that focus on persuasive speech, effective timing strategies, refuting opposing arguments, and drawing in-depth conclusions from evidence provided. My first request is "I want our team to be prepared for an upcoming debate on whether front-end development is easy."`;
const COMPOSER_PROMPT = `I want you to act as a composer. I will provide the lyrics to a song and you will create music for it. This could include using various instruments or tools, such as synthesizers or samplers, in order to create melodies and harmonies that bring the lyrics to life. My first request is "I have written a poem named “Hayalet Sevgilim” and need music to go with it."`;
const PROMPT_OPTIONS = [
  {
    promptId: "STORYTELLER_PROMPT",
    promptLabel: "Storyteller",
    prompt: STORYTELLER_PROMPT,
    characterCount: STORYTELLER_PROMPT.length,
    tags: [PROMPT_TAG.STORY]
  },
  {
    promptId: "CHARACTER_FROM_ANYTHING_PROMPT",
    promptLabel: "Character from anything",
    prompt: CHARACTER_FROM_ANYTHING_PROMPT,
    characterCount: CHARACTER_FROM_ANYTHING_PROMPT.length,
    tags: [PROMPT_TAG.STORY]
  },
  {
    promptId: "MIDJOURNEY_PROMPT_GENERATOR_PROMPT",
    promptLabel: "Midjourney prompt generator",
    prompt: MIDJOURNEY_PROMPT_GENERATOR_PROMPT,
    characterCount: MIDJOURNEY_PROMPT_GENERATOR_PROMPT.length,
    tags: [PROMPT_TAG.AI]
  },
  {
    promptId: "POSITION_INTERVIEWER_PROMPT",
    promptLabel: "Position interviewer",
    prompt: POSITION_INTERVIEWER_PROMPT,
    characterCount: POSITION_INTERVIEWER_PROMPT.length,
    tags: [PROMPT_TAG.CAREER]
  },
  {
    promptId: "MENTAL_HEALTH_ADVISER_PROMPT",
    promptLabel: "Mental health adviser",
    prompt: MENTAL_HEALTH_ADVISER_PROMPT,
    characterCount: MENTAL_HEALTH_ADVISER_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "RELATIONSHIP_COACH_PROMPT",
    promptLabel: "Relationship_coach",
    prompt: RELATIONSHIP_COACH_PROMPT,
    characterCount: RELATIONSHIP_COACH_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "DEBATER_PROMPT",
    promptLabel: "Debater",
    prompt: DEBATER_PROMPT,
    characterCount: DEBATER_PROMPT.length
  },
  {
    promptId: "MOTIVATIONAL_COACH_PROMPT",
    promptLabel: "Motivational coach",
    prompt: MOTIVATIONAL_COACH_PROMPT,
    characterCount: MOTIVATIONAL_COACH_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "CAREER_COUNSELOR_PROMPT",
    promptLabel: "Career counselor",
    prompt: CAREER_COUNSELOR_PROMPT,
    characterCount: CAREER_COUNSELOR_PROMPT.length,
    tags: [PROMPT_TAG.CAREER]
  },
  {
    promptId: "PHILOSOPHER_PROMPT",
    promptLabel: "Philosopher",
    prompt: PHILOSOPHER_PROMPT,
    characterCount: PHILOSOPHER_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "TRAVEL_GUIDE_PROMPT",
    promptLabel: "Travel guide",
    prompt: TRAVEL_GUIDE_PROMPT,
    characterCount: TRAVEL_GUIDE_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "EXCEL_SHEET_PROMPT",
    promptLabel: "Excel sheet",
    prompt: EXCEL_SHEET_PROMPT,
    characterCount: EXCEL_SHEET_PROMPT.length
  },
  {
    promptId: "STACKOVERFLOW_POST_PROMPT",
    promptLabel: "Stackoverflow post",
    prompt: STACKOVERFLOW_POST_PROMPT,
    characterCount: STACKOVERFLOW_POST_PROMPT.length,
    tags: [PROMPT_TAG.DEVELOPER]
  },
  {
    promptId: "STARTUP_IDEA_GENERATOR_PROMPT",
    promptLabel: "Startup idea generator",
    prompt: STARTUP_IDEA_GENERATOR_PROMPT,
    characterCount: STARTUP_IDEA_GENERATOR_PROMPT.length,
    tags: [PROMPT_TAG.BUSINESS]
  },
  {
    promptId: "ENGLISH_TRANSLATOR_AND_IMPROVER_PROMPT",
    promptLabel: "English translator and improver",
    prompt: ENGLISH_TRANSLATOR_AND_IMPROVER_PROMPT,
    characterCount: ENGLISH_TRANSLATOR_AND_IMPROVER_PROMPT.length,
    tags: [PROMPT_TAG.LANGUAGE]
  },
  {
    promptId: "ADVERTISTER_PROMPT",
    promptLabel: "Advertister",
    prompt: ADVERTISTER_PROMPT,
    characterCount: ADVERTISTER_PROMPT.length,
    tags: [PROMPT_TAG.MARKETING]
  },
  {
    promptId: "DREAM_INTERPRETER_PROMPT",
    promptLabel: "Dream interpreter",
    prompt: DREAM_INTERPRETER_PROMPT,
    characterCount: DREAM_INTERPRETER_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "APHORISM_BOOK_PROMPT",
    promptLabel: "Aphorism book",
    prompt: APHORISM_BOOK_PROMPT,
    characterCount: APHORISM_BOOK_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "SELF_HELP_BOOK_PROMPT",
    promptLabel: "Self help book",
    prompt: SELF_HELP_BOOK_PROMPT,
    characterCount: SELF_HELP_BOOK_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "AI_ASSISTED_DOCTOR_PROMPT",
    promptLabel: "AI assisted doctor",
    prompt: AI_ASSISTED_DOCTOR_PROMPT,
    characterCount: AI_ASSISTED_DOCTOR_PROMPT.length
  },
  {
    promptId: "STAND_UP_COMEDIAN_PROMPT",
    promptLabel: "Stand up comedian",
    prompt: STAND_UP_COMEDIAN_PROMPT,
    characterCount: STAND_UP_COMEDIAN_PROMPT.length
  },
  {
    promptId: "LOGISTICIAN_PROMPT",
    promptLabel: "Logistician",
    prompt: LOGISTICIAN_PROMPT,
    characterCount: LOGISTICIAN_PROMPT.length
  },
  {
    promptId: "BUDDHA_PROMPT",
    promptLabel: "Buddha",
    prompt: BUDDHA_PROMPT,
    characterCount: BUDDHA_PROMPT.length
  },
  {
    promptId: "PERSONAL_TRAINER_PROMPT",
    promptLabel: "Personal trainer",
    prompt: PERSONAL_TRAINER_PROMPT,
    characterCount: PERSONAL_TRAINER_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "RECRUITER_PROMPT",
    promptLabel: "Recruiter",
    prompt: RECRUITER_PROMPT,
    characterCount: RECRUITER_PROMPT.length,
    tags: [PROMPT_TAG.CAREER]
  },
  {
    promptId: "MOTIVATIONAL_SPEAKER_PROMPT",
    promptLabel: "Motivational speaker",
    prompt: MOTIVATIONAL_SPEAKER_PROMPT,
    characterCount: MOTIVATIONAL_SPEAKER_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "MOVIE_CRITIC_PROMPT",
    promptLabel: "Movie critic",
    prompt: MOVIE_CRITIC_PROMPT,
    characterCount: MOVIE_CRITIC_PROMPT.length
  },
  {
    promptId: "NOVELIST_PROMPT",
    promptLabel: "Novelist",
    prompt: NOVELIST_PROMPT,
    characterCount: NOVELIST_PROMPT.length,
    tags: [PROMPT_TAG.WRITING]
  },
  {
    promptId: "SCREENWRITER_PROMPT",
    promptLabel: "Screenwriter",
    prompt: SCREENWRITER_PROMPT,
    characterCount: SCREENWRITER_PROMPT.length,
    tags: [PROMPT_TAG.WRITING]
  },
  {
    promptId: "DEBATE_COACH_PROMPT",
    promptLabel: "Debate coach",
    prompt: DEBATE_COACH_PROMPT,
    characterCount: DEBATE_COACH_PROMPT.length,
    tags: [PROMPT_TAG.PERSONAL]
  },
  {
    promptId: "COMPOSER_PROMPT",
    promptLabel: "Composer",
    prompt: COMPOSER_PROMPT,
    characterCount: COMPOSER_PROMPT.length
  }
];
const truncateString = (str = "", cutLength = 18) => {
  const truncated = str?.substring?.(0, cutLength);
  return truncated?.length < str?.length ? `${truncated}...` : truncated;
};
const truncateStringInMiddle = (str = "", cutLength = 4) => {
  const cutStart = str?.substring?.(0, cutLength);
  const cutEnd = str?.substring?.(str.length - cutLength, str.length);
  return `${cutStart}...${cutEnd}`;
};
const createNewChatListItem = (chatId) => {
  return {
    chatId,
    title: "New chat"
  };
};
const createNewChat = (chatId, messages = [DEFAULT_SYSTEM_MESSAGE]) => {
  return {
    chatId,
    messages
  };
};
const isNotSystemMessage = (message) => {
  return message?.role !== MESSAGE_ROLE.SYSTEM;
};
const createSavedPrompt = (prompt, title = "") => {
  return {
    title,
    prompt
  };
};
const Mobile_navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chatId;
  let title;
  let $chatList$, $$unsubscribe_chatList$;
  let $page$, $$unsubscribe_page$;
  $$unsubscribe_chatList$ = subscribe(chatList$, (value) => $chatList$ = value);
  $$unsubscribe_page$ = subscribe(page, (value) => $page$ = value);
  getContext("sidebar");
  chatId = $page$.params.chatId;
  title = truncateString($chatList$.find((chat) => chat.chatId === chatId)?.title || "", 50);
  $$unsubscribe_chatList$();
  $$unsubscribe_page$();
  return `<div class="sticky flex justify-between items-center top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-800"><button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"><span class="sr-only">Open sidebar</span>
    ${validate_component(Menu_icon, "MenuIcon").$$render($$result, {}, {}, {})}</button>

  <span class="text-gray-300">${escape(title)}</span>

  
  <div></div></div>`;
});
const X_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6 text-gray-50";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
});
const Magnifying_glass_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "absolute top-1 left-1 h-5 w-5 text-indigo-600";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>`;
});
const Plus_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6 text-gray-500 dark:text-gray-400";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>`;
});
const Chat_bubble_left_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : `w-6 h-6`;
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg>`;
});
const Sidebar_chat_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page$, $$unsubscribe_page$;
  let $$unsubscribe_chatList$;
  $$unsubscribe_page$ = subscribe(page, (value) => $page$ = value);
  $$unsubscribe_chatList$ = subscribe(chatList$, (value) => value);
  getContext("sidebar");
  let { chatId } = $$props;
  let { title } = $$props;
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId !== void 0)
    $$bindings.chatId(chatId);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$unsubscribe_page$();
  $$unsubscribe_chatList$();
  return `<button type="button"${add_attribute("class", `relative w-full text-gray-300 hover:bg-gray-700 group flex items-center px-2 py-3 text-sm font-medium rounded-md ${chatId === $page$?.params?.chatId ? ` bg-gray-600` : ""}`, 0)}>
  <div class="flex flex-1 justify-start items-center flex-nowrap">${validate_component(Chat_bubble_left_icon, "ChatBubbleLeftIcon").$$render(
    $$result,
    {
      overrideClasses: `text-gray-400 hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5`
    },
    {},
    {}
  )}
    ${`<span class="text-left overflow-hidden whitespace-nowrap"${add_attribute("title", title, 0)}>${escape(truncateString(title))}</span>`}</div>

  
  ${`${``}`}</button>`;
});
const Sidebar_body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chatListFuse;
  let chatsFuse;
  let searchedChats;
  let searchedChatList;
  let chatList;
  let $chats$, $$unsubscribe_chats$;
  let $chatList$, $$unsubscribe_chatList$;
  $$unsubscribe_chats$ = subscribe(chats$, (value) => $chats$ = value);
  $$unsubscribe_chatList$ = subscribe(chatList$, (value) => $chatList$ = value);
  getContext("sidebar");
  const chatListFuseOptions = {
    // Lower threshold = closer match
    threshold: 0.3,
    keys: ["title"]
  };
  const chatsFuseOptions = {
    // Lower threshold = closer match
    threshold: 0.5,
    keys: ["messages.content"]
  };
  let searchInput;
  let searchQuery = "";
  chatListFuse = new Fuse($chatList$, chatListFuseOptions);
  chatsFuse = new Fuse(Object.values($chats$), chatsFuseOptions);
  searchedChats = chatsFuse.search(searchQuery).map((result) => result.item);
  searchedChatList = chatListFuse.search(searchQuery).map((result) => result.item);
  [
    .../* @__PURE__ */ new Set([
      ...searchedChats.map((chat) => chat.chatId),
      ...searchedChatList.map((chat) => chat.chatId)
    ])
  ];
  chatList = $chatList$;
  $$unsubscribe_chats$();
  $$unsubscribe_chatList$();
  return `

<div class="flex flex-1 flex-col overflow-auto"><nav class="flex-1 px-2 py-3 bg-gray-800 space-y-1">
    <button${add_attribute("class", `w-full text-gray-300 hover:bg-gray-500 flex items-center px-2 py-3 text-sm font-medium rounded-md mb-2 shadow-sm ring-1 ring-inset ring-gray-400 `, 0)}>${validate_component(Plus_icon, "PlusIcon").$$render(
    $$result,
    {
      overrideClasses: "text-gray-400 hover:text-gray-500 mr-3 flex-shrink-0 h-5 w-5"
    },
    {},
    {}
  )}
      New chat
    </button>

    
    <div class="relative flex flex-grow"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">${validate_component(Magnifying_glass_icon, "MagnifyingGlassIcon").$$render($$result, { overrideClasses: `h-5 w-5 text-gray-400` }, {}, {})}</div>
      <input placeholder="Search" type="text" name="search" class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"${add_attribute("value", searchQuery, 0)}${add_attribute("this", searchInput, 0)}>
      </div>

    ${each(chatList, ({ chatId: cId, title }) => {
    return `${validate_component(Sidebar_chat_item, "SidebarChatItem").$$render($$result, { chatId: cId, title }, {}, {})}`;
  })}

    
    ${!chatList.length || chatList.length === 0 ? `<div class="flex flex-col items-center justify-center h-full"><div class="text-gray-400 text-sm">No chats found</div>
        <button class="mt-2 text-gray-400 hover:text-gray-500 text-sm border border-gray-400 rounded-md px-2 py-1">Create new chat
        </button></div>` : ``}</nav></div>`;
});
const Discord_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "h-4 w-4 text-gray-400 hover:text-gray-500 hover:cursor-pointer";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" width="250px" height="250px"><path d="M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z"></path></svg>`;
});
const Twitter_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "h-4 w-4 text-gray-400 hover:text-gray-500 hover:cursor-pointer";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path></svg>`;
});
const Github_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "h-4 w-4 text-gray-400 hover:text-gray-500 hover:cursor-pointer";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>`;
});
const Sidebar_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col border-t border-gray-500 bg-gray-800"></div>


<div class="flex flex-col gap-3 py-3 justify-center items-center bg-gray-800"><div class="flex flex-row gap-5 justify-center items-center text-gray-400 text-sm"><a${add_attribute("href", TWITTER_LINK, 0)} target="_blank" rel="noopener noreferrer">${validate_component(Twitter_icon, "TwitterIcon").$$render($$result, {}, {}, {})}</a>
    <a${add_attribute("href", DISCORD_LINK, 0)} target="_blank" rel="noopener noreferrer">${validate_component(Discord_icon, "DiscordIcon").$$render($$result, {}, {}, {})}</a>
    <a${add_attribute("href", GITHUB_LINK, 0)} target="_blank" rel="noopener noreferrer"><span class="sr-only">Github</span>
      ${validate_component(Github_icon, "GithubIcon").$$render($$result, {}, {}, {})}</a></div>

  <div class="flex gap-1"><a${add_attribute("href", PRIVACY_POLICY_LINK, 0)} target="_blank" class="text-xs text-gray-500 hover:text-gray-300 hover:cursor-pointer">Privacy
    </a>
    <span class="text-xs text-gray-500">· </span>
    <a href="/faqs" class="text-xs text-gray-500 hover:text-gray-300 hover:cursor-pointer">FAQs</a>
    <span class="text-xs text-gray-500">· </span>
    <span class="text-xs text-gray-500"><a href="/" class="hover:text-gray-300">AI Chat Bestie
      </a> © 2023</span></div></div>`;
});
const Mobile_sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileSidebarOpen$, $$unsubscribe_isMobileSidebarOpen$;
  let { isMobileSidebarOpen$, handleCloseMobileSidebar } = getContext("sidebar");
  $$unsubscribe_isMobileSidebarOpen$ = subscribe(isMobileSidebarOpen$, (value) => $isMobileSidebarOpen$ = value);
  $$unsubscribe_isMobileSidebarOpen$();
  return `${$isMobileSidebarOpen$ ? `<div${add_attribute("class", `fixed inset-0 flex z-40 md:hidden`, 0)} role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-400 bg-opacity-75" aria-hidden="true"></div>
    
    <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
      <div class="absolute top-0 right-0 -mr-12 pt-2"><button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><span class="sr-only">Close sidebar</span>
          ${validate_component(X_icon, "XIcon").$$render($$result, {}, {}, {})}</button></div>

      ${validate_component(Sidebar_body, "SidebarBody").$$render($$result, {}, {}, {})}

      ${validate_component(Sidebar_footer, "SidebarFooter").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="hidden md:flex md:flex-col md:w-60 md:fixed md:inset-y-0">
  <div class="flex flex-1 flex-col min-h-0 border-r border-gray-200 bg-white">${validate_component(Sidebar_body, "SidebarBody").$$render($$result, {}, {}, {})}

    ${validate_component(Sidebar_footer, "SidebarFooter").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page_container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobileSidebarOpen$ = writable(false);
  setContext("sidebar", {
    isMobileSidebarOpen$,
    openMobileSidebar: () => isMobileSidebarOpen$.set(true),
    handleCloseMobileSidebar: () => isMobileSidebarOpen$.set(false)
  });
  return `<main class="flex flex-1"><aside class="z-20 md:w-64">
    ${validate_component(Mobile_sidebar, "MobileSidebar").$$render($$result, {}, {}, {})}

    
    ${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</aside>

  
  <section class="w-full">${validate_component(Mobile_navbar, "MobileNavbar").$$render($$result, {}, {}, {})}
    
    <div class="flex justify-center self-center mx-auto w-3/4">${validate_component(Banners, "Banners").$$render($$result, {}, {}, {})}</div>

    
    ${slots["page-content"] ? slots["page-content"]({}) : ``}</section></main>`;
});
export {
  DEFAULT_SYSTEM_MESSAGE as D,
  HOW_TO_GET_API_KEY_LINK as H,
  LOGO_THUMBNAIL_CDN_LINK_BG as L,
  Magnifying_glass_icon as M,
  Page_container as P,
  USER_ICON_THUMBNAIL_BG_CDN_LINK as U,
  PROMPT_OPTIONS as a,
  MODEL_OPTIONS as b,
  Plus_icon as c,
  createNewChatListItem as d,
  createNewChat as e,
  createSavedPrompt as f,
  PRIVACY_POLICY_LINK as g,
  isNotSystemMessage as i,
  truncateStringInMiddle as t
};
