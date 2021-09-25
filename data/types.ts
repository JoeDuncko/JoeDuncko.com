export type VisibilitySettings = {
  display: boolean;
  displayWhenPrinting: boolean;
};

// I want VisibilitySettings to default to true if they are not set
// I need to add them to the other types of data
// I'd also like displayWhenPrinting to be false by default if diplay is false

export const createVisibilitySettings = ({
  display = true,
  displayWhenPrinting = null,
}: {
  display: boolean;
  displayWhenPrinting: boolean | null;
}): VisibilitySettings => ({
  display,
  displayWhenPrinting:
    displayWhenPrinting !== null ? displayWhenPrinting : display,
});
