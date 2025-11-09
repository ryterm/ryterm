<script>
	let { name, desc, buttons } = $props();
</script>

<div
	class="p-4 gap-8 flex justify-center items-center flex-col border border-neutral-300 dark:border-neutral-700 rounded-xl max-w-xl"
>
	<div class="flex gap-2 flex-col justify-center items-center text-center">
		<h1 class="text-2xl font-bold underline">{name}</h1>
		<p class="italic text-sm">{desc}</p>
	</div>
	<div class="flex flex-col gap-2 w-full">
		{@render buttons?.()}
	</div>
</div>
