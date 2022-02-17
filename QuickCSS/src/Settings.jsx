import { persist, patchedQuickCSS } from "@cumcord/pluginData";
import { useNest } from "@cumcord/utils";
import { useRef, useEffect } from "@cumcord/modules/common/React"

import { EditorState, setup } from './setup.js';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'

export default () => {
    useNest(persist);

	const editor = useRef();
	
	useEffect(()=>{
		const startState = EditorState.create({
			doc: persist.ghost.css,
			extensions: [
				EditorView.updateListener.of((update) => {
					if (update.docChanged) {
						persist.store.css = update.state.doc.toString()
						patchedQuickCSS(persist.ghost.css)
					}
				}),
				setup, 
				keymap.of([defaultKeymap, indentWithTab]),
				oneDark,
				EditorView.theme({
					".cm-content, .cm-gutter": {minHeight: "20rem"},
					'.cm-tooltip-autocomplete': {
						
					},
					'.cm-tooltip-autocomplete > ul > li': {
						width: '100%',
						fontSize: '14px',
						minHeight: '28px',
						display: 'flex',
						alignItems: 'center',
						padding: '0 !important',
					},
					'.cm-tooltip-autocomplete > ul': {
						minWidth: '180px',
						width: '324px',
						height: '100%',
						maxHeight: '40vh !important',
						padding: '6px 0 !important',
						fontFamily: 'DejaVuSansMono, Menlo-Regular, Inconsolata !important',
					},
				}),
				css()
			],
		})
		const view = new EditorView({ state: startState, parent: editor.current });
		return () => {
      		view.destroy();
    	};
	}, [])

    return (
		<div ref={editor}></div>
	);

};
