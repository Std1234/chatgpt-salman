import { h as getContext } from "./index2.js";
import { w as writable } from "./index.js";
const context = {
  subscribe: null,
  addNotification: null,
  removeNotification: null,
  clearNotifications: null
};
const getNotificationsContext = () => getContext(context);
const DefaultNotification_svelte_svelte_type_style_lang = "";
const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
const addNotification = (notification, store2) => {
  if (!notification)
    return;
  const { update } = store2;
  const safeNotification = {
    id: `${new Date().getTime()}-${Math.floor(Math.random() * 9999)}`,
    position: "bottom-center",
    text: "",
    ...notification
  };
  if (!positions.includes(notification.position))
    return;
  update((notifications) => {
    if (safeNotification.position.includes("top-")) {
      return [safeNotification, ...notifications];
    }
    return [...notifications, safeNotification];
  });
};
const removeNotification = (notificationId, { update }) => {
  if (!notificationId)
    return;
  update((notifications) => notifications.filter(({ id }) => id !== notificationId));
};
const clearNotifications = (store2) => store2.set([]);
const createStore = () => {
  const store2 = writable([]);
  return {
    subscribe: store2.subscribe,
    addNotification: (notification) => addNotification(notification, store2),
    removeNotification: (notificationId) => removeNotification(notificationId, store2),
    clearNotifications: () => clearNotifications(store2)
  };
};
const store = createStore();
const Notifications_svelte_svelte_type_style_lang = "";
export {
  context as c,
  getNotificationsContext as g,
  positions as p,
  store as s
};
