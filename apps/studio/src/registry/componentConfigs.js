import {
  buttonVariants,
  buttonVariantsConfig,
} from "@repo/components/ui/button/button.styles.js";

/**
 * Component registry with auto-extracted props from CVA configs
 *
 * For compound components (Dialog, Dropdown, Tooltip), we define:
 * - type: 'compound' to indicate it needs special rendering
 * - demoProps: configurable properties for the demo
 * - The actual demo rendering is handled in ComponentRenderer
 */
export const componentConfigs = {
  button: {
    id: "button",
    name: "Button",
    type: "simple",
    path: "@repo/components",
    importName: "Button",
    variantsConfig: buttonVariants,
    variantsConfigRaw: buttonVariantsConfig,
    additionalProps: [
      {
        name: "children",
        type: "text",
        defaultValue: "Button",
        placeholder: "Button text",
        description: "The content of the button",
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
        description: "Disables the button",
      },
      {
        name: "type",
        type: "select",
        options: ["button", "submit", "reset"],
        defaultValue: "button",
        description: "HTML button type",
      },
      {
        name: "asChild",
        type: "boolean",
        defaultValue: false,
        description: "Render as child element (Slot)",
      },
      {
        name: "isLoading",
        type: "boolean",
        defaultValue: false,
      },
     {
  name: "leftIcon",
  type: "text",
  placeholder: "e.g. 🔥",
},
{
  name: "rightIcon",
  type: "text",
  placeholder: "e.g. →",
},
    ],
  },
  dialog: {
  id: "dialog",
  name: "Dialog",
  type: "compound",
  path: "@repo/components",
  importName: "Dialog",
  description:
    "A modal dialog that interrupts the user with important content",

  demoProps: [
    {
      name: "triggerText",
      type: "text",
      defaultValue: "Open Dialog",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Are you absolutely sure?",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "This action cannot be undone.",
    },
    {
      name: "bodyText",
      type: "text",
      defaultValue:
        "This will permanently delete your account and remove your data.",
    },
    {
      name: "cancelText",
      type: "text",
      defaultValue: "Cancel",
    },
    {
      name: "confirmText",
      type: "text",
      defaultValue: "Continue",
    },

    // 🔥 NEW (IMPORTANT)
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      defaultValue: "md",
      description: "Controls dialog width/size",
    },

    {
      name: "showFooter",
      type: "boolean",
      defaultValue: true,
      description: "Show footer actions",
    },
  ],
},
  "dropdown-menu": {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    type: "compound",
    path: "@repo/components",
    importName: "DropdownMenu",
    description:
      "A menu that appears when triggered, containing a list of actions",
    demoProps: [
      {
        name: "triggerText",
        type: "text",
        defaultValue: "Open Menu",
        placeholder: "Trigger button text",
        description: "Text for the trigger button",
      },
    ],
  },
  tooltip: {
    id: "tooltip",
    name: "Tooltip",
    type: "compound",
    path: "@repo/components",
    importName: "Tooltip",
    description: "A popup that displays information related to an element",
    demoProps: [
      {
        name: "content",
        type: "text",
        defaultValue: "Helpful information",
        placeholder: "Tooltip content",
        description: "The content shown in the tooltip",
      },
      {
        name: "triggerText",
        type: "text",
        defaultValue: "Hover me",
        placeholder: "Trigger text",
        description: "Text for the trigger element",
      },
      {
        name: "side",
        type: "select",
        options: ["top", "right", "bottom", "left"],
        defaultValue: "top",
        description: "The side of the trigger to show the tooltip",
      },
    ],
  },
};

export const componentList = Object.values(componentConfigs);
