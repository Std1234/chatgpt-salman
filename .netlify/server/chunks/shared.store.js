import { d as derived, w as writable } from "./index.js";
var LOCAL_STORAGE_KEY = /* @__PURE__ */ ((LOCAL_STORAGE_KEY2) => {
  LOCAL_STORAGE_KEY2["OPEN_AI_API_KEY"] = "openAiApiKey";
  LOCAL_STORAGE_KEY2["CHAT_LIST"] = "bChatList";
  LOCAL_STORAGE_KEY2["SAVED_PROMPTS"] = "bSavedPrompts";
  LOCAL_STORAGE_KEY2["GPT_MODEL"] = "bGptModel";
  return LOCAL_STORAGE_KEY2;
})(LOCAL_STORAGE_KEY || {});
var MESSAGE_ROLE = /* @__PURE__ */ ((MESSAGE_ROLE2) => {
  MESSAGE_ROLE2["SYSTEM"] = "system";
  MESSAGE_ROLE2["ASSISTANT"] = "assistant";
  MESSAGE_ROLE2["USER"] = "user";
  return MESSAGE_ROLE2;
})(MESSAGE_ROLE || {});
var BANNER_TYPE = /* @__PURE__ */ ((BANNER_TYPE2) => {
  BANNER_TYPE2["ERROR"] = "error";
  BANNER_TYPE2["INFO"] = "info";
  BANNER_TYPE2["WARNING"] = "warning";
  BANNER_TYPE2["SUCCESS"] = "success";
  return BANNER_TYPE2;
})(BANNER_TYPE || {});
var ERROR = /* @__PURE__ */ ((ERROR2) => {
  ERROR2["LOCAL_STORAGE_SET_ITEM"] = "LOCAL_STORAGE_SET_ITEM";
  ERROR2["OPENAI_CHAT_COMPLETION"] = "OPENAI_CHAT_COMPLETION";
  ERROR2["REGISTRATION"] = "REGISTRATION";
  ERROR2["LOGIN"] = "LOGIN";
  ERROR2["PASSWORD_RESET"] = "PASSWORD_RESET";
  ERROR2["USER_DATA_FETCH"] = "USER_DATA_FETCH";
  ERROR2["PASSWORD_CHANGE"] = "PASSWORD_CHANGE";
  ERROR2["CHECKOUT_SESSION_CREATE"] = "CHECKOUT_SESSION_CREATE";
  ERROR2["DATA_SYNC_SAVE"] = "CHAT_SYNC_SAVE";
  ERROR2["DATA_SYNC_SAVE_LIMIT"] = "CHAT_SYNC_SAVE_LIMIT";
  ERROR2["DATA_SYNC_IMPORT"] = "CHAT_SYNC_IMPORT";
  ERROR2["DATA_SYNC_DELETE_SAVED_CHAT"] = "CHAT_SYNC_DELETE_SAVED_CHAT";
  return ERROR2;
})(ERROR || {});
var PROMPT_TAG = /* @__PURE__ */ ((PROMPT_TAG2) => {
  PROMPT_TAG2["CUSTOM"] = "Custom";
  PROMPT_TAG2["STORY"] = "Story";
  PROMPT_TAG2["BUSINESS"] = "Business";
  PROMPT_TAG2["DEVELOPER"] = "Developer";
  PROMPT_TAG2["LANGUAGE"] = "Language";
  PROMPT_TAG2["MARKETING"] = "Marketing";
  PROMPT_TAG2["WRITING"] = "Writing";
  PROMPT_TAG2["TECH"] = "Tech";
  PROMPT_TAG2["CAREER"] = "Career";
  PROMPT_TAG2["PERSONAL"] = "Personal";
  PROMPT_TAG2["AI"] = "AI";
  PROMPT_TAG2["MISCALLANEOUS"] = "Miscellaneous";
  return PROMPT_TAG2;
})(PROMPT_TAG || {});
var GPT_MODEL = /* @__PURE__ */ ((GPT_MODEL2) => {
  GPT_MODEL2["GPT_3_5_TURBO"] = "gpt-3.5-turbo";
  GPT_MODEL2["GPT_3_5_TURBO_0301"] = "gpt-3.5-turbo-0301";
  GPT_MODEL2["GPT_4"] = "gpt-4";
  GPT_MODEL2["GPT_4_0314"] = "gpt-4-0314";
  GPT_MODEL2["GPT_4_32k"] = "gpt-4-32k";
  GPT_MODEL2["GPT_4_32k_0314"] = "gpt-4-32k-0314";
  return GPT_MODEL2;
})(GPT_MODEL || {});
const banners$ = writable([]);
const hasBanners$ = derived(banners$, (banners) => {
  return banners.length > 0;
});
const openAiApiKey$ = writable("");
const chatList$ = writable([]);
const chats$ = writable({});
const savedPrompts$ = writable([]);
const gptModel$ = writable(GPT_MODEL.GPT_3_5_TURBO);
const gptModelVerified$ = derived(gptModel$, (gptModel) => {
  const isValid = gptModel && Object.values(GPT_MODEL).includes(gptModel);
  return isValid ? gptModel : GPT_MODEL.GPT_3_5_TURBO;
});
const user$ = writable({});
const userSettings$ = writable({});
derived(user$, (user) => {
  return user?.id;
});
derived(user$, (user) => {
  return !!user?.id;
});
derived(userSettings$, (userSettings) => {
  return !!userSettings?.isUpgraded;
});
derived([user$, userSettings$], ([user, userSettings]) => {
  const { createdAt, updatedAt, lastSeen, disabled, email, emailVerified } = user || {};
  const { userId, isUpgraded } = userSettings || {};
  return {
    userId,
    createdAt,
    updatedAt,
    lastSeen,
    disabled,
    email,
    emailVerified,
    isUpgraded
  };
});
derived([chats$, chatList$], ([chats, chatList]) => {
  return Object.values(chats).map((chat) => {
    const chatListItem = chatList.find((item) => item.chatId === chat.chatId);
    return {
      ...chat,
      title: chatListItem?.title || "New chat"
    };
  });
});
export {
  BANNER_TYPE as B,
  ERROR as E,
  GPT_MODEL as G,
  LOCAL_STORAGE_KEY as L,
  MESSAGE_ROLE as M,
  PROMPT_TAG as P,
  chats$ as a,
  banners$ as b,
  chatList$ as c,
  gptModelVerified$ as g,
  hasBanners$ as h,
  openAiApiKey$ as o,
  savedPrompts$ as s
};
