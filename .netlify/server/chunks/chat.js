import { c as create_ssr_component, g as add_attribute, e as escape, a as subscribe, h as getContext, b as each, v as validate_component, m as missing_component, s as setContext } from "./index2.js";
import { nanoid } from "nanoid";
import { w as writable } from "./index.js";
import { p as page } from "./stores.js";
import { H as HOW_TO_GET_API_KEY_LINK, t as truncateStringInMiddle, M as Magnifying_glass_icon, U as USER_ICON_THUMBNAIL_BG_CDN_LINK, L as LOGO_THUMBNAIL_CDN_LINK_BG, a as PROMPT_OPTIONS, b as MODEL_OPTIONS, D as DEFAULT_SYSTEM_MESSAGE, i as isNotSystemMessage, c as Plus_icon, d as createNewChatListItem, e as createNewChat, f as createSavedPrompt } from "./page-container.js";
import { g as gptModelVerified$, o as openAiApiKey$, M as MESSAGE_ROLE, s as savedPrompts$, P as PROMPT_TAG, c as chatList$, a as chats$, L as LOCAL_STORAGE_KEY, b as banners$, E as ERROR, B as BANNER_TYPE } from "./shared.store.js";
import { g as getNotificationsContext } from "./Notifications.svelte_svelte_type_style_lang.js";
import { marked } from "marked";
import Fuse from "fuse.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Paper_airplane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : `w-5 h-5 text-gray-400 hover:text-gray-600`;
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg>`;
});
const Arrow_path_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-4 h-4 text-gray-500";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>`;
});
const Bolt_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "absolute top-1 left-1 h-5 w-5 text-indigo-600";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>`;
});
const Circle_stack_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "absolute top-1 left-1 h-5 w-5 text-indigo-600";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>`;
});
const Gift_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "absolute top-1 left-1 h-5 w-5 text-indigo-600";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path></svg>`;
});
const Identification_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "absolute top-1 left-1 h-5 w-5 text-indigo-600";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path></svg>`;
});
const Key_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path></svg>`;
});
const Wifi_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "absolute top-1 left-1 h-5 w-5 text-indigo-600";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"></path></svg>`;
});
const Hero_feature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="relative pl-9"><dt class="inline font-semibold text-gray-900">${slots.icon ? slots.icon({}) : ``}
    ${escape(title)}</dt>
  <dd class="inline">${escape(description)}</dd></div>`;
});
const Api_key_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_gptModelVerified$;
  let $openAiApiKey$, $$unsubscribe_openAiApiKey$;
  $$unsubscribe_gptModelVerified$ = subscribe(gptModelVerified$, (value) => value);
  $$unsubscribe_openAiApiKey$ = subscribe(openAiApiKey$, (value) => $openAiApiKey$ = value);
  getContext("simple-modal");
  getNotificationsContext();
  let openAiApiKey = $openAiApiKey$;
  $$unsubscribe_gptModelVerified$();
  $$unsubscribe_openAiApiKey$();
  return `<div class="bg-white rounded-lg border-gray-200 divide-y"><div class="bg-white px-3 py-2"><h3 class="text-lg leading-6 font-medium text-gray-900">OpenAI API key</h3></div>

  <div class="px-4 py-5 sm:p-6">
    <label for="name" class="block text-sm font-medium text-gray-700">API key
    </label>
    <input id="open-ai-key" name="open-ai-key" type="text" placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"${add_attribute("class", `block w-full text-sm mt-1 pl-3 pr-10 py-2 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 flex-1`, 0)}${add_attribute("value", openAiApiKey, 0)}>
    ${``}

    <p class="mt-1 text-sm text-gray-400">Your API Key will be stored locally on your browser.
      <a${add_attribute("href", HOW_TO_GET_API_KEY_LINK, 0)} class="text-blue-400 hover:underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">Get your API key for free from OpenAI.
      </a></p></div>

  <div class="pt-5"><div class="flex gap-2 justify-end"><button type="button" class="bg-white py-1.5 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel
      </button>
      <button class="disabled:opacity-50 inline-flex justify-center py-1.5 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save
      </button></div></div></div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openAiApiKey$, $$unsubscribe_openAiApiKey$;
  $$unsubscribe_openAiApiKey$ = subscribe(openAiApiKey$, (value) => $openAiApiKey$ = value);
  getContext("simple-modal");
  const features = [
    {
      title: "Faster responses.",
      description: `Connect directly to the OpenAI API and bypass slow typing animations for quick response times.`,
      icon: Bolt_icon
    },
    {
      title: "Stay connected.",
      description: `Leave your tab open and stay connected forever without having to log back in.`,
      icon: Wifi_icon
    },
    {
      title: "Searchable chat history.",
      description: `Dig up old conversations and find lost answers.`,
      icon: Magnifying_glass_icon
    },
    {
      title: "Always available chat history.",
      description: `All keys and chats are stored locally within your browser, accessible any time.`,
      icon: Circle_stack_icon
    },
    {
      title: "No registration required.",
      description: `Storing keys, chats, and sending messages are done directly in the browser with no intermediaries.`,
      icon: Identification_icon
    },
    {
      title: "Free (bring your own key).",
      description: `Access all base features for free. Get your own OpenAI API key for free.`,
      icon: Gift_icon
    }
  ];
  $$unsubscribe_openAiApiKey$();
  return `<div class="bg-white pt-12 pb-8"><div class="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8"><div class="mb-8 md:mb-12"><div class="mx-auto max-w-2xl text-center"><a href="/" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI Chat
          <span class="inline-block bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">Bestie
          </span></a>
        <p class="mt-3 text-lg leading-8 text-gray-600">Supercharge ChatGPT with our enhanced UI
        </p></div>

      
      <div class="flex justify-center mx-auto mt-12 lg:mt-16 max-w-xl lg:max-w-4xl"><dl class="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">${each(features, ({ title, description, icon }) => {
    return `${validate_component(Hero_feature, "HeroFeature").$$render($$result, { title, description }, {}, {
      icon: () => {
        return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
              `;
      }
    })}`;
  })}</dl></div></div>

    
    
    <button type="button" class="flex justify-center items-center gap-2 lg:mx-0 hover:underline bg-gradient-to-r from-emerald-400 to-cyan-400 text-lg text-white font-bold rounded py-3 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">${validate_component(Key_icon, "KeyIcon").$$render($$result, {}, {}, {})}
      ${escape($openAiApiKey$ ? truncateStringInMiddle($openAiApiKey$) : `Enter API key`)}</button>
    
    <p class="mt-2 text-xs text-gray-600"><a${add_attribute("href", HOW_TO_GET_API_KEY_LINK, 0)} class="text-gray-400 hover:underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">Get your API key for free from OpenAI
      </a></p></div></div>`;
});
const Cog_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`;
});
const chatMessage_svelte_svelte_type_style_lang = "";
const css = {
  code: "pre{white-space:pre-wrap;word-break:break-word}",
  map: null
};
const Chat_message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isUserRole;
  let { role = "" } = $$props;
  let { content = "" } = $$props;
  let { handleForkChat } = $$props;
  let { index } = $$props;
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.handleForkChat === void 0 && $$bindings.handleForkChat && handleForkChat !== void 0)
    $$bindings.handleForkChat(handleForkChat);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css);
  isUserRole = role === MESSAGE_ROLE.USER;
  return `<div class="${["relative", role === "assistant" ? "bg-gray-100" : ""].join(" ").trim()}"><li class="w-full relative mx-auto flex py-6 max-w-md lg:max-w-2xl xl:max-w-4xl">${isUserRole ? `<img class="h-10 w-10 rounded-md"${add_attribute("src", USER_ICON_THUMBNAIL_BG_CDN_LINK, 0)} alt="">` : `<img class="h-10 w-10 rounded-md"${add_attribute("src", LOGO_THUMBNAIL_CDN_LINK_BG, 0)} alt="">`}

    <div class="ml-3"><p class="prose max-w-max text-sm text-gray-500 w-full"><!-- HTML_TAG_START -->${marked.parse(content)}<!-- HTML_TAG_END --></p></div>

    ${``}</li>
</div>`;
});
const Book_open_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6 text-gray-50";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>`;
});
const Wrench_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6 text-gray-50";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z"></path></svg>`;
});
const Bookmark_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6 text-gray-50";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>`;
});
const Cog_2_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"></path></svg>`;
});
const Arrow_up_on_square_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overrideClasses = "" } = $$props;
  const classes = overrideClasses ? overrideClasses : "w-6 h-6 text-gray-50";
  if ($$props.overrideClasses === void 0 && $$bindings.overrideClasses && overrideClasses !== void 0)
    $$bindings.overrideClasses(overrideClasses);
  return `<svg${add_attribute("class", classes, 0)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"></path></svg>`;
});
const Chat_settings_popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("chat");
  return `<div class="relative left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4"><div class="w-56 shrink rounded-xl bg-white p-3 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5"><h3 class="pt-2 px-2 pb-1 w-full text-start text-xs font-medium leading-6 text-gray-500 border-b border-gray-200">CHAT SETTINGS
    </h3>

    <button class="flex items-center gap-2 w-full p-2 text-start hover:bg-gray-100 rounded-md">${validate_component(Book_open_icon, "BookOpenIcon").$$render($$result, { overrideClasses: `w-4 h-4 text-gray-500` }, {}, {})}
      Prompt library
    </button>
    <button class="flex items-center gap-2 w-full p-2 text-start hover:bg-gray-100 rounded-md">${validate_component(Bookmark_icon, "BookmarkIcon").$$render($$result, { overrideClasses: `w-4 h-4 text-gray-500` }, {}, {})}
      Save prompt
    </button>

    <button class="flex items-center gap-2 w-full p-2 text-start hover:bg-gray-100 rounded-md">${validate_component(Wrench_icon, "WrenchIcon").$$render($$result, { overrideClasses: `w-4 h-4 text-gray-500` }, {}, {})}
      System message
    </button>

    <button class="flex items-center gap-2 w-full p-2 text-start hover:bg-gray-100 rounded-b-md">${validate_component(Cog_2_icon, "Cog_2Icon").$$render($$result, { overrideClasses: `w-4 h-4 text-gray-500` }, {}, {})}
      Model settings
    </button>
    <button class="flex items-center gap-2 w-full p-2 text-start hover:bg-gray-100 rounded-b-md">${validate_component(Arrow_up_on_square_icon, "ArrowUpOnSquareIcon").$$render($$result, { overrideClasses: `w-4 h-4 text-gray-500` }, {}, {})}
      Export chat
    </button>

    <button class="flex items-center gap-2 w-full p-2 text-start hover:bg-gray-100 rounded-b-md">${validate_component(Key_icon, "KeyIcon").$$render($$result, { overrideClasses: `w-4 h-4 text-gray-500` }, {}, {})}
      Change API key
    </button></div></div>`;
});
const Prompts_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _promptOptions;
  let promptOptions;
  let $savedPrompts$, $$unsubscribe_savedPrompts$;
  $$unsubscribe_savedPrompts$ = subscribe(savedPrompts$, (value) => $savedPrompts$ = value);
  getContext("simple-modal");
  let { updateSystemMessage } = $$props;
  let { applyPrompt } = $$props;
  const fuseOptions = {
    threshold: 0.4,
    keys: ["promptLabel", "tags", "prompt"]
  };
  let promptId;
  let promptPreviewRef;
  let searchQuery = "";
  if ($$props.updateSystemMessage === void 0 && $$bindings.updateSystemMessage && updateSystemMessage !== void 0)
    $$bindings.updateSystemMessage(updateSystemMessage);
  if ($$props.applyPrompt === void 0 && $$bindings.applyPrompt && applyPrompt !== void 0)
    $$bindings.applyPrompt(applyPrompt);
  _promptOptions = PROMPT_OPTIONS.map((prompt) => ({ ...prompt, isCustom: false })).concat($savedPrompts$.map((saved) => ({
    promptId: saved.title,
    promptLabel: saved.title,
    prompt: saved.prompt,
    characterCount: saved.prompt.length,
    isCustom: true,
    tags: [PROMPT_TAG.CUSTOM]
  })));
  new Fuse(_promptOptions, fuseOptions);
  promptOptions = _promptOptions;
  $$unsubscribe_savedPrompts$();
  return `<div class="bg-white rounded-lg border-gray-200 divide-y"><div class="bg-white px-3 py-2"><h3 class="text-lg leading-6 font-medium text-gray-900">Prompt library</h3></div>

  <div class="flex flex-wrap md:flex-nowrap gap-5 w-full px-4 py-5 sm:p-6">
    <div class="w-1/2"><label for="search" class="block text-sm font-medium text-gray-700">Search
      </label>
      <div class="md:flex md:items-center"><div class="relative"><input id="search" name="search"${add_attribute("class", `block w-full text-sm mt-1 pl-3 pr-10 py-2 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 flex-1`, 0)} type="search"${add_attribute("value", searchQuery, 0)}></div></div></div></div>

  
  <div class="grid grid-cols-1 gap-x-2 gap-y-8 px-4 py-5 sm:p-6 overflow-auto"><ul class="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-4 xl:gap-x-8">
      ${each(promptOptions, ({ promptId: pId, promptLabel: label, prompt, characterCount, tags = [], isCustom }) => {
    let isSelected = pId === promptId, primaryTag = tags[0] || "";
    return `
        
        <li${add_attribute("class", `relative flex gap-0.5 items-center`, 0)}><button${add_attribute(
      "class",
      `relative w-full flex flex-col items-start gap-1 hover:cursor-pointer hover:bg-gray-100 rounded p-1 pl-2 ${isSelected ? `ring-1 ring-indigo-500 border-indigo-500 z-10` : ""}`,
      0
    )}><p class="mt-2 text-left flex gap-1 items-center text-sm font-medium text-gray-900">${escape(label)}

              ${primaryTag ? `<button type="button" class="rounded-full bg-white px-1.5 text-xs font-thin text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">${escape(primaryTag)}
                </button>` : ``}</p>

            <p class="block text-left text-sm font-medium text-gray-500" title="Character count">${escape(characterCount)} characters
            </p></button>

          
          ${isCustom ? `<button class="absolute z-20 top-0 right-0 p-1 hover:bg-gray-100 rounded"><svg class="h-4 w-4 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>` : ``}
        </li>`;
  })}</ul>

    
    <div class="flex flex-col gap-2"><label for="prompt-preview" class="block text-sm font-medium text-gray-700">Prompt preview
      </label>
      <textarea id="prompt-preview" class="block resize-y w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"${add_attribute("this", promptPreviewRef, 0)}>${""}</textarea></div></div>

  
  <div class="pt-5"><div class="flex flex-col items-end justify-end"><div class="flex gap-2"><button type="button" class="bg-white py-1.5 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel
        </button>
        <button type="button" class="bg-white py-1.5 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Apply as system message
        </button>
        <button type="submit" class="disabled:opacity-50 inline-flex justify-center py-1.5 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Apply prompt
        </button></div>
      <span class="flex justify-end mt-1 text-xs text-gray-500">Double-clicking the selection also applies the prompt.
      </span></div></div></div>`;
});
const System_message_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("simple-modal");
  let { systemMessageContent = "" } = $$props;
  let { updateSystemMessage } = $$props;
  let textareaRef;
  if ($$props.systemMessageContent === void 0 && $$bindings.systemMessageContent && systemMessageContent !== void 0)
    $$bindings.systemMessageContent(systemMessageContent);
  if ($$props.updateSystemMessage === void 0 && $$bindings.updateSystemMessage && updateSystemMessage !== void 0)
    $$bindings.updateSystemMessage(updateSystemMessage);
  return `<div class="bg-white rounded-lg border-gray-200 divide-y"><div class="bg-white px-3 py-2"><h3 class="text-lg leading-6 font-medium text-gray-900">System message</h3></div>

  <div class="px-4 py-5 sm:p-6">
    <label for="name" class="block text-sm font-medium text-gray-700">System message
    </label>
    <textarea${add_attribute("rows", 1, 0)} id="system-prompt" name="system-prompt"${add_attribute("class", `block w-full text-sm mt-1 pl-3 pr-10 py-2 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 flex-1`, 0)}${add_attribute("this", textareaRef, 0)}>${systemMessageContent || ""}</textarea>

    <p class="mt-1 text-sm text-gray-400">The system message sets the context of the chat and helps guide responses.
    </p></div>

  <div class="pt-5"><div class="flex gap-2 justify-end"><button type="button" class="bg-white py-1.5 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel
      </button>
      <button class="disabled:opacity-50 inline-flex justify-center py-1.5 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save
      </button></div></div></div>`;
});
const Save_prompt_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("simple-modal");
  let { inputMessage = "" } = $$props;
  let { savePrompt } = $$props;
  let textareaRef;
  if ($$props.inputMessage === void 0 && $$bindings.inputMessage && inputMessage !== void 0)
    $$bindings.inputMessage(inputMessage);
  if ($$props.savePrompt === void 0 && $$bindings.savePrompt && savePrompt !== void 0)
    $$bindings.savePrompt(savePrompt);
  return `<div class="bg-white rounded-lg border-gray-200 divide-y"><div class="bg-white px-3 py-2"><h3 class="text-lg leading-6 font-medium text-gray-900">Save prompt</h3></div>

  <div class="px-4 py-5 sm:p-6">
    <label for="name" class="block text-sm font-medium text-gray-700">Title
    </label>
    <textarea${add_attribute("rows", 1, 0)} id="prompt-title" name="prompt-title"${add_attribute("class", `block w-full text-sm mt-1 pl-3 pr-10 py-2 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 flex-1`, 0)}${add_attribute("this", textareaRef, 0)}>${""}</textarea></div>

  <div class="pt-5"><div class="flex gap-2 justify-end"><button type="button" class="bg-white py-1.5 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel
      </button>
      <button ${"disabled"} class="disabled:opacity-50 inline-flex justify-center py-1.5 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save
      </button></div></div></div>`;
});
const Model_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gptModelVerified$, $$unsubscribe_gptModelVerified$;
  $$unsubscribe_gptModelVerified$ = subscribe(gptModelVerified$, (value) => $gptModelVerified$ = value);
  getContext("simple-modal");
  let modelId = $gptModelVerified$;
  $$unsubscribe_gptModelVerified$();
  return `<div class="bg-white rounded-lg border-gray-200 divide-y"><div class="bg-white px-3 py-2"><h3 class="text-lg leading-6 font-medium text-gray-900">Model settings</h3></div>

  
  <div class="grid grid-cols-1 gap-x-2 gap-y-8 px-4 py-5 sm:p-6 overflow-auto"><ul class="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 xl:gap-x-8">
      ${each(Object.values(MODEL_OPTIONS), ({ model, label, description, maxTokens, trainingData }) => {
    let isSelected = modelId === model;
    return `
        <li${add_attribute("class", `relative flex gap-0.5 items-center`, 0)}><button${add_attribute(
      "class",
      `relative w-full flex flex-col items-start gap-1 hover:cursor-pointer hover:bg-gray-100 rounded p-1 pl-2 ${isSelected ? `ring-1 ring-indigo-500 border-indigo-500 z-10` : ""}`,
      0
    )}><p class="mt-2 text-left flex gap-1 items-center text-sm font-medium text-gray-900">${escape(label)}</p>

            <p class="block uppercase text-left text-xs font-medium text-gray-500" title="Character count">${escape(maxTokens)} max tokens
            </p>

            <p class="block uppercase text-left text-xs font-medium text-gray-500" title="Character count">Training data up to ${escape(trainingData)}</p>

            <p class="prose block text-left text-sm font-light text-gray-500" title="Character count">${escape(description)}
            </p></button>
        </li>`;
  })}</ul></div>

  
  <div class="pt-5"><div class="flex flex-col items-end justify-end"><div class="flex gap-2"><button type="button" class="bg-white py-1.5 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel
        </button>
        <button type="submit" class="disabled:opacity-50 inline-flex justify-center py-1.5 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Apply model
        </button></div>
      <span class="flex justify-end mt-1 text-xs text-gray-500">Double-clicking the selection also applies the model.
      </span></div></div></div>`;
});
function downloadObjectAsJson(obj, fileName) {
  const jsonString = JSON.stringify(obj, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let systemMessage;
  let hasChatMessages;
  let enableRegenerateMessage;
  let $chatList$, $$unsubscribe_chatList$;
  let $$unsubscribe_gptModelVerified$;
  let $openAiApiKey$, $$unsubscribe_openAiApiKey$;
  let $chats$, $$unsubscribe_chats$;
  let $$unsubscribe_page$;
  let $savedPrompts$, $$unsubscribe_savedPrompts$;
  let $showChatSettings$, $$unsubscribe_showChatSettings$;
  $$unsubscribe_chatList$ = subscribe(chatList$, (value) => $chatList$ = value);
  $$unsubscribe_gptModelVerified$ = subscribe(gptModelVerified$, (value) => value);
  $$unsubscribe_openAiApiKey$ = subscribe(openAiApiKey$, (value) => $openAiApiKey$ = value);
  $$unsubscribe_chats$ = subscribe(chats$, (value) => $chats$ = value);
  $$unsubscribe_page$ = subscribe(page, (value) => value);
  $$unsubscribe_savedPrompts$ = subscribe(savedPrompts$, (value) => $savedPrompts$ = value);
  const { open } = getContext("simple-modal");
  let { chatId = "" } = $$props;
  let textareaRef;
  let inputMessage = "";
  let messages = chatId && $chats$?.[chatId] ? $chats$?.[chatId]?.messages?.filter?.(Boolean) : [DEFAULT_SYSTEM_MESSAGE];
  let showChatSettings$ = writable(false);
  $$unsubscribe_showChatSettings$ = subscribe(showChatSettings$, (value) => $showChatSettings$ = value);
  const updateSystemMessage = (systemMessageContent) => {
    const systemMessageIndex = messages.findIndex((message) => message?.role === MESSAGE_ROLE.SYSTEM);
    const updatedMessages = messages.map((message, index) => {
      if (index === systemMessageIndex) {
        return {
          role: MESSAGE_ROLE.SYSTEM,
          content: systemMessageContent
        };
      }
      return message;
    });
    messages = updatedMessages;
  };
  const savePrompt = (prompt, title) => {
    const newPrompt = createSavedPrompt(prompt, title);
    savedPrompts$.update((prompts) => {
      prompts.push(newPrompt);
      return prompts;
    });
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY.SAVED_PROMPTS, JSON.stringify($savedPrompts$));
    } catch (e) {
      banners$.update((banners) => {
        banners.push({
          id: ERROR.LOCAL_STORAGE_SET_ITEM,
          bannerType: BANNER_TYPE.ERROR,
          title: "Access to browser storage failed",
          description: e?.message || e?.name || ""
        });
        return banners;
      });
    }
  };
  const handleExportClick = () => {
    const fileName = `export_chat_${chatId}.json`;
    const objToExport = { id: chatId, messages };
    downloadObjectAsJson(objToExport, fileName);
  };
  const applyPrompt = (prompt) => {
    inputMessage = prompt;
  };
  const openApiKeyModal = () => {
    open(Api_key_modal, {});
  };
  const openSavePromptModal = () => {
    open(Save_prompt_modal, { savePrompt, inputMessage });
  };
  const openPromptsModal = () => {
    open(Prompts_modal, { updateSystemMessage, applyPrompt });
  };
  const openSystemMessageModal = () => {
    open(System_message_modal, {
      systemMessageContent: systemMessage?.content || "",
      updateSystemMessage
    });
  };
  const openModelModal = () => {
    open(Model_modal, {});
  };
  setContext("chat", {
    openPromptsModal,
    openSavePromptModal,
    openSystemMessageModal,
    openApiKeyModal,
    openModelModal,
    handleExportClick,
    showChatSettings$
  });
  const handleForkChat = (forkIndex) => {
    const newChatId = nanoid(5);
    chatList$.update((chatList) => {
      chatList.unshift(createNewChatListItem(newChatId));
      return chatList;
    });
    chats$.update((chats) => {
      const forkedMessages = messages.slice(0, forkIndex + 1);
      chats[newChatId] = createNewChat(newChatId, forkedMessages);
      return chats;
    });
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY.CHAT_LIST, JSON.stringify($chatList$));
      localStorage.setItem(newChatId, JSON.stringify($chats$[newChatId]));
    } catch (e) {
      banners$.update((banners) => {
        banners.push({
          id: ERROR.LOCAL_STORAGE_SET_ITEM,
          bannerType: BANNER_TYPE.ERROR,
          title: "Access to browser storage failed",
          description: e?.message || e?.name || ""
        });
        return banners;
      });
    }
    goto(`/chat/${newChatId}`);
  };
  if ($$props.chatId === void 0 && $$bindings.chatId && chatId !== void 0)
    $$bindings.chatId(chatId);
  systemMessage = messages?.find?.((message) => message?.role === MESSAGE_ROLE.SYSTEM);
  hasChatMessages = messages?.filter?.(isNotSystemMessage).length > 0;
  enableRegenerateMessage = $openAiApiKey$ && messages.length > 2;
  $$unsubscribe_chatList$();
  $$unsubscribe_gptModelVerified$();
  $$unsubscribe_openAiApiKey$();
  $$unsubscribe_chats$();
  $$unsubscribe_page$();
  $$unsubscribe_savedPrompts$();
  $$unsubscribe_showChatSettings$();
  return `${!hasChatMessages ? `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}` : ``}

<section class="relative flex flex-col justify-center items-center">
  <div class="w-full pb-16 mb-16 "><ul class="divide-y divide-gray-200 mb-8">${messages.length > 0 ? `${each(messages?.filter?.(isNotSystemMessage), ({ role, content }, index) => {
    let trueIndex = index + 1;
    return `
          ${validate_component(Chat_message, "ChatMessage").$$render(
      $$result,
      {
        role,
        content,
        index: trueIndex,
        handleForkChat
      },
      {},
      {}
    )}`;
  })}` : ``}</ul>
    <div class="absolute bottom-0 bg-white py-20 "></div></div>

  
  <div class="w-full fixed bottom-0 mt-4 py-10 z-10 bg-gradient-to-b from-transparent via-white to-white"><form class="w-full flex flex-col gap-2">
      ${``}

      ${enableRegenerateMessage ? `<button type="button" class="flex justify-center items-center gap-2 w-48 self-center whitespace-nowrap rounded-md mb-1 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">${validate_component(Arrow_path_icon, "ArrowPathIcon").$$render($$result, {}, {}, {})}
          Regenerate response
        </button>` : ``}

      
      <div class="flex gap-2 justify-center items-center"><div class="relative w-full flex gap-3 justify-center items-center max-w-md lg:max-w-2xl xl:max-w-4xl">
          ${$openAiApiKey$ && hasChatMessages ? `<button type="button" title="Create new chat">${validate_component(Plus_icon, "PlusIcon").$$render(
    $$result,
    {
      overrideClasses: "text-gray-400 hover:text-gray-600 flex-shrink-0 h-6 w-6 rounded-md"
    },
    {},
    {}
  )}</button>` : ``}

          
          ${$showChatSettings$ ? `<div id="tooltip">${validate_component(Chat_settings_popover, "ChatSettingsPopover").$$render($$result, {}, {}, {})}</div>` : ``}

          <button type="button" title="Chat settings">${validate_component(Cog_icon, "CogIcon").$$render(
    $$result,
    {
      overrideClasses: "text-gray-400 hover:text-gray-600 flex-shrink-0 h-6 w-6 rounded-md"
    },
    {},
    {}
  )}</button>

          
          <textarea${add_attribute("rows", 1, 0)} ${!$openAiApiKey$ ? "disabled" : ""}${add_attribute(
    "placeholder",
    $openAiApiKey$ ? "" : "Please enter your OpenAI API key first",
    0
  )}${add_attribute("class", `${!$openAiApiKey$ ? "opacity-50" : "shadow drop-shadow"} resize-none w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-y-auto`, 0)}${add_attribute("this", textareaRef, 0)}>${inputMessage || ""}</textarea>

          
          ${$openAiApiKey$ ? `<button type="submit" class="absolute right-0 inset-y-0 py-2 pr-3">${validate_component(Paper_airplane, "PaperAirplane").$$render($$result, {}, {}, {})}</button>` : ``}</div></div>

      <div class="text-xs text-center text-gray-400"><a href="/" class="hover:font-medium hover:underline hover:text-blue-400">AI Chat Bestie
        </a>
        - Enhanced UI for ChatGPT
      </div></form></div></section>`;
});
export {
  Chat as C
};
