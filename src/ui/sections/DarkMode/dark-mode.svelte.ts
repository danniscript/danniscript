import { browser } from '$app/environment'
import { setContext, getContext } from 'svelte'

class DarkModeModel {
	value = $state(true)

	constructor(value: boolean) {
		this.value = value

		if (browser) {
			const item = localStorage.getItem('DarkMode')
			if (item) this.value = JSON.parse(item)
		}

		$effect(() => {
			localStorage.setItem('DarkMode', JSON.stringify(this.value))
		})

		$effect(() => {
			if (this.value) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
		})
	}

	toggle() {
		this.value = !this.value
	}
}

export function setDarkMode(value: boolean) {
	return setContext<DarkModeModel>('DARK_MODE_CTX', new DarkModeModel(value))
}

export function getDarkMode() {
	return getContext<ReturnType<typeof setDarkMode>>('DARK_MODE_CTX')
}
