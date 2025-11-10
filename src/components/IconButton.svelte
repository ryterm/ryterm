<script>
	const { icon, label = null, func } = $props();
</script>

<button
	title={label}
	onclick={func}
	class="cursor-pointer flex justify-center p-2 rounded-xl items-center border hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
>
	<i class={`bxr  bx-${icon}`}></i>
</button>
