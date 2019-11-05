# Architecture Design Record

## 0: Use Architecture Design Records

> Architecture for agile projects has to be described and defined differently.
> Not all decisions will be made at once, nor will all of them be done when the project begins.
> _Michael Nygard, [Documenting Architecture Decisions][adr]_

This document will capture the record of architecture decisions.
Where needed each ADR will record the context, the decision, the status and consequences of the decision.

[adr]: http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions

## 1: Use NPS to manage scripts

[NPS][nps] allows you to move your scripts outside of package.json preventing it from growing into an unmaintainable mess.

This project specifies all scripts in the package-scripts.yml file.

[nps]: https://www.npmjs.com/package/nps

## 2: Use EditorConfig for consistent indentation, line-endings

[EditorConfig][editorconfig] project defines a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

This project uses `2 space` indentation for all files unless otherwise specified.

[editorconfig]: https://editorconfig.org/

## 3: Use Prettier-ESLint to format JS files

[prettier] is an opinionated JavaScript formatter inspired by `refmt` with advanced support for language features from ES2017, JSX, and Flow. It removes all original styling and ensures that all outputted JavaScript conforms to a consistent style.

[prettier-eslint] + [prettier-eslint-cli] formats JavaScript using `prettier` followed by `eslint --fix`.

[prettier]: https://github.com/prettier/prettier
[prettier-eslint]: https://github.com/prettier/prettier-eslint
[prettier-eslint-cli]: https://github.com/prettier/prettier-eslint-cli
