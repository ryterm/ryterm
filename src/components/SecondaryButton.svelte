<script>
	let { label, func } = $props();
</script>

<button
	class="cursor-pointer select-none flex justify-center items-center border rounded-xl p-2 bg-white dark:bg-neutral-950 border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 hover:dark:bg-neutral-800"
	onclick={func}
>
	{label}
</button>

<style>
	button {
		width: var(--width, auto);
	}
</style>
