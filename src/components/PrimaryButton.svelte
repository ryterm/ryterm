<script>
	let { label, func } = $props();
</script>

<button
	class="cursor-pointer select-none rounded-xl p-2 border border-black bg-black text-white dark:border-white dark:bg-white dark:text-black hover:bg-neutral-800 hover:border-neutral-800 dark:hover:bg-neutral-200 dark:hover:border-neutral-200"
	onclick={func}
>
	{label}
</button>

<style>
	button {
		width: var(--width, auto);
	}
</style>
