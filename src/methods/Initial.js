import { IoLogoJavascript } from "react-icons/io";

bucket = {};
defaultBucket = {
    '--color-canvas-default-transparent':"rgba(13, 17, 23, 0)",
    '--color-page-header-bg':"#0d1117",
    '--color-marketing-icon-primary':"#79c0ff",
    '--color-marketing-icon-secondary':"#1f6feb",
    '--color-diff-blob-addition-num-text':"#c9d1d9",
    '--color-diff-blob-addition-fg':"#c9d1d9",
    '--color-diff-blob-addition-num-bg':"rgba(63, 185, 80, 0.3)",
    '--color-diff-blob-addition-line-bg':"rgba(46, 160, 67, 0.15)",
    '--color-diff-blob-addition-word-bg':"rgba(46, 160, 67, 0.4)",
    '--color-diff-blob-deletion-num-text':"#c9d1d9",
    '--color-diff-blob-deletion-fg':"#c9d1d9",
    '--color-diff-blob-deletion-num-bg':"rgba(248, 81, 73, 0.3)",
    '--color-diff-blob-deletion-line-bg':"rgba(248, 81, 73, 0.15)",
    '--color-diff-blob-deletion-word-bg':"rgba(248, 81, 73, 0.4)",
    '--color-diff-blob-hunk-num-bg':"rgba(56, 139, 253, 0.4)",
    '--color-diff-blob-expander-icon':"#8b949e",
    '--color-diff-blob-selected-line-highlight-mix-blend-mode':"screen",
    '--color-diffstat-deletion-border':"rgba(240, 246, 252, 0.1)",
    '--color-diffstat-addition-border':"rgba(240, 246, 252, 0.1)",
    '--color-diffstat-addition-bg':"#3fb950",
    '--color-search-keyword-hl':"rgba(210, 153, 34, 0.4)",
    '--color-prettylights-syntax-comment':"#8b949e",
    '--color-prettylights-syntax-constant':"#79c0ff",
    '--color-prettylights-syntax-entity':"#d2a8ff",
    '--color-prettylights-syntax-storage-modifier-import':"#c9d1d9",
    '--color-prettylights-syntax-entity-tag':"#7ee787",
    '--color-prettylights-syntax-keyword':"#ff7b72",
    '--color-prettylights-syntax-string':"#a5d6ff",
    '--color-prettylights-syntax-variable':"#ffa657",
    '--color-prettylights-syntax-brackethighlighter-unmatched':"#f85149",
    '--color-prettylights-syntax-invalid-illegal-text':"#f0f6fc",
    '--color-prettylights-syntax-invalid-illegal-bg':"#8e1519",
    '--color-prettylights-syntax-carriage-return-text':"#f0f6fc",
    '--color-prettylights-syntax-carriage-return-bg':"#b62324",
    '--color-prettylights-syntax-string-regexp':"#7ee787",
    '--color-prettylights-syntax-markup-list':"#f2cc60",
    '--color-prettylights-syntax-markup-heading':"#1f6feb",
    '--color-prettylights-syntax-markup-italic':"#c9d1d9",
    '--color-prettylights-syntax-markup-bold':"#c9d1d9",
    '--color-prettylights-syntax-markup-deleted-text':"#ffdcd7",
    '--color-prettylights-syntax-markup-deleted-bg':"#67060c",
    '--color-prettylights-syntax-markup-inserted-text':"#aff5b4",
    '--color-prettylights-syntax-markup-inserted-bg':"#033a16",
    '--color-prettylights-syntax-markup-changed-text':"#ffdfb6",
    '--color-prettylights-syntax-markup-changed-bg':"#5a1e02",
    '--color-prettylights-syntax-markup-ignored-text':"#c9d1d9",
    '--color-prettylights-syntax-markup-ignored-bg':"#1158c7",
    '--color-prettylights-syntax-meta-diff-range':"#d2a8ff",
    '--color-prettylights-syntax-brackethighlighter-angle':"#8b949e",
    '--color-prettylights-syntax-sublimelinter-gutter-mark':"#484f58",
    '--color-prettylights-syntax-constant-other-reference-link':"#a5d6ff",
    '--color-codemirror-text':"#c9d1d9",
    '--color-codemirror-bg':"#0d1117",
    '--color-codemirror-gutters-bg':"#0d1117",
    '--color-codemirror-guttermarker-text':"#0d1117",
    '--color-codemirror-guttermarker-subtle-text':"#6e7681",
    '--color-codemirror-linenumber-text':"#8b949e",
    '--color-codemirror-cursor':"#c9d1d9",
    '--color-codemirror-selection-bg':"rgba(56, 139, 253, 0.4)",
    '--color-codemirror-activeline-bg':"rgba(110, 118, 129, 0.1)",
    '--color-codemirror-matchingbracket-text':"#c9d1d9",
    '--color-codemirror-lines-bg':"#0d1117",
    '--color-codemirror-syntax-comment':"#8b949e",
    '--color-codemirror-syntax-constant':"#79c0ff",
    '--color-codemirror-syntax-entity':"#d2a8ff",
    '--color-codemirror-syntax-keyword':"#ff7b72",
    '--color-codemirror-syntax-storage':"#ff7b72",
    '--color-codemirror-syntax-string':"#a5d6ff",
    '--color-codemirror-syntax-support':"#79c0ff",
    '--color-codemirror-syntax-variable':"#ffa657",
    '--color-checks-bg':"#010409",
    '--color-checks-run-border-width':"1px",
    '--color-checks-container-border-width':"1px",
    '--color-checks-text-primary':"#c9d1d9",
    '--color-checks-text-secondary':"#8b949e",
    '--color-checks-text-link':"#58a6ff",
    '--color-checks-btn-icon':"#8b949e",
    '--color-checks-btn-hover-icon':"#c9d1d9",
    '--color-checks-btn-hover-bg':"rgba(110, 118, 129, 0.1)",
    '--color-checks-input-text':"#8b949e",
    '--color-checks-input-placeholder-text':"#6e7681",
    '--color-checks-input-focus-text':"#c9d1d9",
    '--color-checks-input-bg':"#161b22",
    '--color-checks-input-shadow':"0 0 0 1px (obj) => get_1.default(obj,  path)",
    '--color-checks-donut-error':"#f85149",
    '--color-checks-donut-pending':"#d29922",
    '--color-checks-donut-success':"#2ea043",
    '--color-checks-donut-neutral':"#8b949e",
    '--color-checks-dropdown-text':"#c9d1d9",
    '--color-checks-dropdown-bg':"#161b22",
    '--color-checks-dropdown-border':"#30363d",
    '--color-checks-dropdown-shadow':"rgba(1, 4, 9, 0.3)",
    '--color-checks-dropdown-hover-text':"#c9d1d9",
    '--color-checks-dropdown-hover-bg':"rgba(110, 118, 129, 0.1)",
    '--color-checks-dropdown-btn-hover-text':"#c9d1d9",
    '--color-checks-dropdown-btn-hover-bg':"rgba(110, 118, 129, 0.1)",
    '--color-checks-scrollbar-thumb-bg':"rgba(110, 118, 129, 0.4)",
    '--color-checks-header-label-text':"#8b949e",
    '--color-checks-header-label-open-text':"#c9d1d9",
    '--color-checks-header-border':"#21262d",
    '--color-checks-header-icon':"#8b949e",
    '--color-checks-line-text':"#8b949e",
    '--color-checks-line-num-text':"#6e7681",
    '--color-checks-line-timestamp-text':"#6e7681",
    '--color-checks-line-hover-bg':"rgba(110, 118, 129, 0.1)",
    '--color-checks-line-selected-bg':"rgba(56, 139, 253, 0.15)",
    '--color-checks-line-selected-num-text':"#58a6ff",
    '--color-checks-line-dt-fm-text':"#ffffff",
    '--color-checks-line-dt-fm-bg':"#9e6a03",
    '--color-checks-gate-bg':"rgba(187, 128, 9, 0.15)",
    '--color-checks-gate-text':"#8b949e",
    '--color-checks-gate-waiting-text':"#d29922",
    '--color-checks-step-header-open-bg':"#161b22",
    '--color-checks-step-error-text':"#f85149",
    '--color-checks-step-warning-text':"#d29922",
    '--color-checks-logline-text':"#8b949e",
    '--color-checks-logline-num-text':"#6e7681",
    '--color-checks-logline-debug-text':"#a371f7",
    '--color-checks-logline-error-text':"#8b949e",
    '--color-checks-logline-error-num-text':"#6e7681",
    '--color-checks-logline-error-bg':"rgba(248, 81, 73, 0.15)",
    '--color-checks-logline-warning-text':"#8b949e",
    '--color-checks-logline-warning-num-text':"#d29922",
    '--color-checks-logline-warning-bg':"rgba(187, 128, 9, 0.15)",
    '--color-checks-logline-command-text':"#58a6ff",
    '--color-checks-logline-section-text':"#3fb950",
    '--color-checks-ansi-black':"#0d1117",
    '--color-checks-ansi-black-bright':"#161b22",
    '--color-checks-ansi-white':"#b1bac4",
    '--color-checks-ansi-white-bright':"#b1bac4",
    '--color-checks-ansi-gray':"#6e7681",
    '--color-checks-ansi-red':"#ff7b72",
    '--color-checks-ansi-red-bright':"#ffa198",
    '--color-checks-ansi-green':"#3fb950",
    '--color-checks-ansi-green-bright':"#56d364",
    '--color-checks-ansi-yellow':"#d29922",
    '--color-checks-ansi-yellow-bright':"#e3b341",
    '--color-checks-ansi-blue':"#58a6ff",
    '--color-checks-ansi-blue-bright':"#79c0ff",
    '--color-checks-ansi-magenta':"#bc8cff",
    '--color-checks-ansi-magenta-bright':"#d2a8ff",
    '--color-checks-ansi-cyan':"#76e3ea",
    '--color-checks-ansi-cyan-bright':"#b3f0ff",
    '--color-project-header-bg':"#0d1117",
    '--color-project-sidebar-bg':"#161b22",
    '--color-project-gradient-in':"#161b22",
    '--color-project-gradient-out':"rgba(22, 27, 34, 0)",
    '--color-mktg-btn-bg':"#f6f8fa",
    '--color-mktg-btn-shadow-outline':"rgb(255 255 255 / 25%) 0 0 0 1px inset",
    '--color-mktg-btn-shadow-focus':"rgb(255 255 255 / 25%) 0 0 0 4px",
    '--color-mktg-btn-shadow-hover':"0 4px 7px rgba(0,  0,  0,  0.15),  0 100px 80px rgba(255,  255,  255,  0.02),  0 42px 33px rgba(255,  255,  255,  0.024),  0 22px 18px rgba(255,  255,  255,  0.028),  0 12px 10px rgba(255,  255,  255,  0.034),  0 7px 5px rgba(255,  255,  255,  0.04),  0 3px 2px rgba(255,  255,  255,  0.07)",
    '--color-mktg-btn-shadow-hover-muted':"rgb(255 255 255) 0 0 0 2px inset",
    '--color-avatar-bg':"rgba(255, 255, 255, 0.1)",
    '--color-avatar-border':"rgba(240, 246, 252, 0.1)",
    '--color-avatar-stack-fade':"#30363d",
    '--color-avatar-stack-fade-more':"#21262d",
    '--color-avatar-child-shadow':"-2px -2px 0 #0d1117",
    '--color-topic-tag-border':"rgba(0, 0, 0, 0)",
    '--color-counter-border':"rgba(0, 0, 0, 0)",
    '--color-select-menu-backdrop-border':"#484f58",
    '--color-select-menu-tap-highlight':"rgba(48, 54, 61, 0.5)",
    '--color-select-menu-tap-focus-bg':"#0c2d6b",
    '--color-overlay-shadow':"0 0 0 1px #30363d,  0 16px 32px rgba(1, 4, 9, 0.85)",
    '--color-header-text':"rgba(255, 255, 255, 0.7)",
    '--color-header-bg':"#161b22",
    '--color-header-divider':"#8b949e",
    '--color-header-logo':"#f0f6fc",
    '--color-header-search-bg':"#0d1117",
    '--color-header-search-border':"#30363d",
    '--color-sidenav-selected-bg':"#21262d",
    '--color-menu-bg-active':"#161b22",
    '--color-input-disabled-bg':"rgba(110, 118, 129, 0)",
    '--color-timeline-badge-bg':"#21262d",
    '--color-ansi-black':"#484f58",
    '--color-ansi-black-bright':"#6e7681",
    '--color-ansi-white':"#b1bac4",
    '--color-ansi-white-bright':"#ffffff",
    '--color-ansi-gray':"#6e7681",
    '--color-ansi-red':"#ff7b72",
    '--color-ansi-red-bright':"#ffa198",
    '--color-ansi-green':"#3fb950",
    '--color-ansi-green-bright':"#56d364",
    '--color-ansi-yellow':"#d29922",
    '--color-ansi-yellow-bright':"#e3b341",
    '--color-ansi-blue':"#58a6ff",
    '--color-ansi-blue-bright':"#79c0ff",
    '--color-ansi-magenta':"#bc8cff",
    '--color-ansi-magenta-bright':"#d2a8ff",
    '--color-ansi-cyan':"#39c5cf",
    '--color-ansi-cyan-bright':"#56d4dd",
    '--color-btn-text':"#c9d1d9",
    '--color-btn-bg':"#21262d",
    '--color-btn-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-shadow':"0 0 transparent",
    '--color-btn-inset-shadow':"0 0 transparent",
    '--color-btn-hover-bg':"#30363d",
    '--color-btn-hover-border':"#8b949e",
    '--color-btn-active-bg':"hsla(212, 12%, 18%, 1)",
    '--color-btn-active-border':"#6e7681",
    '--color-btn-selected-bg':"#161b22",
    '--color-btn-focus-bg':"#21262d",
    '--color-btn-focus-border':"#8b949e",
    '--color-btn-focus-shadow':"0 0 0 3px rgba(139, 148, 158, 0.3)",
    '--color-btn-shadow-active':"inset 0 0.15em 0.3em rgba(1, 4, 9, 0.15)",
    '--color-btn-shadow-input-focus':"0 0 0 0.2em rgba(31, 111, 235, 0.3)",
    '--color-btn-counter-bg':"#30363d",
    '--color-btn-primary-text':"#ffffff",
    '--color-btn-primary-bg':"#238636",
    '--color-btn-primary-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-primary-shadow':"0 0 transparent",
    '--color-btn-primary-inset-shadow':"0 0 transparent",
    '--color-btn-primary-hover-bg':"#2ea043",
    '--color-btn-primary-hover-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-primary-selected-bg':"#238636",
    '--color-btn-primary-selected-shadow':"0 0 transparent",
    '--color-btn-primary-disabled-text':"rgba(255, 255, 255, 0.5)",
    '--color-btn-primary-disabled-bg':"rgba(35, 134, 54, 0.6)",
    '--color-btn-primary-disabled-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-primary-focus-bg':"#238636",
    '--color-btn-primary-focus-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-primary-focus-shadow':"0 0 0 3px rgba(46, 164, 79, 0.4)",
    '--color-btn-primary-icon':"#ffffff",
    '--color-btn-primary-counter-bg':"rgba(255, 255, 255, 0.2)",
    '--color-btn-outline-text':"#58a6ff",
    '--color-btn-outline-hover-text':"#58a6ff",
    '--color-btn-outline-hover-bg':"#30363d",
    '--color-btn-outline-hover-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-outline-hover-shadow':"0 1px 0 rgba(1, 4, 9, 0.1)",
    '--color-btn-outline-hover-inset-shadow':"inset 0 1px 0 rgba(255, 255, 255, 0.03)",
    '--color-btn-outline-hover-counter-bg':"rgba(255, 255, 255, 0.2)",
    '--color-btn-outline-selected-text':"#ffffff",
    '--color-btn-outline-selected-bg':"#0d419d",
    '--color-btn-outline-selected-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-outline-selected-shadow':"0 0 transparent",
    '--color-btn-outline-disabled-text':"rgba(88, 166, 255, 0.5)",
    '--color-btn-outline-disabled-bg':"#0d1117",
    '--color-btn-outline-disabled-counter-bg':"rgba(31, 111, 235, 0.05)",
    '--color-btn-outline-focus-border':"rgba(240, 246, 252, 0.1)",
    '--color-btn-outline-focus-shadow':"0 0 0 3px rgba(17, 88, 199, 0.4)",
    '--color-btn-outline-counter-bg':"rgba(31, 111, 235, 0.1)",
    '--color-btn-danger-text':"#f85149",
    '--color-btn-danger-hover-text':"#ffffff",
    '--color-btn-danger-hover-bg':"#da3633",
    '--color-btn-danger-hover-border':"#f85149",
    '--color-btn-danger-hover-shadow':"0 0 transparent",
    '--color-btn-danger-hover-inset-shadow':"0 0 transparent",
    '--color-btn-danger-hover-icon':"#ffffff",
    '--color-btn-danger-hover-counter-bg':"rgba(255, 255, 255, 0.2)",
    '--color-btn-danger-selected-text':"#ffffff",
    '--color-btn-danger-selected-bg':"#b62324",
    '--color-btn-danger-selected-border':"#ff7b72",
    '--color-btn-danger-selected-shadow':"0 0 transparent",
    '--color-btn-danger-disabled-text':"rgba(248, 81, 73, 0.5)",
    '--color-btn-danger-disabled-bg':"#0d1117",
    '--color-btn-danger-disabled-counter-bg':"rgba(218, 54, 51, 0.05)",
    '--color-btn-danger-focus-border':"#f85149",
    '--color-btn-danger-focus-shadow':"0 0 0 3px rgba(248, 81, 73, 0.4)",
    '--color-btn-danger-counter-bg':"rgba(218, 54, 51, 0.1)",
    '--color-btn-danger-icon':"#f85149",
    '--color-underlinenav-icon':"#6e7681",
    '--color-underlinenav-border-hover':"rgba(110, 118, 129, 0.4)",
    '--color-action-list-item-inline-divider':"rgba(48, 54, 61, 0.48)",
    '--color-action-list-item-default-hover-bg':"rgba(177, 186, 196, 0.12)",
    '--color-action-list-item-default-hover-border':"rgba(0, 0, 0, 0)",
    '--color-action-list-item-default-active-bg':"rgba(177, 186, 196, 0.2)",
    '--color-action-list-item-default-active-border':"rgba(0, 0, 0, 0)",
    '--color-action-list-item-default-selected-bg':"rgba(177, 186, 196, 0.08)",
    '--color-action-list-item-danger-hover-bg':"rgba(248, 81, 73, 0.16)",
    '--color-action-list-item-danger-active-bg':"rgba(248, 81, 73, 0.24)",
    '--color-action-list-item-danger-hover-text':"#ff7b72",
    '--color-switch-track-bg':"#010409",
    '--color-switch-track-border':"#6e7681",
    '--color-switch-track-checked-bg':"rgba(31, 111, 235, 0.35)",
    '--color-switch-track-checked-hover-bg':"rgba(31, 111, 235, 0.5)",
    '--color-switch-track-checked-active-bg':"rgba(31, 111, 235, 0.65)",
    '--color-switch-track-checked-border':"#58a6ff",
    '--color-switch-knob-checked-bg':"#1f6feb",
    '--color-switch-knob-checked-disabled-bg':"#484f58",
    '--color-fg-default':"#c9d1d9",
    '--color-fg-muted':"#8b949e",
    '--color-fg-subtle':"#6e7681",
    '--color-fg-on-emphasis':"#ffffff",
    '--color-canvas-default':"#0d1117",
    '--color-canvas-overlay':"#161b22",
    '--color-canvas-inset':"#010409",
    '--color-canvas-subtle':"#161b22",
    '--color-border-default':"#30363d",
    '--color-border-muted':"#21262d",
    '--color-border-subtle':"rgba(240, 246, 252, 0.1)",
    '--color-shadow-small':"0 0 transparent",
    '--color-shadow-medium':"0 3px 6px #010409",
    '--color-shadow-large':"0 8px 24px #010409",
    '--color-shadow-extra-large':"0 12px 48px #010409",
    '--color-neutral-emphasis-plus':"#6e7681",
    '--color-neutral-emphasis':"#6e7681",
    '--color-neutral-muted':"rgba(110, 118, 129, 0.4)",
    '--color-neutral-subtle':"rgba(110, 118, 129, 0.1)",
    '--color-accent-fg':"#58a6ff",
    '--color-accent-emphasis':"#1f6feb",
    '--color-accent-muted':"rgba(56, 139, 253, 0.4)",
    '--color-accent-subtle':"rgba(56, 139, 253, 0.15)",
    '--color-success-fg':"#3fb950",
    '--color-success-emphasis':"#238636",
    '--color-success-muted':"rgba(46, 160, 67, 0.4)",
    '--color-success-subtle':"rgba(46, 160, 67, 0.15)",
    '--color-attention-fg':"#d29922",
    '--color-attention-emphasis':"#9e6a03",
    '--color-attention-muted':"rgba(187, 128, 9, 0.4)",
    '--color-attention-subtle':"rgba(187, 128, 9, 0.15)",
    '--color-severe-fg':"#db6d28",
    '--color-severe-emphasis':"#bd561d",
    '--color-severe-muted':"rgba(219, 109, 40, 0.4)",
    '--color-severe-subtle':"rgba(219, 109, 40, 0.15)",
    '--color-danger-fg':"#f85149",
    '--color-danger-emphasis':"#da3633",
    '--color-danger-muted':"rgba(248, 81, 73, 0.4)",
    '--color-danger-subtle':"rgba(248, 81, 73, 0.15)",
    '--color-open-fg':"#3fb950",
    '--color-open-emphasis':"#238636",
    '--color-open-muted':"rgba(46, 160, 67, 0.4)",
    '--color-open-subtle':"rgba(46, 160, 67, 0.15)",
    '--color-closed-fg':"#f85149",
    '--color-closed-emphasis':"#da3633",
    '--color-closed-muted':"rgba(248, 81, 73, 0.4)",
    '--color-closed-subtle':"rgba(248, 81, 73, 0.15)",
    '--color-done-fg':"#a371f7",
    '--color-done-emphasis':"#8957e5",
    '--color-done-muted':"rgba(163, 113, 247, 0.4)",
    '--color-done-subtle':"rgba(163, 113, 247, 0.15)",
    '--color-sponsors-fg':"#db61a2",
    '--color-sponsors-emphasis':"#bf4b8a",
    '--color-sponsors-muted':"rgba(219, 97, 162, 0.4)",
    '--color-sponsors-subtle':"rgba(219, 97, 162, 0.15)",
    '--color-primer-fg-disabled':"#484f58",
    '--color-primer-canvas-backdrop':"rgba(1, 4, 9, 0.8)",
    '--color-primer-canvas-sticky':"rgba(13, 17, 23, 0.95)",
    '--color-primer-border-active':"#F78166",
    '--color-primer-border-contrast':"rgba(255, 255, 255, 0.2)",
    '--color-primer-shadow-highlight':"0 0 transparent",
    '--color-primer-shadow-inset':"0 0 transparent",
    '--color-primer-shadow-focus':"0 0 0 3px #0c2d6b",
    '--color-scale-black':"#010409",
    '--color-scale-white':"#ffffff",
    '--color-scale-gray-0':"#f0f6fc",
    '--color-scale-gray-1':"#c9d1d9",
    '--color-scale-gray-2':"#b1bac4",
    '--color-scale-gray-3':"#8b949e",
    '--color-scale-gray-4':"#6e7681",
    '--color-scale-gray-5':"#484f58",
    '--color-scale-gray-6':"#30363d",
    '--color-scale-gray-7':"#21262d",
    '--color-scale-gray-8':"#161b22",
    '--color-scale-gray-9':"#0d1117",
    '--color-scale-blue-0':"#cae8ff",
    '--color-scale-blue-1':"#a5d6ff",
    '--color-scale-blue-2':"#79c0ff",
    '--color-scale-blue-3':"#58a6ff",
    '--color-scale-blue-4':"#388bfd",
    '--color-scale-blue-5':"#1f6feb",
    '--color-scale-blue-6':"#1158c7",
    '--color-scale-blue-7':"#0d419d",
    '--color-scale-blue-8':"#0c2d6b",
    '--color-scale-blue-9':"#051d4d",
    '--color-scale-green-0':"#aff5b4",
    '--color-scale-green-1':"#7ee787",
    '--color-scale-green-2':"#56d364",
    '--color-scale-green-3':"#3fb950",
    '--color-scale-green-4':"#2ea043",
    '--color-scale-green-5':"#238636",
    '--color-scale-green-6':"#196c2e",
    '--color-scale-green-7':"#0f5323",
    '--color-scale-green-8':"#033a16",
    '--color-scale-green-9':"#04260f",
    '--color-scale-yellow-0':"#f8e3a1",
    '--color-scale-yellow-1':"#f2cc60",
    '--color-scale-yellow-2':"#e3b341",
    '--color-scale-yellow-3':"#d29922",
    '--color-scale-yellow-4':"#bb8009",
    '--color-scale-yellow-5':"#9e6a03",
    '--color-scale-yellow-6':"#845306",
    '--color-scale-yellow-7':"#693e00",
    '--color-scale-yellow-8':"#4b2900",
    '--color-scale-yellow-9':"#341a00",
    '--color-scale-orange-0':"#ffdfb6",
    '--color-scale-orange-1':"#ffc680",
    '--color-scale-orange-2':"#ffa657",
    '--color-scale-orange-3':"#f0883e",
    '--color-scale-orange-4':"#db6d28",
    '--color-scale-orange-5':"#bd561d",
    '--color-scale-orange-6':"#9b4215",
    '--color-scale-orange-7':"#762d0a",
    '--color-scale-orange-8':"#5a1e02",
    '--color-scale-orange-9':"#3d1300",
    '--color-scale-red-0':"#ffdcd7",
    '--color-scale-red-1':"#ffc1ba",
    '--color-scale-red-2':"#ffa198",
    '--color-scale-red-3':"#ff7b72",
    '--color-scale-red-4':"#f85149",
    '--color-scale-red-5':"#da3633",
    '--color-scale-red-6':"#b62324",
    '--color-scale-red-7':"#8e1519",
    '--color-scale-red-8':"#67060c",
    '--color-scale-red-9':"#490202",
    '--color-scale-purple-0':"#eddeff",
    '--color-scale-purple-1':"#e2c5ff",
    '--color-scale-purple-2':"#d2a8ff",
    '--color-scale-purple-3':"#bc8cff",
    '--color-scale-purple-4':"#a371f7",
    '--color-scale-purple-5':"#8957e5",
    '--color-scale-purple-6':"#6e40c9",
    '--color-scale-purple-7':"#553098",
    '--color-scale-purple-8':"#3c1e70",
    '--color-scale-purple-9':"#271052",
    '--color-scale-pink-0':"#ffdaec",
    '--color-scale-pink-1':"#ffbedd",
    '--color-scale-pink-2':"#ff9bce",
    '--color-scale-pink-3':"#f778ba",
    '--color-scale-pink-4':"#db61a2",
    '--color-scale-pink-5':"#bf4b8a",
    '--color-scale-pink-6':"#9e3670",
    '--color-scale-pink-7':"#7d2457",
    '--color-scale-pink-8':"#5e103e",
    '--color-scale-pink-9':"#42062a",
    '--color-scale-coral-0':"#FFDDD2",
    '--color-scale-coral-1':"#FFC2B2",
    '--color-scale-coral-2':"#FFA28B",
    '--color-scale-coral-3':"#F78166",
    '--color-scale-coral-4':"#EA6045",
    '--color-scale-coral-5':"#CF462D",
    '--color-scale-coral-6':"#AC3220",
    '--color-scale-coral-7':"#872012",
    '--color-scale-coral-8':"#640D04",
    '--color-scale-coral-9':"#460701"
};

// to initialize the all data using the storage
chrome.storage.sync.get('bucket', function(drops) {
  // check if data exists.
  if (drops) {
      bucket = drops;
  } else {
      bucket[Object.keys(bucket).length] = defaultBucket;
  }
});

// Save it using the Chrome extension storage API.
chrome.storage.sync.set({'bucket': bucket}, function() {
  // Notify that we saved.
  alert('Settings saved');
});