export function renderSelect(
  { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectGroup, 
    SelectLabel, 
    SelectItem, 
    SelectSeparator 
  }, 
  customClassName
) {
  return (
    <div className={`flex flex-row flex-wrap items-start gap-8 ${customClassName}`}>
      
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold uppercase text-muted-foreground/50">Basic</span>
        <Select defaultValue="apple">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold uppercase text-muted-foreground/50">Complex Grouping</span>
        <Select defaultValue="react">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectGroup>
            
            <SelectSeparator />
            
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="go" disabled>Go (Coming Soon)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

    </div>
  );
}