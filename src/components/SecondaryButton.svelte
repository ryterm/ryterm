<script>
	let { label, link } = $props();
</script>

<a href={link}>
	{label}
</a>

<style>
	a {
		color: black;
	}

	@media (prefers-color-scheme: dark) {
		a {
			color: white;
		}
	}
</style>
