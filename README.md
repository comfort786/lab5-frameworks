CSC 4035 - Lab 5: UI Frameworks Implementation

Student Name: Comfort Chapa

Lab Overview
This lab explored three modern UI frameworks through practical implementation. The project demonstrates responsive web design using Bootstrap's component-based system, Tailwind CSS's utility-first approach, and React's interactive component architecture. All deliverables are organized in a GitHub repository with separate directories for each framework.

Bootstrap Implementation
The Bootstrap demo showcases a responsive webpage built entirely with pre-designed components. A navigation bar with collapse functionality adapts to mobile screens, while a two-column grid layout automatically stacks on smaller devices. The implementation includes a styled success button and warning alert, all using Bootstrap's default classes without custom CSS. Working with Bootstrap proved efficient for rapid prototyping, though I noticed limitations when trying to deviate from predefined styles. The comprehensive documentation made component integration straightforward.

Tailwind CSS Implementation
Tailwind CSS was used to create a dynamic card layout that transforms from one column on mobile to three columns on desktop. Each card features consistent image sizing, descriptive text, and interactive buttons with hover effects. Unlike Bootstrap, Tailwind required memorizing numerous utility classes but offered greater design control. The mobile-first workflow with responsive prefixes (md:, lg:) became intuitive after practice. This approach felt more flexible than Bootstrap but demanded careful class organization.

React Implementation
The React component demonstrates state management and props usage through an interactive message toggler. The WelcomeMessage component personalizes greetings using props, while the ToggleMessage component employs useState() to control content visibility. Building this revealed React's strength in creating reusable components, though managing state required careful planning. The declarative nature of React simplified UI updates compared to manual DOM manipulation.
