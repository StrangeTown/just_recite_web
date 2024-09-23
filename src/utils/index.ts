export const goFullScreen = () => {
	if (document.fullscreenElement) {
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen();
	}
};

export const isLargeScreen = () => window.innerWidth > 1024;