// Simplified demo registry - just export demo metadata
// The actual code strings are stored in the JSON files
export const demoRegistry = {
    "card-demo": () => import("./demos/card-demo"),
    "card-custom": () => import("./demos/card-custom"),
    "card-with-image": () => import("./demos/card-with-image"),
    "card-profile": () => import("./demos/card-profile"),
    "card-stats": () => import("./demos/card-stats"),

    "button-demo": () => import("./demos/button-demo"),
    "button-variants": () => import("./demos/button-variants"),
    "button-sizes": () => import("./demos/button-sizes"),
    "button-with-icon": () => import("./demos/button-with-icon"),
    "button-secondary": () => import("./demos/button-secondary"),
    "button-outline": () => import("./demos/button-outline"),
    "button-ghost": () => import("./demos/button-ghost"),
    "button-destructive": () => import("./demos/button-destructive"),
    "button-link": () => import("./demos/button-link"),
    "button-xs": () => import("./demos/button-xs"),
    "button-sm": () => import("./demos/button-sm"),
    "button-lg": () => import("./demos/button-lg"),

    "carousel-demo": () => import("./demos/carousel-demo"),
    "carousel-loop": () => import("./demos/carousel-loop"),
    "carousel-drag-free": () => import("./demos/carousel-drag-free"),
    "carousel-vertical": () => import("./demos/carousel-vertical"),

    "buttongroup-demo": () => import("./demos/buttongroup-demo"),
    "buttongroup-variants": () => import("./demos/buttongroup-variants"),
    "buttongroup-sizes": () => import("./demos/buttongroup-sizes"),
    "buttongroup-with-dropdown": () =>
        import("./demos/buttongroup-with-dropdown"),
    "buttongroup-outline": () => import("./demos/buttongroup-outline"),
    "buttongroup-secondary": () => import("./demos/buttongroup-secondary"),
    "buttongroup-ghost": () => import("./demos/buttongroup-ghost"),
    "buttongroup-destructive": () => import("./demos/buttongroup-destructive"),
    "buttongroup-sm": () => import("./demos/buttongroup-sm"),
    "buttongroup-lg": () => import("./demos/buttongroup-lg"),

    "checkbox-demo": () => import("./demos/checkbox-demo"),
    "checkbox-variants": () => import("./demos/checkbox-variants"),
    "checkbox-sizes": () => import("./demos/checkbox-sizes"),
    "checkbox-with-label": () => import("./demos/checkbox-with-label"),
    "checkbox-secondary": () => import("./demos/checkbox-secondary"),
    "checkbox-destructive": () => import("./demos/checkbox-destructive"),
    "checkbox-outline": () => import("./demos/checkbox-outline"),
    "checkbox-ghost": () => import("./demos/checkbox-ghost"),
    "checkbox-xs": () => import("./demos/checkbox-xs"),
    "checkbox-sm": () => import("./demos/checkbox-sm"),
    "checkbox-lg": () => import("./demos/checkbox-lg"),

    "dialog-demo": () => import("./demos/dialog-demo"),
    "dialog-sizes": () => import("./demos/dialog-sizes"),
    "dialog-with-form": () => import("./demos/dialog-with-form"),
    "dialog-scrollable": () => import("./demos/dialog-scrollable"),

    "drawer-demo": () => import("./demos/drawer-demo"),
    "drawer-directions": () => import("./demos/drawer-directions"),

    "dropdown-menu-demo": () => import("./demos/dropdown-menu-demo"),
    "dropdown-menu-with-icons": () =>
        import("./demos/dropdown-menu-with-icons"),
    "dropdown-menu-checkboxes": () =>
        import("./demos/dropdown-menu-checkboxes"),
    "dropdown-menu-radio": () => import("./demos/dropdown-menu-radio"),
    "dropdown-menu-submenu": () => import("./demos/dropdown-menu-submenu"),

    "headings-demo": () => import("./demos/headings-demo"),
    "headings-variants": () => import("./demos/headings-variants"),
    "headings-paragraph": () => import("./demos/headings-paragraph"),
    "headings-label": () => import("./demos/headings-label"),
    "headings-code": () => import("./demos/headings-code"),
    "headings-custom-color": () => import("./demos/headings-custom-color"),
    "headings-h1": () => import("./demos/headings-h1"),
    "headings-h2": () => import("./demos/headings-h2"),
    "headings-h3": () => import("./demos/headings-h3"),
    "headings-h4": () => import("./demos/headings-h4"),
    "headings-h5": () => import("./demos/headings-h5"),
    "headings-h6": () => import("./demos/headings-h6"),

    "image-demo": () => import("./demos/image-demo"),
    "image-fit": () => import("./demos/image-fit"),
    "image-cover": () => import("./demos/image-cover"),
    "image-contain": () => import("./demos/image-contain"),
    "image-fill": () => import("./demos/image-fill"),
    "image-scale-down": () => import("./demos/image-scale-down"),
    "image-none": () => import("./demos/image-none"),

    "popover-demo": () => import("./demos/popover-demo"),
    "popover-with-header": () => import("./demos/popover-with-header"),
    "popover-with-form": () => import("./demos/popover-with-form"),
    "popover-alignments": () => import("./demos/popover-alignments"),

    "progress-demo": () => import("./demos/progress-demo"),
    "progress-color": () => import("./demos/progress-color"),
    "progress-height": () => import("./demos/progress-height"),
    "progress-speed": () => import("./demos/progress-speed"),
    "progress-variants": () => import("./demos/progress-variants"),

    "sidebar-demo": () => import("./demos/sidebar-demo"),
    "sidebar-with-icons": () => import("./demos/sidebar-with-icons"),
    "sidebar-groups": () => import("./demos/sidebar-groups"),

    "accordion-demo": () => import("./demos/accordion-demo"),
    "accordion-multiple": () => import("./demos/accordion-multiple"),

    "alert-demo": () => import("./demos/alert-demo"),
    "alert-destructive": () => import("./demos/alert-destructive"),

    "avatar-demo": () => import("./demos/avatar-demo"),
    "avatar-group": () => import("./demos/avatar-group"),
};
