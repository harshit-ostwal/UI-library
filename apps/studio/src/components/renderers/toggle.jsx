import { BookmarkIcon } from "lucide-react";

export function renderToggle({ Toggle }, customClassName) {
  return (
    <Toggle 
      aria-label="Toggle bookmark" 
      size="sm" 
      variant="outline"
      className={customClassName}
    >
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  );
}