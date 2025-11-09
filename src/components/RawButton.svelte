<script>
	let { label, func } = $props();
</script>

<button class="cursor-pointer underline hover:no-underline" onclick={func}>
	{label}
</button>
