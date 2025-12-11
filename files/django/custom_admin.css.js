export const customAdminCSS = `
html[data-theme="light"],
:root {
	--primary-color: #430c05;
	--secondary-color: #ab5a3f;
	--tertiary-color: #ffbf66;

	--primary: #ab5a3f;
	--secondary: #ab5a3f;
	--accent: #f5dd5d;
	--primary-fg: #fff;

	--body-fg: #333;
	--body-bg: #fff;
	--body-quiet-color: #666;
	--body-loud-color: #000;

	--header-color: #ffc;
	--header-branding-color: var(--accent);
	--header-bg: var(--secondary);
	--header-link-color: var(--primary-fg);

	--breadcrumbs-fg: var(--accent);
	--breadcrumbs-link-fg: var(--body-bg);
	--breadcrumbs-bg: #264b5d;

	--link-fg: var(--secondary-color);
	--link-hover-color: var(--accent);
	--link-selected-fg: var(--secondary);

	--hairline-color: #e8e8e8;
	--border-color: #ccc;

	--error-fg: #ba2121;

	--message-success-bg: #dfd;
	--message-warning-bg: #ffc;
	--message-error-bg: #ffefef;

	--darkened-bg: #f8f8f8;
	--selected-bg: #e4e4e4;
	--selected-row: #ffc;

	--button-fg: #fff;
	--button-bg: var(--secondary);
	--button-hover-bg: var(--accent);
	--default-button-bg: var(--primary-color);
	--default-button-hover-bg: var(--accent);
	--close-button-bg: #747474;
	--close-button-hover-bg: #333;
	--delete-button-bg: #ba2121;
	--delete-button-hover-bg: #a41515;

	--object-tools-fg: var(--button-fg);
	--object-tools-bg: var(--close-button-bg);
	--object-tools-hover-bg: var(--close-button-hover-bg);
}

html[data-theme="dark"] {
	--primary: #5d4426;
	--secondary: #ab5a3f;
	--primary-fg: #f7f7f7;
	--body-fg: #eeeeee;
	--body-bg: #121212;
	--body-quiet-color: #e0e0e0;
	--body-loud-color: #ffffff;
	--breadcrumbs-link-fg: #e0e0e0;
	--breadcrumbs-bg: var(--secondary-color);
	--link-fg: var(--tertiary-color);
	--link-hover-color: var(--accent);
	--link-selected-fg: #6f94c6;
	--hairline-color: #272727;
	--border-color: #353535;
	--error-fg: #e35f5f;
	--message-success-bg: #006b1b;
	--message-warning-bg: #583305;
	--message-error-bg: #570808;
	--darkened-bg: #212121;
	--selected-bg: #1b1b1b;
	--selected-row: #ffbf6639;
	--close-button-bg: #333333;
	--close-button-hover-bg: #666666;
}

header#header {
	background: var(--primary-color);
}
.theme-toggle svg.theme-icon-when-auto,
.theme-toggle svg.theme-icon-when-dark,
.theme-toggle svg.theme-icon-when-light {
	color: #ffffff00;
}
div.breadcrumbs {
	background: var(--secondary-color);
}
.form-control.input {
	width: 270px;
}

.vTextField {
	width: 610px;
}
`
