export function outsideClick(node: HTMLElement, handler: () => void) {
	document.addEventListener('pointerup', handleClickOutside)

	function handleClickOutside(event: PointerEvent) {
		if (!node.contains(event.target as Node)) {
			handler()
		}
	}

	return {
		destroy() {
			document.removeEventListener('pointerup', handleClickOutside)
		}
	}
}
