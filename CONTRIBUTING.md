# Contributing to Animate.css

Thanks for your interest in contributing to Animate.css! Before contributing, please make sure you understand the guidelines provided here. Animate.css is widely used, so it’s important to maintain a high level of quality and to contribute with the interests of the community in mind.

## Design Guidelines

Animations, like many facets of visual and interaction design, can be highly subjective. Maintaining a consistent library of animations in an active community can be difficult; these design guidelines are designed to help encourage thoughtful criticism of new animations that are proposed for Animate.css.

The animations in Animate.css should follow a few key principles:

- **Animations should be subtle.** Avoid creating animations that involve large translations, or span a natural duration of longer than 1 second.
- **Animations should be tolerable.** Related to subtlety, animations should be tolerable—seeing them repeatedly should not become too annoying or overbearing.
- **Animations should not interfere with document flow or control/input availability.** In other words, the absence of an animation should never reduce usability of a product: they should be non-critical and seen as “progressive enhancements”. Avoid animations that change properties such as `position` or `display`.
- **Animations should be helpful.** They should be designed to guide users to a point of interest, ease natural reading order, or to communicate relationships between elements.
- **Animations should feel familiar.** Avoid introducing animations that feel out-of-place compared to the existing set.
- **Animations should feel natural.** Animations should reflect, as much as is reasonable, motion that occurs in natural physics. Avoid extreme timing functions, and model animations on real-world events.

## Code Styling

1. Match the naming convention (camelCase, categorized [fades, bounces, etc])
2. Indent with two spaces
3. End each file with a blank line
4. Make sure you have an editorconfig plugin/extension enabled in your editor and all the dependencies installed so editorconfig and prettier can automatically format your code when committing.

## Types of Contributions We Welcome

Animate.css is more than just a collection of animations. We welcome a variety of contributions that help improve the project for everyone, including:

### 🧩 Animation Improvements
- Refinements to existing animations (timing, easing, consistency)
- Bug fixes that improve reliability or performance
- New animations that follow the design guidelines above

### 📚 Documentation Improvements
- Fixing typos, grammar, or formatting issues
- Improving clarity of usage examples
- Expanding explanations for accessibility or best practices

### ♿ Accessibility Enhancements
- Improvements that help animations respect user preferences such as `prefers-reduced-motion`
- Documentation updates that explain accessibility considerations when using Animate.css

### 🧪 Demos and Examples
- Improvements to existing demo pages
- Clearer or more illustrative examples showing real-world usage

### 🛠 Tooling and Maintenance
- Build, formatting, or configuration improvements
- CI or test-related enhancements that do not change public APIs

If you are unsure whether a change fits within the scope of Animate.css, feel free to open an issue to discuss it before starting work.

## How To Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project
2. Create a new topic branch on your local forked copy
3. Push your topic branch up to your fork
4. Create a [pen](https://codepen.io/) demonstrating what your change will do.
5. [Open a Pull Request](https://help.github.com/articles/about-pull-requests/) with a clear title and description against the `main` branch.
