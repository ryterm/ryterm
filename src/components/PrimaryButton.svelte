<script>
	let { label, link } = $props();
</script>

<a href={link}>
	{label}
</a>

<style>
	a {
		color: white;
		background-color: blue;
	}
</style>
