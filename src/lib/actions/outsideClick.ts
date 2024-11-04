type HandlerFunction = () => void

type Props =
	| {
			handler: HandlerFunction
			exception: HTMLElement
	  }
	| HandlerFunction

export function outsideClick(node: HTMLElement, props: Props) {
	const { handler, exception } =
		typeof props === 'function'
			? { handler: props, exception: document.createElement('div') }
			: props

	document.addEventListener('pointerup', handleClickOutside)

	function handleClickOutside(event: PointerEvent) {
		if (!node.contains(event.target as Node) && !exception.contains(event.target as Node)) {
			handler()
		}
	}

	return {
		destroy() {
			document.removeEventListener('pointerup', handleClickOutside)
		}
	}
}
