<script>
	let { source, alt } = $props();
</script>

<img
	class="object-cover rounded-xl border border-neutral-300 dark:border-neutral-700"
	src={source}
	{alt}
/>

<style>
	img {
		width: var(--size, 30rem);
		height: var(--size, 30rem);
	}
</style>
