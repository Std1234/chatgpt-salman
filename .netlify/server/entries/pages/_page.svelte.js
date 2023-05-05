import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { P as Page_container } from "../../chunks/page-container.js";
import { C as Chat } from "../../chunks/chat.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page_container, "PageContainer").$$render($$result, {}, {}, {
    "page-content": () => {
      return `${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
