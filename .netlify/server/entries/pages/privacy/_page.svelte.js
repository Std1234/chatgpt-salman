import { c as create_ssr_component, v as validate_component, g as add_attribute } from "../../../chunks/index2.js";
import { P as Page_container, g as PRIVACY_POLICY_LINK } from "../../../chunks/page-container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page_container, "PageContainer").$$render($$result, {}, {}, {
    "page-content": () => {
      return `
    <div class="relative flex flex-col bg-white py-12 max-w-7xl px-6 md:px-16 w-full">
      <a${add_attribute("href", PRIVACY_POLICY_LINK, 0)} target="_blank"><h1 class="text-3xl font-bold tracking-tight text-gray-900 hover:underline hover:text-blue-400">Privacy Policy
        </h1></a>

      
      </div>
  `;
    }
  })}`;
});
export {
  Page as default
};
