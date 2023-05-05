import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alfred-headshot.png","batman-headshot.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f9da4d0f.js","imports":["_app/immutable/entry/start.f9da4d0f.js","_app/immutable/chunks/index.54d907fa.js","_app/immutable/chunks/singletons.54413dde.js","_app/immutable/chunks/index.24d82bc5.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.465ed95b.js","imports":["_app/immutable/entry/app.465ed95b.js","_app/immutable/chunks/index.54d907fa.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/chat/[chatId]",
				pattern: /^\/chat\/([^/]+?)\/?$/,
				params: [{"name":"chatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faqs",
				pattern: /^\/faqs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
