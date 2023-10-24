const ArrowDown = () => (
	<svg
		style={{
			width: 14,
			height: 14,
		}}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 5v14M19 12l-7 7-7-7" />
	</svg>
);

const ArrowUp = () => (
  <svg
    style={{
      width: 14,
      height: 14,
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const ArrowLeft = () => (
	<svg
		style={{
			width: 14,
			height: 14,
		}}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M19 12H5M12 5l-7 7 7 7" />
	</svg>
);

const ArrowRight = () => (
	<svg
		style={{
			width: 14,
			height: 14,
		}}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);

const KeyWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-1 shadow rounded flex justify-center items-center">
    {children}
  </div>
);

export const ArrowDownKey = () => (
  <KeyWrapper>
    <ArrowDown />
  </KeyWrapper>
);

export const ArrowLeftKey = () => (
  <KeyWrapper>
    <ArrowLeft />
  </KeyWrapper>
);

export const ArrowRightKey = () => (
  <KeyWrapper>
    <ArrowRight />
  </KeyWrapper>
);

export const ArrowUpKey = () => (
  <KeyWrapper>
    <ArrowUp />
  </KeyWrapper>
);

