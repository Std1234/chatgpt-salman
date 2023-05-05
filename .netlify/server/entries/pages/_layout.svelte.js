import { c as create_ssr_component, o as onDestroy, v as validate_component, m as missing_component, i as identity, e as escape, n as null_to_empty, a as subscribe, s as setContext, b as each, d as add_styles, f as createEventDispatcher, g as add_attribute } from "../../chunks/index2.js";
import { g as getNotificationsContext, s as store, c as context, p as positions } from "../../chunks/Notifications.svelte_svelte_type_style_lang.js";
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { notification = {} } = $$props;
  let { withoutStyles = false } = $$props;
  const { removeNotification } = getNotificationsContext();
  const { id, removeAfter } = notification;
  const removeNotificationHandler = () => removeNotification(id);
  let timeout = null;
  if (removeAfter) {
    timeout = setTimeout(removeNotificationHandler, removeAfter);
  }
  onDestroy(() => {
    if (removeAfter && timeout)
      clearTimeout(timeout);
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0)
    $$bindings.notification(notification);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  return `${validate_component(item || missing_component, "svelte:component").$$render(
    $$result,
    {
      notification,
      withoutStyles,
      onRemove: removeNotificationHandler
    },
    {},
    {}
  )}`;
});
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const css$3 = {
  code: ".default-notification-style.svelte-1x27qg3.svelte-1x27qg3{position:relative;display:flex;align-items:stretch;justify-content:space-between;margin:12px;background:#fff;color:#000;border-radius:6px;box-shadow:0 4px 10px rgba(0, 0, 0, 0.08);min-height:0;min-width:200px;overflow:hidden}.default-notification-style-content.svelte-1x27qg3.svelte-1x27qg3{width:210px;padding:12px 6px 12px 12px;box-sizing:border-box;word-wrap:break-word}.default-notification-style-button.svelte-1x27qg3.svelte-1x27qg3{display:block;width:40px;padding:0;margin:0;border:none;border-left:1px solid #eee;outline:none;background:none;cursor:pointer;font-size:20px;color:#000;box-sizing:border-box}.default-notification-style-button.svelte-1x27qg3.svelte-1x27qg3:hover{background:rgba(0, 0, 0, 0.01)}.default-notification-error.svelte-1x27qg3.svelte-1x27qg3{background:#f3555a;color:#fff}.default-notification-error.svelte-1x27qg3 .default-notification-style-button.svelte-1x27qg3{border-left:1px solid rgba(255, 255, 255, 0.4);color:#fff}.default-notification-warning.svelte-1x27qg3.svelte-1x27qg3{background:#ffb900;color:#000}.default-notification-warning.svelte-1x27qg3 .default-notification-style-button.svelte-1x27qg3{border-left:1px solid rgba(0, 0, 0, 0.2);color:#000}.default-notification-success.svelte-1x27qg3.svelte-1x27qg3{background:#22ce6c;color:#fff}.default-notification-success.svelte-1x27qg3 .default-notification-style-button.svelte-1x27qg3{border-left:1px solid rgba(255, 255, 255, 0.4);color:#fff}",
  map: null
};
const DefaultNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { notification = {} } = $$props;
  let { withoutStyles = false } = $$props;
  let { onRemove = null } = $$props;
  const { text, type } = notification;
  const getClass = (suffix) => {
    const defaultSuffix = suffix ? `-${suffix}` : "";
    const defaultNotificationClass = ` default-notification-style${defaultSuffix}`;
    const defaultNotificationType = type && !suffix ? ` default-notification-${type}` : "";
    return `notification${defaultSuffix}${withoutStyles ? "" : defaultNotificationClass}${defaultNotificationType}`;
  };
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0)
    $$bindings.notification(notification);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0)
    $$bindings.onRemove(onRemove);
  $$result.css.add(css$3);
  return `${text ? `<div class="${escape(null_to_empty(getClass()), true) + " svelte-1x27qg3"}" role="status" aria-live="polite"><div class="${escape(null_to_empty(getClass("content")), true) + " svelte-1x27qg3"}">${slots.default ? slots.default({}) : `${escape(text)}`}</div>
    <button class="${escape(null_to_empty(getClass("button")), true) + " svelte-1x27qg3"}" aria-label="delete notification">×
    </button></div>` : ``}`;
});
const css$2 = {
  code: ".default-position-style-top-left.svelte-t0tmtn,.default-position-style-top-center.svelte-t0tmtn,.default-position-style-top-right.svelte-t0tmtn,.default-position-style-bottom-left.svelte-t0tmtn,.default-position-style-bottom-center.svelte-t0tmtn,.default-position-style-bottom-right.svelte-t0tmtn{position:fixed;max-width:400px}.default-position-style-top-left.svelte-t0tmtn{top:0;left:0}.default-position-style-top-center.svelte-t0tmtn{top:0;left:50%;transform:translateX(-50%)}.default-position-style-top-right.svelte-t0tmtn{top:0;right:0}.default-position-style-bottom-left.svelte-t0tmtn{bottom:0;left:0}.default-position-style-bottom-center.svelte-t0tmtn{bottom:0;left:50%;transform:translateX(-50%)}.default-position-style-bottom-right.svelte-t0tmtn{bottom:0;right:0}",
  map: null
};
const Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let { item = null } = $$props;
  let { withoutStyles = false } = $$props;
  let { zIndex = null } = $$props;
  const getClass = (position = "") => {
    const defaultPositionClass = ` default-position-style-${position}`;
    return `position-${position}${withoutStyles ? "" : defaultPositionClass}`;
  };
  setContext(context, store);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  $$result.css.add(css$2);
  $$unsubscribe_store();
  return `${slots.default ? slots.default({}) : ``}
<div class="notifications">${each(positions, (position) => {
    return `<div class="${escape(null_to_empty(getClass(position)), true) + " svelte-t0tmtn"}"${add_styles({ "z-index": zIndex })}>${each($store, (notification) => {
      return `${notification.position === position ? `${validate_component(Notification, "Notification").$$render(
        $$result,
        {
          notification,
          withoutStyles,
          item: item || DefaultNotification
        },
        {},
        {}
      )}` : ``}`;
    })}
    </div>`;
  })}</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-n7cvum{box-sizing:border-box}.bg.svelte-n7cvum{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}@supports (-webkit-touch-callout: none){}.wrap.svelte-n7cvum{position:relative;margin:2rem;max-height:100%}.window.svelte-n7cvum{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-n7cvum{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-n7cvum{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-n7cvum:before,.close.svelte-n7cvum:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-n7cvum:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-n7cvum:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-n7cvum:hover{background:black}.close.svelte-n7cvum:hover:before,.close.svelte-n7cvum:hover:after{height:2px;background:white}.close.svelte-n7cvum:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-n7cvum:active{transform:scale(0.9)}.close.svelte-n7cvum:hover,.close.svelte-n7cvum:focus,.close.svelte-n7cvum:active{outline:none}",
  map: null
};
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component({
      ...options,
      props: { ...props, ...options.props }
    });
  };
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  const baseIsTabbable = (node) => node.tabIndex >= 0 && !node.hidden && !node.disabled && node.style.display !== "none" && node.type !== "hidden" && Boolean(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
  let { isTabbable = baseIsTabbable } = $$props;
  let { show = null } = $$props;
  let { id = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    id,
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    isTabbable,
    unstyled
  };
  let state = { ...defaultState };
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(Object.assign(
      {},
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      state.styleBg
    ));
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
    state.transitionBg;
    state.transitionWindow;
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callbacks = {}) => {
    Component = bind(NewComponent, newProps);
    state = { ...defaultState, ...options };
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callbacks.onClose)
        callbacks.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callbacks.onClosed)
        callbacks.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callbacks = {}) => {
    if (!Component)
      return;
    onClose = callbacks.onClose || onClose;
    onClosed = callbacks.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: "instant"
    });
  };
  const context2 = { open, close };
  setContext$1(key, context2);
  onDestroy(() => {
  });
  if ($$props.isTabbable === void 0 && $$bindings.isTabbable && isTabbable !== void 0)
    $$bindings.isTabbable(isTabbable);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.classBg === void 0 && $$bindings.classBg && classBg !== void 0)
    $$bindings.classBg(classBg);
  if ($$props.classWindowWrap === void 0 && $$bindings.classWindowWrap && classWindowWrap !== void 0)
    $$bindings.classWindowWrap(classWindowWrap);
  if ($$props.classWindow === void 0 && $$bindings.classWindow && classWindow !== void 0)
    $$bindings.classWindow(classWindow);
  if ($$props.classContent === void 0 && $$bindings.classContent && classContent !== void 0)
    $$bindings.classContent(classContent);
  if ($$props.classCloseButton === void 0 && $$bindings.classCloseButton && classCloseButton !== void 0)
    $$bindings.classCloseButton(classCloseButton);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext$1 !== void 0)
    $$bindings.setContext(setContext$1);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  $$result.css.add(css$1);
  return `

${Component ? `<div${add_attribute("id", state.id, 0)} class="${[
    escape(null_to_empty(state.classBg), true) + " svelte-n7cvum",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap), true) + " svelte-n7cvum",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow), true) + " svelte-n7cvum",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="dialog" aria-modal="true"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton), true) + " svelte-n7cvum",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="Close modal"${add_attribute("style", cssCloseButton, 0)} type="button"></button>`}` : ``}
        <div class="${[
    escape(null_to_empty(state.classContent), true) + " svelte-n7cvum",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}
${slots.default ? slots.default({}) : ``}`;
});
const toast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".default-notification-style.svelte-s5xjle.svelte-s5xjle{position:relative;display:flex;align-items:stretch;justify-content:space-between;margin:12px;background:rgba(11, 12, 13, 1);color:rgba(227, 229, 231, 1);border-radius:6px;box-shadow:0 4px 10px rgba(0, 0, 0, 0.08);min-height:0;overflow:hidden}.default-notification-style-content.svelte-s5xjle.svelte-s5xjle{padding:12px 6px 12px 12px;box-sizing:border-box;word-wrap:break-word}.default-notification-style-button.svelte-s5xjle.svelte-s5xjle{display:block;padding:10px;margin:0;border:none;outline:none;background:none;cursor:pointer;font-size:20px;color:rgba(227, 229, 231, 1);box-sizing:border-box}.default-notification-style-button.svelte-s5xjle.svelte-s5xjle:hover{background:rgba(0, 0, 0, 0.01)}.default-notification-danger.svelte-s5xjle.svelte-s5xjle{background:#f3555a;color:#fff}.default-notification-danger.svelte-s5xjle .default-notification-style-button.svelte-s5xjle{border-left:1px solid rgba(255, 255, 255, 0.4);color:#fff}.default-notification-warning.svelte-s5xjle.svelte-s5xjle{background:#ffb900;color:#000}.default-notification-warning.svelte-s5xjle .default-notification-style-button.svelte-s5xjle{border-left:1px solid rgba(0, 0, 0, 0.2);color:#000}.default-notification-success.svelte-s5xjle.svelte-s5xjle{background:#22ce6c;color:#fff}.default-notification-success.svelte-s5xjle .default-notification-style-button.svelte-s5xjle{border-left:1px solid rgba(255, 255, 255, 0.4);color:#fff}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { notification = {} } = $$props;
  let { withoutStyles = false } = $$props;
  let { onRemove = null } = $$props;
  const { text, type } = notification;
  const getClass = (suffix) => {
    const defaultSuffix = suffix ? `-${suffix}` : "";
    const defaultNotificationClass = ` default-notification-style${defaultSuffix}`;
    const defaultNotificationType = type && !suffix ? ` default-notification-${type}` : "";
    return `notification${defaultSuffix}${withoutStyles ? "" : defaultNotificationClass}${defaultNotificationType}`;
  };
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0)
    $$bindings.notification(notification);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0)
    $$bindings.onRemove(onRemove);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`${getClass()} flex items-center`), true) + " svelte-s5xjle"}" role="status" aria-live="polite"><div class="${escape(null_to_empty(getClass("content")), true) + " svelte-s5xjle"}">${slots.default ? slots.default({}) : `${escape(text)}`}</div>
  <button class="${escape(null_to_empty(getClass("button")), true) + " svelte-s5xjle"}" aria-label="delete notification">×
    </button>
</div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _Toast = Toast;
  return `${$$result.head += `<!-- HEAD_svelte-cko8kn_START -->${$$result.title = `<title>Supercharge ChatGPT with our enhanced UI - AI Chat Bestie</title>`, ""}<meta name="description"${add_attribute("content", "Enhanced UI for ChatGPT with faster responses, always available histories, searchable chats, and persistent connectivity. Browser-only storage for privacy and reliability.", 0)}><!-- HEAD_svelte-cko8kn_END -->`, ""}

${validate_component(Notifications, "Notifications").$$render($$result, { item: _Toast }, {}, {
    default: () => {
      return `${validate_component(Modal, "Modal").$$render(
        $$result,
        {
          closeButton: true,
          unstyled: false,
          styleWindow: { width: "90%" }
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Layout as default
};
