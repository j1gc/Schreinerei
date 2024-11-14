// used for encoding special characters in html
// https://www.w3schools.com/charsets/ref_html_entities_4.asp
// Enum to make it easier to use in code
export enum Entity {
	Ä = '&#xC4;',
	ä = '&#xE4;',
	Ö = '&#xD6;',
	ö = '&#xF6;',
	Ü = '&#xDC;',
	ü = '&#xFC;',
	Copyright = '&#xA9;',
	Euro = '&#x20AC;',
	Paragraph = '&#xA7;'
}
